"use client";
import { useState, useEffect } from "react";

const Quantity = ({ 
  value,              // 컨트롤드 모드 값
  onChange,           // 컨트롤드 모드 콜백
  initialQuantity = 1,// 언컨트롤드 초기값
  onQuantityChange,   // 언컨트롤드 콜백
}) => {
  const isControlled = typeof value === "number" && typeof onChange === "function";
  const [internal, setInternal] = useState(initialQuantity);

  // 컨트롤드 모드일 때는 외부 value 따라감
  useEffect(() => {
    if (isControlled) {
      setInternal(value);
    }
  }, [isControlled, value]);

  const update = (newQuantity) => {
    if (isControlled) {
      onChange?.(newQuantity); // 부모에 바로 반영
    } else {
      setInternal(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleAdd = () => update(internal + 1);
  const handleRemove = () => {
    if (internal > 1) update(internal - 1);
  };

  return (
    <div className="quantity__wrapper">
      <div 
        className={`quantity__button remove ${internal === 1 ? "disabled" : ""}`}
        onClick={handleRemove}
      ></div>
      <input type="text" value={internal} readOnly />
      <div className="quantity__button add" onClick={handleAdd}></div>
    </div>
  );
};

export default Quantity;
