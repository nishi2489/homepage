"use client"; // Next.js (App Router) でクライアント側の処理を行う場合は必須

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";

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
                     tab === "company" ? "company" : 
                     "contact-section";
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    // ... 既存のコード ...
  } as const;

  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    // PCの場合は中央寄せ、モバイルの場合は左寄せにする
    '@media (min-width: 768px)': {
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center' as const,
    },
    '@media (max-width: 767px)': {
      left: '20px', // 左端からの余白
      transform: 'translateY(-50%)',
      textAlign: 'left' as const,
    },
    color: 'white',
    '& h2': {  // 作業手順の項目のスタイル
      fontSize: '2rem',  // PCでは32px相当
      fontWeight: 'bold',
      marginBottom: '1rem',
      '@media (max-width: 767px)': {
        fontSize: '1.5rem',  // モバイルでは24px相当
      }
    }
    // ... 既存のコード ...
  } as const;

  return (
    <header className="bg-black fixed w-full top-0 z-50 transition-colors">
      <nav className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左側ロゴ */}
          <div className="flex items-center">
            <a href="/" className="flex flex-col">
              <span className="text-2xl font-bold text-white">
                昭栄エンジニアサービス
              </span>
            </a>
          </div>

          {/* PC表示のナビボタン */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              className="text-2xl md:text-3xl font-bold text-white hover:text-white/80 transition-colors"
              onClick={() => handleNavClick("services")}
            >
              事業情報
            </button>
            <button
              className="text-2xl md:text-3xl font-bold text-white hover:text-white/80 transition-colors"
              onClick={() => handleNavClick("company")}
            >
              企業情報
            </button>
            <button
              className="text-2xl md:text-3xl font-bold text-white hover:text-white/80 transition-colors"
              onClick={() => handleNavClick("recruit")}
            >
              採用情報
            </button>
            <button
              className="text-xl md:text-2xl font-bold text-white hover:text-white/80 transition-colors flex items-center gap-2"
              onClick={() => window.location.href = '/contact'}
            >
              お問い合わせはこちら
              <Mail size={24} />
            </button>
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
                className="block w-full text-left px-3 py-2 text-2xl font-bold text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => {
                  handleNavClick("services");
                  setIsOpen(false);
                }}
              >
                事業情報
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-2xl font-bold text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => {
                  handleNavClick("company");
                  setIsOpen(false);
                }}
              >
                企業情報
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-2xl font-bold text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => {
                  handleNavClick("recruit");
                  setIsOpen(false);
                }}
              >
                採用情報
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-xl font-bold text-white hover:bg-white/10 transition-colors rounded-md flex items-center gap-2"
                onClick={() => window.location.href = '/contact'}
              >
                お問い合わせはこちら
                <Mail size={24} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
