import { Building2, MapPin, Users, Award, Briefcase, Building } from "lucide-react";

const About = () => {
  return (
    <div id="company" className="container-width px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <span>会社情報</span>
          </h2>
          <p className="text-gray-600 mt-2">2003年の創業以来、電気設備の安全を守り続けています</p>
        </div>

        {/* 会社画像 */}
        <div className="w-full h-48 mb-8 overflow-hidden rounded-lg">
          <img
            src="/images/company-image.jpg"
            alt="会社外観"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">会社概要</h3>
            <p>安全と信頼を第一に、社会インフラの維持に貢献します。</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">社名</h3>
            <p>株式会社昭栄エンジニアサービス</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">所在地</h3>
            <p>東京都葛飾区鎌倉3-57-1</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">グループ会社</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>株式会社昭栄ホールディングス</li>
              <li>株式会社昭栄電気産業</li>
              <li>株式会社ＭＴサービス</li>
              <li>株式会社Ｓアドバンス</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">資格取得者【グループ会社含む】</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>第一級電気施工管理技士：1名</li>
              <li>第三種電気主任技術者：2名</li>
              <li>第一種電気工事士：10名</li>
              <li>第二種電気工事士：223名</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">取得免許【グループ会社含む】</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>一般建設業 東京都知事許可（般-17）第89280号</li>
              <li>特定労働者派遣事業 厚生労働大臣届出 特13-12-0057号</li>
              <li>電気通信工事業 東京都知事許可（般-9）第89280号</li>
              <li>電気工事業 東京都知事届出第 045060号</li>
              <li>日本建設業施工管理技師会 第20046号</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">事業内容</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>低圧計器工事業務</li>
              <li>共架調査業務</li>
              <li>検査登録業務</li>
              <li>図面補正業務</li>
              <li>低圧系統データ調査業務</li>
              <li>その他工事業務</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">主要取引先【グループ会社含む】</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>東京電力パワーグリッド株式会社</li>
              <li>テプコ・ソリューション・アドバンス株式会社</li>
              <li>セコム株式会社</li>
              <li>東電タウンプランニング株式会社</li>
              <li>東京エナジーアライアンス株式会社</li>
              <li>テプコホームテック株式会社</li>
            </ul>
          </div>

          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default About;