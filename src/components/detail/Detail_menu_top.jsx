"use client";
import { useState } from 'react';
import Quantity from '../common/Quantity';

const Detail_menu_top = ({ menuItem, basePrice, onPriceChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onPriceChange(basePrice * newQuantity, newQuantity);
  };

  return (
    <div className='detail_menu_top'>
      <h2>{menuItem.name}</h2>
      <p>{menuItem.desc}</p>
      <div className='btn'>
        <p>{(basePrice * quantity).toLocaleString()}원</p> {/* ✅ 숫자 금액 */}
        <Quantity onQuantityChange={handleQuantityChange} />
      </div>
    </div>
  );
};

export default Detail_menu_top;
