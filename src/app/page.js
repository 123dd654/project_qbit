"use client";

import { useRouter } from "next/navigation";
import logoSvg from "../../public/img/logo.svg"
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/main");
  }, 3000);

  return (
    <div className="randing_page_wrapper">
      <Image src={logoSvg} width={30} alt="qbit logo" height={30}/>
      <div className="firtst_loading">
        <span className="loading_span"></span>
        <span className="loading_span"></span>
        <span className="loading_span"></span>
        <span className="loading_span"></span>
        <span className="loading_span"></span>
      </div>
    </div>
  );
}