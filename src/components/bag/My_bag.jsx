"use client";
import React from "react";
import Quantity from "../common/Quantity";
import { useRouter } from "next/navigation";
import { useBag } from "@/context/BagContext";

const My_bag = () => {
  const { bag, removeItem, updateItemQuantity } = useBag();
  const router = useRouter();

  const handleDelete = (id) => removeItem(id);
  const handleOptionChange = (id) => router.push(`/detail?id=${id}`);

  return (
    <div className="my_bag">
      <div className="detail_menu">
        <h2>내가 담은 메뉴</h2>

        {bag.items.length === 0 ? (
          <p>담은 메뉴가 없어요</p>
        ) : (
          bag.items.map((item) => {
            const optionSum = item.options
              ? item.options.reduce((acc, o) => acc + o.price, 0)
              : 0;
            const totalPrice = ((item.price + optionSum) * item.quantity).toLocaleString();

            return (
              <div className="detail" key={item.id}>
                <div className="detail_info">
                  <ul>
                    <li className="item_name">
                      {item.name}
                      {item.quantity > 1 && <span> {item.quantity}</span>}
                    </li>

                    {/* 옵션이 있으면만 출력 */}
                    {item.options && item.options.length > 0 && (
                      item.options.map((option, index) => (
                        <li className="item_option" key={index}>
                          {option.name}
                          {option.price > 0 && ` (+${option.price.toLocaleString()}원)`}
                        </li>
                      ))
                    )}

                    <li className="item_price">{totalPrice}원</li>
                  </ul>

                  <i
                    className="icon-24-delete"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>

                <div className="btnQuan">
                  <button onClick={() => handleOptionChange(item.id)}>옵션변경</button>
                  <Quantity
                    value={item.quantity} // 컨트롤드 모드
                    onChange={(q) => updateItemQuantity(item.id, q)}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default My_bag;
