"use client";
import { useState, useEffect } from 'react';
import Essential from '../common/Essential';
import Select from '../common/Select';

const Detail_menu_bottom = ({ menuItem, onOptionChange }) => {
  const [selectedMainOption, setSelectedMainOption] = useState(
    menuItem.optionFix ? menuItem.optionFix.text[0] : null
  );
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);

  // ✅ 컴포넌트 마운트 시 첫 번째 optionFix 자동 반영
  useEffect(() => {
    if (menuItem.optionFix && menuItem.optionFix.text.length > 0) {
      const firstOption = menuItem.optionFix.text[0];
      setSelectedMainOption(firstOption);

      const totalSubOptionsPrice = selectedSubOptions.reduce(
        (sum, opt) => sum + opt.price,
        0
      );
      onOptionChange(
        firstOption.price,
        totalSubOptionsPrice,
        [firstOption, ...selectedSubOptions]
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuItem]);

  const handleMainOptionChange = (option) => {
    setSelectedMainOption(option);
    const totalSubOptionsPrice = selectedSubOptions.reduce(
      (sum, opt) => sum + opt.price,
      0
    );
    const allSelected = [option, ...selectedSubOptions];
    onOptionChange(option.price, totalSubOptionsPrice, allSelected);
  };

  const handleSubOptionChange = (option, checked) => {
    let newSubOptions;
    if (checked) {
      newSubOptions = [...selectedSubOptions, option];
    } else {
      newSubOptions = selectedSubOptions.filter(
        (opt) => opt.name !== option.name
      );
    }
    setSelectedSubOptions(newSubOptions);

    const totalSubOptionsPrice = newSubOptions.reduce(
      (sum, opt) => sum + opt.price,
      0
    );
    const allSelected = [selectedMainOption, ...newSubOptions].filter(Boolean);
    onOptionChange(
      selectedMainOption ? selectedMainOption.price : 0,
      totalSubOptionsPrice,
      allSelected
    );
  };

  return (
    <div className="detail_menu_bottom">
      {menuItem.optionFix && (
        <div className="basic">
          <ul>
            <li className="bold">
              {menuItem.optionFix.type}
              <Essential />
            </li>
            <li>최대 {menuItem.optionFix.maxSelect}개 선택</li>
          </ul>
          {menuItem.optionFix.text.map((option, index) => (
            <div className="check" key={index}>
              <ul>
                <li>{option.name}</li>
                <li className="option_price">
                  {option.price.toLocaleString()}원
                </li>
              </ul>
              <input
                type="radio"
                name="main_option"
                checked={selectedMainOption?.name === option.name}
                onChange={() => handleMainOptionChange(option)}
              />
            </div>
          ))}
        </div>
      )}

      {menuItem.option && (
        <div className="addition">
          <ul>
            <li className="bold">
              {menuItem.option.type}
              <Select />
            </li>
            <li>여러 개 선택 가능</li>
          </ul>
          {menuItem.option.text.map((option, index) => (
            <div className="check" key={index}>
              <ul>
                <li>{option.name}</li>
                <li className="option_price">
                  {option.price.toLocaleString()}원
                </li>
              </ul>
              <input
                type="checkbox"
                name="sub_option"
                onChange={(e) =>
                  handleSubOptionChange(option, e.target.checked)
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Detail_menu_bottom;
