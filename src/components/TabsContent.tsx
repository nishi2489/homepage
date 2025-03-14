"use client"; // App Routerでクライアントコンポーネントにする場合、必要

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicesTab } from "./tabs/ServicesTab";
import { RecruitTab } from "./tabs/RecruitTab";
import { CompanyTab } from "./tabs/CompanyTab";

const TabsContainer = () => {
  const [tabValue, setTabValue] = useState("services");

  useEffect(() => {
    // ハッシュに応じてタブを切り替える関数
    const handleHashChange = () => {
      const hash = window.location.hash; // 例: "#services" or "#recruit" or "#company"
      if (hash === "#services") {
        setTabValue("services");
      } else if (hash === "#recruit") {
        setTabValue("recruit");
      } else if (hash === "#company") {
        setTabValue("company");
        // 企業情報セクションまでスクロール
        const companySection = document.getElementById("company");
        if (companySection) {
          setTimeout(() => {
            companySection.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // 初回レンダリング時、すでにハッシュがあれば反映
    handleHashChange();

    // ハッシュが変化したらタブを切り替える
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // タブをクリックして切り替えた場合はハッシュも更新
  const handleTabChange = (value: string) => {
    setTabValue(value);
    window.location.hash = `#${value}`;
    
    // 企業情報タブの場合、該当セクションまでスクロール
    if (value === "company") {
      const companySection = document.getElementById("company");
      if (companySection) {
        setTimeout(() => {
          companySection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <div>
      <div className="bg-white">
        <div className="pt-[60px]">
          <Tabs
            value={tabValue}
            onValueChange={handleTabChange}
            className="w-full max-w-5xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">事業情報</TabsTrigger>
              <TabsTrigger value="company">企業情報</TabsTrigger>
              <TabsTrigger value="recruit">採用情報</TabsTrigger>
            </TabsList>

            <div className="mt-[60px]">
              <TabsContent value="services" id="service-section">
                <ServicesTab />
              </TabsContent>
              <TabsContent value="company" id="company-section">
                <CompanyTab />
              </TabsContent>
              <TabsContent value="recruit" id="recruit-section">
                <RecruitTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabsContainer;
