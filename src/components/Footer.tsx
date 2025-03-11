const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社昭栄エンジニアサービス</h3>
            <p className="text-gray-400">
              安全な電気設備で、<br />
              安心な暮らしをサポートします
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  事業情報
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  会社概要
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 株式会社昭栄エンジニアサービス. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;