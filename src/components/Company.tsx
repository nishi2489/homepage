"use client";

import { useState, useEffect, useRef } from "react";
import { ServicesTab } from "./tabs/ServicesTab"; 
import { RecruitTab } from "./tabs/RecruitTab";
import { motion, AnimatePresence } from "framer-motion";
import { Building, MapPin, Briefcase, Award } from "lucide-react";

const Company = () => {
  const [activeTab, setActiveTab] = useState<"services" | "recruit">("services");
  const recruitRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // ▼ タブ切り替え時のアニメーション設定
  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // ▼ URLハッシュが #recruit の場合にタブをrecruitに
  useEffect(() => {
    if (window.location.hash === "#recruit") {
      setActiveTab("recruit");
      setTimeout(() => {
        recruitRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, []);

  const handleRecruitClick = () => {
    setActiveTab("recruit");
    setTimeout(() => {
      recruitRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleServicesClick = () => {
    setActiveTab("services");
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {/* 背景パターン */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* 装飾的な光の効果 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500 rounded-full filter blur-[150px] opacity-20"></div>

      <div className="relative z-10">
        {/* ヘッダー部分 */}
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 inline-block">
              株式会社 昭栄エンジニアサービス
            </h1>
            <div className="flex items-center justify-center mt-4">
              <div className="h-px w-16 bg-blue-400/30"></div>
              <p className="text-blue-200 mx-4">技術と信頼のパートナー</p>
              <div className="h-px w-16 bg-blue-400/30"></div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100">
            {/* ヘッダー画像 */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h2 className="text-2xl font-bold text-white">企業情報</h2>
                <div className="flex items-center mt-2">
                  <div className="h-px w-12 bg-blue-300/50"></div>
                  <p className="text-blue-200 ml-3">
                    私たちのサービスと採用情報をご覧ください
                  </p>
                </div>
              </div>

              {/* 装飾的な要素 */}
              <div className="absolute top-0 right-0 w-32 h-32">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-blue-300 opacity-30"
                >
                  <path
                    fill="currentColor"
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.5C87,13.4,81.4,26.8,73.6,38.2C65.8,49.5,55.7,58.8,43.9,67.2C32,75.6,18.3,83.2,3.3,79.9C-11.7,76.5,-26.9,62.3,-39.9,50.5C-52.9,38.7,-63.6,29.3,-70.3,16.8C-77,4.3,-79.8,-11.4,-75.6,-25.2C-71.3,-39,-60.1,-51,-47.1,-58.2C-34.1,-65.4,-19.3,-67.9,-3.9,-61.8C11.4,-55.8,30.5,-83.5,44.7,-76.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </div>

            {/* ▼ 会社情報テーブル（クール演出 & アイコンちょい足し） */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100 overflow-hidden"
            >
              {/* 背景にふわっとした円形エフェクト */}
              <div className="absolute -top-10 -right-14 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute -bottom-10 -left-14 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

              <div className="max-w-4xl mx-auto relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Building className="text-blue-500" size={20} />
                  会社概要
                </h3>
                <p className="text-gray-700 mb-6">
                  安全と信頼を第一に、社会インフラの維持に貢献します。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {/* 社名 */}
                  <div className="relative">
                    <h4 className="text-blue-600 text-sm font-medium mb-2 flex items-center gap-1">
                      <Briefcase size={16} className="text-blue-400" />
                      社名
                    </h4>
                    <div className="text-gray-700 pb-2 border-b border-blue-100">
                      株式会社昭栄エンジニアサービス
                    </div>
                    <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
                  </div>

                  {/* 所在地 */}
                  <div className="relative">
                    <h4 className="text-blue-600 text-sm font-medium mb-2 flex items-center gap-1">
                      <MapPin size={16} className="text-blue-400" />
                      所在地
                    </h4>
                    <div className="text-gray-700 pb-2 border-b border-blue-100">
                      東京都葛飾区鎌倉3-57-1
                    </div>
                    <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
                  </div>

                  {/* グループ会社 */}
                  <div className="relative md:col-span-2">
                    <h4 className="text-blue-600 text-sm font-medium mb-2 flex items-center gap-1">
                      <Building size={16} className="text-blue-400" />
                      グループ会社
                    </h4>
                    <ul className="text-gray-700 space-y-1 pl-1 pb-2 border-b border-blue-100">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>株式会社昭栄ホールディングス</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>株式会社昭栄電気産業</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>株式会社ＭＴサービス</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>株式会社Ｓアドバンス</span>
                      </li>
                    </ul>
                    <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
                  </div>

                  {/* 資格取得者 */}
                  <div className="relative">
                    <h4 className="text-blue-600 text-sm font-medium mb-2 flex items-center gap-1">
                      <Award size={16} className="text-blue-400" />
                      資格取得者【グループ会社含む】
                    </h4>
                    <ul className="text-gray-700 space-y-1 pl-1 pb-2 border-b border-blue-100">
                      <li>第一級電気施工管理技士：1名</li>
                      <li>第三種電気主任技術者：2名</li>
                      <li>第一種電気工事士：10名</li>
                      <li>第二種電気工事士：223名</li>
                    </ul>
                    <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
                  </div>

                  {/* 取得免許 */}
                  <div className="relative">
                    <h4 className="text-blue-600 text-sm font-medium mb-2 flex items-center gap-1">
                      <Award size={16} className="text-blue-400" />
                      取得免許【グループ会社含む】
                    </h4>
                    <ul className="text-gray-700 space-y-1 pl-1 pb-2 border-b border-blue-100">
                      <li>一般建設業 東京都知事許可（般-17）第89280号</li>
                      <li>特定労働者派遣事業 厚生労働大臣届出 特13-12-0057号</li>
                      <li>電気通信工事業 東京都知事許可（般-9）第89280号</li>
                      <li>電気工事業 東京都知事届出第 045060号</li>
                      <li>日本建設業施工管理技師会 第20046号</li>
                    </ul>
                    <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
                  </div>

                  {/* 事業内容 */}
                  <div className="relative">
                    <h4 className="text-blue-600 text-sm font-medium mb-2 flex items-center gap-1">
                      <Briefcase size={16} className="text-blue-400" />
                      事業内容
                    </h4>
                    <ul className="text-gray-700 space-y-1 pl-1 pb-2 border-b border-blue-100">
                      <li>低圧計器工事業務</li>
                      <li>共架調査業務</li>
                      <li>検査登録業務</li>
                      <li>図面補正業務</li>
                      <li>低圧系統データ調査業務</li>
                      <li>その他工事業務</li>
                    </ul>
                    <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
                  </div>

                  {/* 主要取引先 */}
                  <div className="relative">
                    <h4 className="text-blue-600 text-sm font-medium mb-2 flex items-center gap-1">
                      <Building size={16} className="text-blue-400" />
                      主要取引先【グループ会社含む】
                    </h4>
                    <ul className="text-gray-700 space-y-1 pl-1 pb-2 border-b border-blue-100">
                      <li>東京電力パワーグリッド株式会社</li>
                      <li>テプコ・ソリューション・アドバンス株式会社</li>
                      <li>セコム株式会社</li>
                      <li>東電タウンプランニング株式会社</li>
                      <li>東京エナジーアライアンス株式会社</li>
                      <li>テプコホームテック株式会社</li>
                    </ul>
                    <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* タブヘッダー部分の装飾 */}
            <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 p-2">
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleServicesClick}
                  className={`px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 relative overflow-hidden ${
                    activeTab === "services"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
                      : "text-gray-600 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span className="relative z-10">サービス</span>
                  {activeTab === "services" && (
                    <motion.div
                      className="absolute inset-0 bg-blue-400/20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </button>
                <button
                  onClick={handleRecruitClick}
                  className={`px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 relative overflow-hidden ${
                    activeTab === "recruit"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
                      : "text-gray-600 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span className="relative z-10">採用情報</span>
                  {activeTab === "recruit" && (
                    <motion.div
                      className="absolute inset-0 bg-blue-400/20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </button>
              </div>
            </div>

            {/* タブコンテンツ */}
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {activeTab === "services" ? (
                  <motion.div
                    key="services"
                    variants={tabVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div id="services" ref={servicesRef}>
                      <ServicesTab />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="recruit"
                    variants={tabVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div id="recruit" ref={recruitRef}>
                      <RecruitTab />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
