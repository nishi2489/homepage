import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed w-full top-0 z-50 transition-colors">
      <nav className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-bold text-white">
                昭栄エンジニアサービス
              </span>
            </a>
          </div>

          {/* PCナビ */}
          <div className="hidden md:flex items-center space-x-8">
            {/* ▼ ここが “アンカーリンク” になっている */}
            <a href="#services" className="text-white hover:text-white/80 transition-colors">
              サービス
            </a>
            <a href="#recruit" className="text-white hover:text-white/80 transition-colors">
              採用情報
            </a>
            <div className="text-right whitespace-nowrap">
              <p className="text-sm text-white/80 inline-block mr-2">
                お問い合わせ
              </p>
              <p className="text-lg font-bold text-white inline-block">
                0120-356-362
              </p>
            </div>
          </div>

          {/* スマホメニューアイコン */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* スマホドロワー */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                サービス
              </a>
              <a
                href="#recruit"
                className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                採用情報
              </a>
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
