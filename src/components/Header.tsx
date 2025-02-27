"use client"; // Next.js (App Router) でクライアント側の処理を行う場合は必須

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  // 親コンポーネントがタブ切り替え用のコールバックを渡したい場合に使う
  // （不要なら消してOK）
  onTabChange?: (tab: "services" | "recruit") => void;
}

const Header = ({ onTabChange }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // クリック時にハッシュを書き換え＆必要ならコールバック呼び出し
  const handleNavClick = (tab: "services" | "recruit") => {
    if (onTabChange) {
      onTabChange(tab);
    }
    window.location.hash = `#${tab}`;
    
    // スクロール機能を追加
    const sectionId = tab === "services" ? "service-section" : "recruit-section";
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed w-full top-0 z-50 transition-colors">
      <nav className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左側ロゴ */}
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold text-white">
                昭栄エンジニアサービス
              </span>
            </a>
          </div>

          {/* PC表示のナビボタン */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              className="text-white hover:text-white/80 transition-colors"
              onClick={() => handleNavClick("services")}
            >
              サービス
            </button>
            <button
              className="text-white hover:text-white/80 transition-colors"
              onClick={() => handleNavClick("recruit")}
            >
              採用情報
            </button>
            <div className="text-right whitespace-nowrap">
              <p className="text-sm text-white/80 inline-block mr-2">
                お問い合わせ
              </p>
              <p className="text-lg font-bold text-white inline-block">
                0120-356-362
              </p>
            </div>
          </div>

          {/* スマホメニューアイコン（ハンバーガー） */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* スマホドロワー（開閉制御） */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button
                className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => {
                  handleNavClick("services");
                  setIsOpen(false);
                }}
              >
                サービス
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => {
                  handleNavClick("recruit");
                  setIsOpen(false);
                }}
              >
                採用情報
              </button>
              <div className="px-3 py-2 whitespace-nowrap">
                <p className="text-sm text-white/80 inline-block mr-2">
                  お問い合わせ
                </p>
                <p className="text-lg font-bold text-white inline-block">
                  0120-356-362
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
