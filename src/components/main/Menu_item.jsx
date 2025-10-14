// components/main/MenuItem.jsx
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ id, label, name, price, imageUrl }) => {
  const displayLabel = label === "soldout" ? "품절" : label;

  //라벨이 soldout 일시 클릭이 안 되도록 설정
  const handleClick = (event) => {
    if (label === "soldout") {
      event.preventDefault();
    }
  };

  return (
    <Link
      href={`/detail?id=${id}`}
      className={`menuItem ${label === "soldout" ? "soldout" : ""}`}
      onClick={handleClick}
    >
      <div className="menuItem_info">
        {label && (
          <div
            className={`menuItem_label ${
              label === "soldout" ? "soldout" : label.toLowerCase()
            }`}
          >
            {displayLabel}
          </div>
        )}
        <div className="menuItem_name">{name}</div>
        <div className="menuItem_price">{price.toLocaleString()}원</div>
      </div>
      <div className="menuItem_image">
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          quality={100}
          priority
        />
      </div>
    </Link>
  );
};

MenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MenuItem;
