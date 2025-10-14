import "@/assets/css/style.scss";
import { Header } from "@/components/common/Header";
import { BagProvider } from "@/context/BagContext";

export const metadata = {
  title: "Qbit - 빠른 주문은 큐빗",
  description: "빠른 주문은 역시 큐빗 누구보다 빠르게 나의 주문을 처리한다.",
  keywords: ["Qbit","QR","테이블오더","큐빗","큐알코드","qrcode","table order"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="../../public/img/logo.svg" />
      <body>
        <BagProvider>
          <Header />
          {children}
        </BagProvider>
      </body>
    </html>
  );
}
