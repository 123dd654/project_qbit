"use client";
import React from "react";
import { useBag } from "@/context/BagContext";
import Link from "next/link";

const Your_bag = () => {
  const { otherBags } = useBag();

  return (
    <div className="you_bag">
      <div className="detail_menu">
        <h2>멤버가 담은 메뉴</h2>
        {(!otherBags || otherBags.length === 0) ? (
          <p>담은 메뉴가 없어요</p>
        ) : (
          otherBags.map((memberBag, bagIndex) =>
            memberBag.items?.map((item, itemIndex) => {
              const optionsSum = (item.options || []).reduce((acc, o) => acc + (o.price || 0), 0);
              const total = ((item.price || 0) + optionsSum) * (item.quantity || 1);

              return (
                <div className="detail" key={`${bagIndex}-${itemIndex}`}>
                  <ul>
                    <li className="item_name">
                      {item.name}
                      {item.quantity > 1 && ` ${item.quantity}`}
                    </li>

                    {/* ✅ 옵션이 있을 때만 출력 */}
                    {item.options && item.options.length > 0 && (
                      item.options.map((option, optionIndex) => (
                        <li className="item_option" key={optionIndex}>
                          {option.name}
                          {option.price > 0 && ` (+${option.price.toLocaleString()}원)`}
                        </li>
                      ))
                    )}

                    <li className="item_price">{total.toLocaleString()}원</li>
                  </ul>
                </div>
              );
            })
          )
        )}
      </div>

      <Link href="/main" className="menu_plus">
        <span>메뉴 추가</span>
        <div className="plus"></div>
      </Link>
    </div>
  );
};

export default Your_bag;
