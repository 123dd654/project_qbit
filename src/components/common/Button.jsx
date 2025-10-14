"use client";
import Image from "next/image";
import React from "react";
import iconAdd from "@/assets/images/icons/ic24_add.svg";
import iconRightArrow from "@/assets/images/icons/ic24_right.svg";

const Button = ({
  onClick,
  children,
  className,
  hasIcon,
  itemQuantity,
  disabled,
  type = "button",            // ✅ submit 방지
}) => {
  const iconMap = { "arrow-right": iconRightArrow, add: iconAdd };
  const iconSrc = hasIcon ? iconMap[hasIcon] : "";

  // ✅ 클릭 이중 차단 (disabled면 절대 onClick 호출 안 됨)
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled ? "true" : "false"}
      onClick={handleClick}                       // ✅ 가드된 핸들러 사용
      className={`${className || ""} ${disabled ? "is-disabled" : ""}`}
    >
      {!disabled && Number(itemQuantity) > 0 && (
        <div className="button__count__box">{itemQuantity}</div>
      )}

      {children}
      {hasIcon && iconSrc && (
        <Image src={iconSrc} width={16} height={16} alt={hasIcon} />
      )}
    </button>
  );
};

export default Button;
