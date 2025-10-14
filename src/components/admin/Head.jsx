import React from 'react'

const Head = () => {
  return (
    <div className='head'>
      <div className="head_btn">
        <div className="head_btn_box">
          <button className='pos'>POS</button>
          <button className='ad'>관리자</button>
        </div>
      </div>
      <div className="head_logout">
        <p>로그아웃</p>
        <i className='icon-24-logout'></i>  
      </div>  
    </div>
  )
}

export default Head