"use client";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BagContext } from '@/context/BagContext'; // BagContext 경로 확인

const StoreInfo = ({ name, tableNumber }) => {
  const { bag } = useContext(BagContext); // BagContext 사용

  return (
    <div className="container store_fixed">
      <div className="store_info">
        <div className="store_left">
          <div className="store_info_name">{name}</div>
          <div className="watch_together">{bag.totalViewers}명이 같이 보고 있어요</div>
        </div>
        <div className="store_right">
          <div className="store_table">테이블: {tableNumber}번</div>
        </div>
      </div>
    </div>
  );
};

StoreInfo.propTypes = {
  name: PropTypes.string.isRequired,
  tableNumber: PropTypes.string.isRequired,
};

export default StoreInfo;
