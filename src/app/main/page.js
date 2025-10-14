"use client";
import Store_info from "@/components/main/Store_info";
import TabMenu from "@/components/main/Tab_menu";
import Menu from "@/components/main/Menu_info";
import Line from "@/components/common/Line";
import Button from "@/components/common/Button";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBag } from "@/context/BagContext";
import {
  tabs,
  menuItems,
  noodles,
  Rice,
  prepare_dish,
  sideMenus,
  drinkMenus,
} from "@/constants/datas";

const MainPage = () => {
  const { getTotalPrice, getTotalItems } = useBag();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("추천메뉴");
  const [isScrollingByClick, setIsScrollingByClick] = useState(false);

  // 감도 설정 (0.25 = 화면의 1/4 지점, 0.33 = 1/3, 0.5 = 절반)
  const SCROLL_THRESHOLD = 0.5;

  const menuRefs = {
    추천메뉴: useRef(null),
    면류: useRef(null),
    밥류: useRef(null),
    요리부: useRef(null),
    사이드: useRef(null),
    음료: useRef(null),
  };

  // 탭 클릭 시
  const handleTabSelect = (index) => {
    const tab = tabs[index];
    const menuRef = menuRefs[tab];

    setActiveTab(tab);
    setIsScrollingByClick(true);

    const OFFSET = 180

    if (menuRef.current) {
      const offsetTop =
        menuRef.current.getBoundingClientRect().top +
        window.scrollY -
        OFFSET;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }

    setTimeout(() => {
      setIsScrollingByClick(false);
    }, 600);
  };

  // 스크롤 시
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingByClick) return;

      const scrollY = window.scrollY;
      const point = scrollY + window.innerHeight * SCROLL_THRESHOLD;

      let currentTab = tabs[0];
      for (let i = 0; i < tabs.length; i++) {
        const key = tabs[i];
        const ref = menuRefs[key];
        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect();
          const sectionTop = scrollY + rect.top;
          const sectionBottom = scrollY + rect.bottom;

          if (point >= sectionTop && point < sectionBottom) {
            currentTab = key;
            break;
          }
        }
      }
      setActiveTab(currentTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuRefs, isScrollingByClick]);

  const handleGoBag = () => {
    router.push("/bag");
  };

  return (
    <div className="main">
      <Store_info name="큐빗중화반점 안산중앙점" tableNumber="05" />
      <TabMenu
        tabs={tabs}
        onTabSelect={handleTabSelect}
        activeTab={activeTab}
      />
      <Menu title="추천메뉴" items={menuItems} ref={menuRefs["추천메뉴"]} />
      <Line />
      <Menu title="면류" items={noodles} ref={menuRefs["면류"]} />
      <Line />
      <Menu title="밥류" items={Rice} ref={menuRefs["밥류"]} />
      <Line />
      <Menu title="요리부" items={prepare_dish} ref={menuRefs["요리부"]} />
      <Line />
      <Menu title="사이드" items={sideMenus} ref={menuRefs["사이드"]} />
      <Line />
      <Menu title="음료" items={drinkMenus} ref={menuRefs["음료"]} isLast />
      {/* <div className="bottom__wrapper container">
        <Button
          className={"main__button"}
          onClick={handleGoBag}
          itemQuantity={getTotalItems()}
        >
          {getTotalPrice().toLocaleString()}원 확인하러가기
        </Button>
      </div> */}
    </div>
  );
};

export default MainPage;
