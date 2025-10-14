"use client";
import React, { useState, createContext, useContext, useRef } from "react";
import { useRouter } from "next/navigation";

const getOrCreateClientId = () => {
  if (typeof window === "undefined") return null;
  const KEY = "qbit_client_id";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto?.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;
    localStorage.setItem(KEY, id);
  }
  return id;
};

export const BagContext = createContext();
export const useBag = () => useContext(BagContext);

export const BagProvider = ({ children }) => {
  const router = useRouter();

  const [bag, setBag] = useState({
    totalItems: 0,
    totalPrice: 0,
    items: [],
    totalViewers: 1,
  });
  const [otherBags, setOtherBags] = useState([]);
  const [result, setResult] = useState(null);

  const clientIdRef = useRef(getOrCreateClientId());

  const recomputeTotals = (items) => {
    const totalItems = items.reduce((acc, it) => acc + it.quantity, 0);
    const totalPrice = items.reduce((acc, it) => {
      const optionSum = it.options?.reduce((oAcc, o) => oAcc + o.price, 0) || 0;
      return acc + it.price * it.quantity + optionSum;
    }, 0);
    return { totalItems, totalPrice };
  };

  const finalizeOrder = () => {
    setBag({ totalItems: 0, totalPrice: 0, items: [], totalViewers: 1 });
  };

  const updateWithItems = (mutator) => {
    setBag((prev) => {
      const items = mutator(prev.items);
      const { totalItems, totalPrice } = recomputeTotals(items);
      return { ...prev, items, totalItems, totalPrice };
    });
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

  const updateItem = (id, updatedItem) => {
    updateWithItems((items) =>
      items.map((it) => (it.id === id ? updatedItem : it))
    );
  };

  const updateItemQuantity = (id, quantity) => {
    updateWithItems((items) =>
      items.map((it) => (it.id === id ? { ...it, quantity } : it))
    );
  };

  const removeItem = (id) => {
    updateWithItems((items) => items.filter((it) => it.id !== id));
  };

  // 🔹 주문하기 – 화면 이동 먼저, bag 초기화는 Complete.jsx에서
  const sendPlaceOrder = () => {
    const currentOrder = {
      myBag: bag,
      otherBags: otherBags || [],
      timestamp: new Date().toISOString(),
    };

    setResult(currentOrder); // 영수증 저장
    router.push("/complete"); // 화면 이동만 먼저
  };

  const getTotalPrice = () => bag.totalPrice;
  const getTotalItems = () => bag.totalItems;

  return (
    <BagContext.Provider
      value={{
        bag,
        otherBags,
        result,
        finalizeOrder,
        addItem,
        updateItem,
        updateItemQuantity,
        removeItem,
        getTotalPrice,
        getTotalItems,
        sendPlaceOrder,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};
