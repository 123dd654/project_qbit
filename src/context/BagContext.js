"use client";
import React, { useEffect, useState, createContext, useContext, useRef } from "react";
import io from "socket.io-client";
import { useRouter } from "next/navigation";

const getOrCreateClientId = () => {
  if (typeof window === "undefined") return null;
  const KEY = "qbit_client_id";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = (crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`);
    localStorage.setItem(KEY, id);
  }
  return id;
};

export const BagContext = createContext();
export const useBag = () => useContext(BagContext);

export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState({
    totalItems: 0,
    totalPrice: 0,
    items: [],
    totalViewers: 0,
  });
  const [otherBags, setOtherBags] = useState([]);
  const [result, setResult] = useState(null); // ✅ 주문 완료 스냅샷 {myBag, otherBags}

  const router = useRouter();
  const socketRef = useRef(null);
  const otherRawRef = useRef([]);
  const lastSentItemsRef = useRef("");
  const clientIdRef = useRef(typeof window !== "undefined" ? getOrCreateClientId() : null);
  const lastSocketIdRef = useRef(null);

  // ✅ 합계 계산
  const recomputeTotals = (items) => {
    const totalItems = items.reduce((acc, it) => acc + it.quantity, 0);
    const totalPrice = items.reduce((acc, it) => {
      const optionSum = it.options ? it.options.reduce((oAcc, o) => oAcc + o.price, 0) : 0;
      return acc + it.price * it.quantity + optionSum;
    }, 0);
    return { totalItems, totalPrice };
  };

  // ✅ 장바구니 초기화
  const finalizeOrder = () => {
    setBag((prev) => ({
      ...prev,
      items: [],
      totalItems: 0,
      totalPrice: 0,
    }));
  };

  // ✅ 상대방 bag 필터링
  const applyOtherFilter = () => {
    const raw = otherRawRef.current || [];
    const myClientId = clientIdRef.current;
    const mySocketId = lastSocketIdRef.current;

    const filtered = raw.filter((entry) => {
      if (!entry) return false;
      if (myClientId && entry.ownerId && entry.ownerId === myClientId) return false;
      if (mySocketId && entry.socketId && entry.socketId === mySocketId) return false;
      return true;
    });

    setOtherBags(filtered);
  };

  useEffect(() => {
    const s = io("http://qbitmenu.com", { transports: ["websocket", "polling"] });
    socketRef.current = s;

    s.on("connect", () => {
      lastSocketIdRef.current = s.id;
      applyOtherFilter();
    });

    // ✅ 내/상대방 장바구니 업데이트
    s.on("updateBag", (incoming) => {
      const safe = JSON.parse(JSON.stringify(incoming || {}));
      const mine = clientIdRef.current && safe.ownerId === clientIdRef.current;

      if (mine) {
        setBag((prev) => ({
          totalItems: safe.totalItems ?? prev.totalItems,
          totalPrice: safe.totalPrice ?? prev.totalPrice,
          items: Array.isArray(safe.items) ? safe.items : prev.items,
          totalViewers: safe.totalViewers ?? prev.totalViewers,
        }));
        return;
      }

      const current = Array.isArray(otherRawRef.current) ? otherRawRef.current : [];
      const idx = current.findIndex((b) => b?.ownerId && b.ownerId === safe.ownerId);
      if (idx >= 0) current[idx] = safe;
      else current.push(safe);

      otherRawRef.current = current;
      applyOtherFilter();
    });

    s.on("otherBags", (list) => {
      otherRawRef.current = JSON.parse(JSON.stringify(list || []));
      applyOtherFilter();
    });

    s.on("viewers", (viewersCount) => {
      setBag((prev) => ({ ...prev, totalViewers: viewersCount }));
    });

    // ✅ 주문 완료 이벤트 수신
    s.on("orderPlaced", (orderData) => {
      setResult(orderData); // { myBag, otherBags }
      router.push("/complete");
    });

    return () => {
      s.removeAllListeners();
      s.disconnect();
    };
  }, [router]);

  useEffect(() => {
    applyOtherFilter();
  }, [bag.totalItems, bag.totalPrice, bag.items?.length]);

  // ✅ 장바구니 emit
  const emitIfReady = (nextBag) => {
    const s = socketRef.current;
    if (!s || !s.connected) return;

    const snapshot = JSON.stringify(nextBag.items || []);
    if (snapshot === lastSentItemsRef.current) return;
    lastSentItemsRef.current = snapshot;

    const payload = {
      ...nextBag,
      ownerId: clientIdRef.current,
      socketId: lastSocketIdRef.current,
      ts: Date.now(),
    };
    s.emit("updateBag", payload);
  };

  const updateWithItems = (mutator) => {
    setBag((prev) => {
      const items = mutator(prev.items);
      const { totalItems, totalPrice } = recomputeTotals(items);
      const nextBag = { ...prev, items, totalItems, totalPrice };
      emitIfReady(nextBag);
      return nextBag;
    });
  };

  const updateItemQuantity = (id, quantity) => {
    updateWithItems((items) =>
      items.map((it) => (it.id === id ? { ...it, quantity } : it))
    );
  };

  const updateItem = (id, updatedItem) => {
    updateWithItems((items) => items.map((it) => (it.id === id ? updatedItem : it)));
  };

  const addItem = (menu, selectedFix, selectedOptions, quantity = 1) => {
    const options = [];
    if (selectedFix) options.push(selectedFix);
    if (selectedOptions?.length) options.push(...selectedOptions);

    const newItem = {
      id: menu.id,
      name: menu.name,
      price: menu.price,
      quantity,
      options,
    };

    updateWithItems((items) => [...items, newItem]);
  };

  const removeItem = (id) => {
    updateWithItems((items) => items.filter((it) => it.id !== id));
  };

  // ✅ 주문 전송 → 서버가 orderPlaced 브로드캐스트
  const sendPlaceOrder = () => {
    const s = socketRef.current;
    if (s && s.connected) {
      s.emit("placeOrder");
    }
  };

  const getTotalPrice = () => bag.totalPrice;
  const getTotalItems = () => bag.totalItems;

  return (
    <BagContext.Provider
      value={{
        bag,
        otherBags,
        result, // ✅ { myBag, otherBags }
        finalizeOrder,
        addItem,
        updateItem,
        updateItemQuantity,
        removeItem,
        getTotalPrice,
        getTotalItems,
        sendPlaceOrder, // ✅ 새 주문하기 함수
      }}
    >
      {children}
    </BagContext.Provider>
  );
};
