import Image from "next/image"; //이미지 최적화
import Button from "@/components/common/Button";

const login = () => {
  return (
    <div className="container">
      <div className="login__wrapper">
        <div className="login__container">
          <div className="login__logo_wrap">
            <div className="login__logo">
              <Image
                src="/img/logo.png"
                alt="로고"
                layout="intrinsic"
                width={150}
                height={50}
              />
            </div>
          </div>
          <form>
            <div className="login__info">
              <div className="id__wrap">
                <label className="login_id">아이디</label>
                <input type="text" placeholder="아이디를 입력해주세요" />
                <label className="login_password">비밀번호</label>
                <input type="password" placeholder="비밀번호를 입력해주세요" />
              </div>
              {/* 아이디 비밀번호 창 */}
              <div className="login__btn">
                <Button className={"main__button"}>로그인</Button>
                <Button className={"signup__button"}>회원가입</Button>
                <span className="login__find">아이디/비밀번호 찾기</span>
              </div>
              {/* 버튼 창 */}
              <div className="id__save">
                <input type="checkbox" />
                <p>아이디 저장</p>
              </div>
              <div className="auto__login">
                <input type="checkbox" />
                <p>자동 로그인</p>
              </div>
            </div>
          </form>
          <div className="social__login">
            <ul>
              <li className="naver__login">
                <Image
                  src="/img/naver.svg"
                  alt="네이버 로그인"
                  layout="intrinsic"
                  width={50}
                  height={50}
                />
              </li>
              <li className="kakao__login">
                <Image
                  src="/img/kakao.svg"
                  alt="카카오 로그인"
                  layout="intrinsic"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
          </div>
          <div className="login__footer">
            <p className="footer__call">고객센터 3828-0398</p>
            <p className="footer__time">평일 오전9:00~6:00</p>
            <div className="login__copy">
              <p>Copyright 2024. Gina All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
