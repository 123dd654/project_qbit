"use client";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";
import completeAnimation from "/public/complete.json";
import { useBag } from "@/context/BagContext";
import { useEffect } from "react";

export default function Complete() {
  const router = useRouter();
  const { finalizeOrder, result } = useBag();

  // ✅ 화면 진입 후 bag 초기화 – setTimeout으로 버튼 정상 작동 보장
  useEffect(() => {
    const timer = setTimeout(() => finalizeOrder(), 0);
    return () => clearTimeout(timer);
  }, [finalizeOrder]);

  const handleMenuPage = () => router.push("/main");
  const handleResultPage = () => router.push("/result");

  return (
    <div className="container">
      <div className="complete__wrapper">
        <div className="complete__container">
          <div className="complete__icon">
            <div className="complete__animation">
              <Lottie
                animationData={completeAnimation}
                play
                loop={false}
                style={{ width: 110, height: 110 }}
              />
            </div>
          </div>
          <div className="complete__span">
            <span className="complete__title">주문 완료</span>
            <span className="complete__desc1">주문하신 음식을</span>
            <span className="complete__desc2">정성껏 조리하고 있어요!</span>
          </div>
        </div>
      </div>

      <div className="bottom__wrapper container">
        <Button className="sub__button" onClick={handleMenuPage}>
          메뉴 보기
        </Button>
        <Button className="main__button" onClick={handleResultPage}>
          주문내역 보기
        </Button>
      </div>
    </div>
  );
}
