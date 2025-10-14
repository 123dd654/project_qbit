"use client";
import React, { useMemo } from "react";

const My_basket = ({ myBag, otherBags }) => {
  // 합계 계산 함수
  const sumItems = (items = []) => {
    return items.reduce(
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
  };

  // ✅ 내 주문 합계
  const myTotals = useMemo(() => {
    if (myBag?.items?.length) return sumItems(myBag.items);
    return { items: 0, price: 0 };
  }, [myBag]);

  // ✅ 상대방 주문 합계
  const othersTotals = useMemo(() => {
    if (Array.isArray(otherBags) && otherBags.length > 0) {
      return otherBags.reduce(
        (acc, member) => {
          const t = sumItems(member.items);
          acc.items += t.items;
          acc.price += t.price;
          return acc;
        },
        { items: 0, price: 0 }
      );
    }
    return { items: 0, price: 0 };
  }, [otherBags]);

  // 전체 합계
  const totalItems = myTotals.items + othersTotals.items;
  const totalPrice = myTotals.price + othersTotals.price;

  return (
    <div className="mymenu">
      <div className="coin">
        <ul>
          <li>
            총 <span>{totalItems}</span>개
          </li>
          <li>{Number(totalPrice).toLocaleString()}원</li>
          <li>결제는 카운터에서 해주세요</li>
        </ul>
      </div>
    </div>
  );
};

export default My_basket;
