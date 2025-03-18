"use client"; // App Routerでクライアントコンポーネントにする場合、必要

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Services from "./Services";
import About from "./About";
import Recruitment from "./Recruitment";

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
  };

  return (
    <div className="w-full">
      <div className="bg-white">
        <Tabs
          value={tabValue}
          onValueChange={handleTabChange}
          className="w-full"
        >
          {/* タブボタン */}
          <TabsList className="grid w-full grid-cols-3 p-0 border border-gray-200 rounded-t-lg">
            <TabsTrigger 
              value="services" 
              className="text-lg py-4 px-6 border-r border-gray-200 rounded-tl-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
            >
              事業情報
            </TabsTrigger>
            <TabsTrigger 
              value="company" 
              className="text-lg py-4 px-6 border-r border-gray-200 data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
            >
              企業情報
            </TabsTrigger>
            <TabsTrigger 
              value="recruit" 
              className="text-lg py-4 px-6 rounded-tr-lg data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700"
            >
              採用情報
            </TabsTrigger>
          </TabsList>

          {/* タブコンテンツ */}
          <div>
            <TabsContent value="services" id="service-section">
              <div className="bg-blue-50 p-0 m-0">
                <Services />
              </div>
            </TabsContent>
            
            <TabsContent value="company" id="company-section">
              <div className="bg-green-50 p-0 m-0">
                <About />
              </div>
            </TabsContent>
            
            <TabsContent value="recruit" id="recruit-section">
              <div className="bg-yellow-50 p-0 m-0">
                <Recruitment />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsContainer;
