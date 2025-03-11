"use client";

import { useState, useEffect } from "react";
import { ServicesTab } from "./tabs/ServicesTab";
import { RecruitTab } from "./tabs/RecruitTab";
import { motion, AnimatePresence } from "framer-motion";

const Company = () => {
  const [activeTab, setActiveTab] = useState<"services" | "recruit">("services");

  // ▼ タブ切り替え時のアニメーション設定
  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  /**
   * ===============================
   * ① ページ読込時に hash(#xxx) をチェック
   *    → 該当タブを表示
   * ===============================
   */
  useEffect(() => {
    // 例）URLが https://～～～/#recruit のとき
    const hash = window.location.hash;
    if (hash === "#recruit") {
      setActiveTab("recruit");
    } else if (hash === "#services") {
      // 明示的に #services があればこちらにセット
      setActiveTab("services");
    }
  }, []);

  /**
   * ===============================
   * ② activeTab が切り替わったら、そのタブ要素へスクロール
   * ===============================
   */
  useEffect(() => {
    // タブが切り替わった直後は DOM に要素がマウントされるタイミングと競合しやすい
    // → setTimeout(,0) や requestAnimationFrame() などで1フレーム遅延させる
    const scrollToTab = () => {
      if (activeTab === "recruit") {
        const recruitEl = document.getElementById("recruit");
        if (recruitEl) {
          recruitEl.scrollIntoView({ behavior: "smooth" });
        }
      } else if (activeTab === "services") {
        const servicesEl = document.getElementById("services");
        if (servicesEl) {
          servicesEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    setTimeout(scrollToTab, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10">
      {/* ▼ 最大幅を制限し、背景に白いカード風のコンテナを配置 */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* ▼ タブボタン部分 */}
        <div className="flex justify-center border-b border-gray-200">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-8 py-4 text-lg font-medium transition-colors duration-300 ${
              activeTab === "services"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            事業情報
          </button>
          <button
            onClick={() => setActiveTab("recruit")}
            className={`px-8 py-4 text-lg font-medium transition-colors duration-300 ${
              activeTab === "recruit"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            採用情報
          </button>
        </div>

        {/* ▼ タブコンテンツ */}
        <div className="p-6 md:p-10">
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
                {/* ★「サービス」タブのコンテンツにIDを付与 */}
                <div id="services">
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
                {/* ★「採用情報」タブのコンテンツにIDを付与 */}
                <div id="recruit">
                  <RecruitTab />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Company;
