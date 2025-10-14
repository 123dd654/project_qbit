"use client";

import React, { useRef, useEffect, useCallback } from "react";

const TabMenu = ({ tabs, onTabSelect, activeTab }) => {
  const tabRefs = useRef([]);

  const handleTabClick = (index) => {
    if (onTabSelect) {
      onTabSelect(index);
    }
  };


  const updateHighlight = useCallback(() => {
    const currentIndex = tabs.indexOf(activeTab);
    const selectedTabElement = tabRefs.current[currentIndex];
    if (selectedTabElement) {
      const offsetLeft = selectedTabElement.offsetLeft;
      const offsetWidth = selectedTabElement.offsetWidth;
      const highlightElement = document.querySelector(
        ".tabMenu .tab-highlight"
      );
      if (highlightElement) {
        highlightElement.style.transform = `translateX(${offsetLeft}px)`;
        highlightElement.style.width = `${offsetWidth}px`;
      }
    }
  }, [tabs, activeTab]);

  useEffect(() => {
    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => {
      window.removeEventListener("resize", updateHighlight);
    };
  }, [updateHighlight]);

  return (
    <div className="container tab_fixed">
      <div className="tabmenu_container">
        <div className="tabMenu">
          <div className="tab-highlight"></div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`tab ${activeTab === tab ? "selected" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
