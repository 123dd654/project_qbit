"use client";
import React from "react";

const Your_basket = ({ myBag, otherBags }) => {
  const renderItems = (items) =>
    items.map((item, index) => {
      const optionSum = item.options?.reduce((acc, o) => acc + o.price, 0) || 0;
      const total = (item.price + optionSum) * item.quantity;

      return (
        <ul key={index}>
          <li className="item_name">
            {item.name}
            {item.quantity > 1 && <span> {item.quantity}</span>}
          </li>

          {item.options?.length > 0 ? (
            <li className="item_option">
              {item.options
                .map(
                  (opt) =>
                    `${opt.name}${
                      opt.price > 0 ? `(+${opt.price.toLocaleString()}원)` : ""
                    }`
                )
                .join(", ")}
            </li>
          ) : (
            <li className="item_option">옵션 없음</li>
          )}

          <li className="item_price">{total.toLocaleString()}원</li>
        </ul>
      );
    });

  return (
    <div className="youmenu">
      <div className="detail_menuplus">
        {/* ✅ 내가 담은 메뉴 */}
        {myBag?.items?.length > 0 && (
          <>
            <h2>내가 담은 메뉴</h2>
            {renderItems(myBag.items)}
          </>
        )}

        {/* ✅ 멤버가 담은 메뉴 */}
        {Array.isArray(otherBags) &&
          otherBags.map((member, idx) =>
            member?.items?.length > 0 ? (
              <div key={idx}>
                <h2>멤버가 담은 메뉴</h2>
                {renderItems(member.items)}
              </div>
            ) : null
          )}

        {/* ✅ 아무도 담은 게 없을 때 */}
        {!myBag?.items?.length &&
          (!otherBags || otherBags.every((m) => !m?.items?.length)) && (
            <p>담은 메뉴가 없어요</p>
          )}
      </div>
    </div>
  );
};

export default Your_basket;
