"use client";
import Line from "@/components/common/Line";
import My_basket from "@/components/result/My_basket";
import Your_basket from "@/components/result/Your_basket";
import { useBag } from "@/context/BagContext";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";
import resultAnimation from "/public/result.json";

export default function Result() {
  const { result } = useBag();
  const router = useRouter();

  const goMain = () => router.push("/main");

  // ✅ 주문 내역 없을 때
  if (
    !result ||
    !result.myBag ||
    !Array.isArray(result.myBag.items) ||
    result.myBag.items.length === 0
  ) {
    return (
      <div className="order-empty">
        <div className="order-empty__box">
          <Lottie
            animationData={resultAnimation}
            play
            loop={false}
            style={{ width: 120, height: 120 }}
          />
          <p className="order-empty__title">주문 내역이 없습니다</p>
          <p className="order-empty__desc">메인으로 돌아가 메뉴를 담아주세요</p>
        </div>

        <div className="bottom__wrapper container">
          <Button className="main__button" onClick={goMain}>
            메인으로
          </Button>
        </div>
      </div>
    );
  }

  // ✅ 주문 내역 있을 때 → My_basket, Your_basket로 분리
  return (
    <>
      {/* 합계 요약 */}
      <div className="container">
        <My_basket myBag={result.myBag} otherBags={result.otherBags} />
      </div>

      <Line />

      {/* 상세 주문 내역 */}
      <div className="container">
        <Your_basket myBag={result.myBag} otherBags={result.otherBags} />
      </div>

      <div className="bottom__wrapper container">
        <Button className="main__button" onClick={goMain}>
          메인으로
        </Button>
      </div>
    </>
  );
}
