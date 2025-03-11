"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/app/components/Header";    // Header のパスは適宜修正
import ServicesTab from "@/app/tabs/ServicesTab"; // サービス表示コンポーネント
import RecruitTab from "@/app/tabs/RecruitTab";   // 採用情報表示コンポーネント

export default function Page() {
  // どのタブを表示中かを管理
  const [currentTab, setCurrentTab] = useState<"services" | "recruit" | "company">("services");

  // 各タブのコンポーネントをラップする DOM への参照
  const servicesRef = useRef<HTMLDivElement>(null);
  const recruitRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  // Header から呼ばれるタブ切り替えハンドラ
  const handleTabChange = (tab: "services" | "recruit" | "company" | "contact") => {
    if (tab !== "contact") {
      setCurrentTab(tab);
      // state 更新後にスクロールを実行したいので、少し遅らせる
      setTimeout(() => {
        if (tab === "services" && servicesRef.current) {
          servicesRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (tab === "recruit" && recruitRef.current) {
          recruitRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (tab === "company" && companyRef.current) {
          companyRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  return (
    <>
      {/* Header に onTabChange を渡す */}
      <Header onTabChange={handleTabChange} />

      <main className="pt-20"> 
        {/* 上部ヘッダーが fixed なので余白をとる想定 (pt-20 など) */}

        {/* サービス */}
        <div ref={servicesRef}>
          {/* currentTab に応じてコンポーネントを表示し分ける・または単純に両方並べるかは好み */}
          {currentTab === "services" && <ServicesTab />}
        </div>

        {/* 採用情報 */}
        <div ref={recruitRef}>
          {currentTab === "recruit" && <RecruitTab />}
        </div>
      </main>
    </>
  );
}
