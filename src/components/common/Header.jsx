"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useBag } from "@/context/BagContext";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { getTotalItems, finalizeOrder } = useBag();

  if (pathname.includes("admin")) {
    return null;
  }

  return (
    <div className="top__header">
      {/* 왼쪽 버튼 */}
      {pathname === "/main" ? (
        <div className="call__button">직원호출</div>
      ) : pathname === "/complete" ? (
        // ✅ complete에서만 장바구니 리셋 후 메인 이동
        <button
          onClick={() => {
            finalizeOrder();
            router.push("/main");
          }}
          className="back-button"
        >
          <i className="icon-24-arrow-left"></i>
        </button>
      ) : (
        <Link href="/main">
          <i className="icon-24-arrow-left"></i>
        </Link>
      )}

      {/* 오른쪽 버튼 */}
      <div className="right__action__buttons">
        {pathname === "/result" && null}
        {pathname === "/bag" && null}
        {pathname === "/complete" && null}

        {pathname === "/main" && (
          <>
            <Link href="/result">
              <i className="icon-24-receipt"></i>
            </Link>
            <Link href="/bag">
              <i className="icon-24-bag"></i>
              {getTotalItems() > 0 && (
                <span className="bag_quantity">
                  <span>{getTotalItems()}</span>
                </span>
              )}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
