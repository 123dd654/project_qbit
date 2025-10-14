"use client";
import Line from "@/components/common/Line";
import My_bag from "@/components/bag/My_bag";
import Your_bag from "@/components/bag/Your_bag";
import Button from "@/components/common/Button";
import { useBag } from "@/context/BagContext";
import React, { useMemo } from "react";

export default function Bag() {
  const { bag, otherBags, sendPlaceOrder } = useBag(); // ✅ sendPlaceOrder 가져오기

  // 합계 계산 함수
  const sumItems = (items = []) =>
    items.reduce(
      (acc, it) => {
        const qty = Number(it?.quantity ?? 1);
        const base = Number(it?.price ?? 0);
        const optionSum = (Array.isArray(it?.options) ? it.options : []).reduce(
          (oAcc, o) => oAcc + Number(o?.price || 0),
          0
        );
        acc.items += qty;
        acc.price += (base + optionSum) * qty;
        return acc;
      },
      { items: 0, price: 0 }
    );

  // ✅ 내 합계
  const myTotals = useMemo(() => sumItems(bag?.items), [bag?.items]);

  // ✅ 상대방 bag (내 것만 제외)
  const filteredOtherBags = useMemo(() => {
    const list = Array.isArray(otherBags) ? otherBags : [];
    return list.filter((member) => {
      if (!member) return false;
      if (member.ownerId && bag.ownerId && member.ownerId === bag.ownerId) return false;
      if (member.socketId && bag.socketId && member.socketId === bag.socketId) return false;
      return true;
    });
  }, [otherBags, bag]);

  // ✅ 상대방 합계
  const othersTotals = useMemo(
    () =>
      filteredOtherBags.reduce(
        (acc, member) => {
          const t = sumItems(member.items || []);
          acc.items += t.items;
          acc.price += t.price;
          return acc;
        },
        { items: 0, price: 0 }
      ),
    [filteredOtherBags]
  );

  const totalItems = myTotals.items + othersTotals.items;
  const totalPrice = myTotals.price + othersTotals.price;

  // ✅ 사용자 수 기반 판별
  const isSingleUser = (bag?.totalViewers || 1) <= 1;
  const myItemCount = myTotals.items;
  const otherItemCount = othersTotals.items;

  // ✅ 버튼 활성화 조건
  let isDisabled = false;
  if (isSingleUser) {
    isDisabled = myItemCount === 0; // 혼자 → 내가 담아야 주문 가능
  } else {
    isDisabled = myItemCount === 0 || otherItemCount === 0; // 여럿 → 양쪽 다 담아야 주문 가능
  }

  // ✅ 버튼 라벨
  let buttonLabel = "";
  if (isSingleUser) {
    buttonLabel =
      myItemCount === 0
        ? "메뉴를 담아주세요"
        : `${Number(totalPrice).toLocaleString()}원 주문하기`;
  } else {
    if (myItemCount === 0 && otherItemCount > 0) {
      buttonLabel = "주문을 위해 메뉴를 선택해주세요";
    } else if (myItemCount > 0 && otherItemCount === 0) {
      buttonLabel = "멤버가 메뉴를 선택 중입니다";
    } else if (myItemCount === 0 && otherItemCount === 0) {
      buttonLabel = "메뉴를 담아주세요";
    } else {
      buttonLabel = `${Number(totalPrice).toLocaleString()}원 주문하기`;
    }
  }

  // ✅ 주문하기 버튼 → 내 것도 완료 + 상대방도 완료 이벤트 emit
  const handleGoComplete = () => {
    if (isDisabled) return;
    sendPlaceOrder(); // ✅ 여기서 router.push + socket.emit("orderComplete")
  };

  return (
    <>
      <div className="container">
        <My_bag />
      </div>
      <Line />
      <div className="container">
        <Your_bag otherBags={filteredOtherBags} />
      </div>
      <div className="bottom__wrapper container">
        <Button
          className={`main__button ${isDisabled ? "disabled" : ""}`}
          onClick={handleGoComplete}
          itemQuantity={totalItems}
          disabled={isDisabled}
        >
          {buttonLabel}
        </Button>
      </div>
    </>
  );
}
