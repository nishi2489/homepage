"use client"; // Next.js (App Router) でクライアント側の処理を行う場合は必須

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  // 親コンポーネントがタブ切り替え用のコールバックを渡したい場合に使う
  // （不要なら消してOK）
  onTabChange?: (tab: "services" | "recruit" | "contact" | "company") => void;
}

const Header = ({ onTabChange }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (tab: "services" | "recruit" | "contact" | "company") => {
    // 現在のパスがルートでない場合は、ハッシュ付きのルートパスに移動
    if (window.location.pathname !== '/') {
      window.location.href = `/#${tab}`;
      return;
    }

    // ルートパスにいる場合は従来の動作
    if (onTabChange) {
      onTabChange(tab);
    }
    window.location.hash = `#${tab}`;
    
    const sectionId = tab === "services" ? "service-section" : 
                     tab === "recruit" ? "recruit-section" : 
                     tab === "company" ? "company-section" : 
                     "contact-section";
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // モバイルメニューを閉じる
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">昭栄エンジニアサービス</Link>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }} className="text-xl text-white hover:text-white/80 transition-colors font-bold drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>事業情報</a>
            <a href="/#company" onClick={(e) => { e.preventDefault(); handleNavClick("company"); }} className="text-xl text-white hover:text-white/80 transition-colors font-bold drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>企業情報</a>
            <a href="/#recruit" onClick={(e) => { e.preventDefault(); handleNavClick("recruit"); }} className="text-xl text-white hover:text-white/80 transition-colors font-bold drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>採用情報</a>
            <Link to="/contact" className="text-xl text-white hover:text-white/80 transition-colors font-bold drop-shadow-lg flex items-center" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              <Mail size={18} className="mr-1" />
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
      
      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-black py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="/#services" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }} className="text-xl text-white hover:text-white/80 transition-colors py-2 font-bold drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>事業情報</a>
            <a href="/#company" onClick={(e) => { e.preventDefault(); handleNavClick("company"); }} className="text-xl text-white hover:text-white/80 transition-colors py-2 font-bold drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>企業情報</a>
            <a href="/#recruit" onClick={(e) => { e.preventDefault(); handleNavClick("recruit"); }} className="text-xl text-white hover:text-white/80 transition-colors py-2 font-bold drop-shadow-lg" style={{ fontFamily: "'Noto Serif JP', serif" }}>採用情報</a>
            <Link to="/contact" className="text-xl text-white hover:text-white/80 transition-colors py-2 font-bold drop-shadow-lg flex items-center" onClick={toggleMenu} style={{ fontFamily: "'Noto Serif JP', serif" }}>
              <Mail size={18} className="mr-1" />
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
