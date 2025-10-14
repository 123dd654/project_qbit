import React from 'react';

const StoreInformation = () => {
  return (
    <div className="store">
      <h2>가게정보</h2>
      <div className="store_box">
        <div className="form_group">
          <label>가게명<span>*</span></label>
          <input type="text" placeholder="큐빗 앱에 노출되는 가게명입니다." />
        </div>
        <div className="form_group">
          <label>운영자 휴대전화번호<span>*</span></label>
          <div className="from_info">
            <div className="checkbox_wrapper">
              <input type="checkbox" id="showPhoneNumber" />
              <label htmlFor="showPhoneNumber">휴대가입 정보와 동일</label>
            </div>
            <input type="text" placeholder="010 - 숫자만 입력해주세요" />
            <small>실제 가게를 운영하는 분의 연락처를 입력해 주세요.</small>
            <small>고객님의 휴대 서비스로는 문자 알림을 수신합니다.</small>
          </div>
        </div>
        
        <div className="form_group">
          <label>사업자등록번호<span>*</span></label>
          <div className="input_button_group">
            <input type="text" placeholder="숫자만 입력해주세요 (10자리)" />
            <input type="text" placeholder="총 사업장 (4자리)" />
            <button className="primary_button">조회</button>
          </div>
        </div>
        
        <div className="form_group">
          <label>가게 전화번호<span>*</span></label>
          <input type="text" placeholder="숫자만 입력해주세요" />
        </div>
        
        <div className="form_group">
          <label>가게 주소<span>*</span></label>
          <div className="store_search">
            <div className="store_search_info">
              <button className="address_search">주소검색</button>
              <input type="text" readOnly />
            </div>
            <input type="text" placeholder="상세주소를 입력해주세요" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreInformation;
