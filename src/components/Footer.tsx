"use client"; // Next.js (App Router) でクライアント側の処理を行う場合は必須

import { Link } from "react-router-dom";

const Footer = () => {
  // ヘッダーと同様のロジックを用意
  const handleNavClick = (tab: "services" | "company" | "recruit") => {
    // 現在のパスがルートでない場合は、ハッシュ付きのルートパスに移動
    if (window.location.pathname !== '/') {
      window.location.href = `/#${tab}`;
      return;
    }
    // ルートパスにいる場合は hash をセットし、スムーススクロール
    window.location.hash = `#${tab}`;

    // 目的のセクションIDに合わせてスクロール
    const sectionId =
      tab === "services" ? "service-section" :
      tab === "company"  ? "company-section" :
                           "recruit-section";
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社昭栄エンジニアサービス</h3>
            <p className="text-white/90">
              安全な電気設備で、<br />
              安心な暮らしをサポートします
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-white/90 hover:text-white"
                >
                  事業情報
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("company")}
                  className="text-white/90 hover:text-white"
                >
                  企業情報
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("recruit")}
                  className="text-white/90 hover:text-white"
                >
                  採用情報
                </button>
              </li>
              {/* ヘッダーと同じくお問い合わせは直接 /contact へ */}
              <li>
                <Link
                  to="/contact"
                  className="text-white/90 hover:text-white flex items-center gap-2"
                >
                  お問い合わせはこちら
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/90">
            © 2024 株式会社昭栄エンジニアサービス. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
