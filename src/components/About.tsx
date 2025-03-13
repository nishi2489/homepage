import { Building2, MapPin, Users, Award, Briefcase, Building } from "lucide-react";

const About = () => {
  return (
    <>
      {/* 水色の背景のヘッダー部分 */}
      <div className="bg-sky-500 text-white py-16">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">株式会社昭栄エンジニアサービス</h2>
          <p className="mt-4">
            安全な電気設備で、<br />
            安心な暮らしをサポートします
          </p>
        </div>
      </div>

      {/* 既存のコンテンツ */}
      <div id="company" className="container-width px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダーセクション */}
          <div className="mb-12 p-12 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-xl transform hover:scale-[1.01] transition-all duration-500 border border-blue-100/50">
            <div className="relative">
              <h2 className="flex items-center gap-3 text-5xl font-extrabold">
                <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">企業情報</span>
              </h2>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            </div>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed font-medium">
              2003年の創業以来、<span className="text-blue-600">電気設備の安全</span>を守り続け、<br />
              <span className="text-blue-600">確かな技術</span>と<span className="text-blue-600">信頼</span>で社会に貢献しています
            </p>
          </div>

          {/* 会社画像 */}
          <div className="relative w-full h-[500px] mb-12 overflow-hidden rounded-xl shadow-2xl group">
            <img
              src="/images/company-image.jpg"
              alt="会社外観"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="space-y-8">
            {/* 各セクション */}
            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-600 border-b pb-4">
                <Building2 className="w-6 h-6" />
                会社概要
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                安全と信頼を第一に、社会インフラの維持に貢献します。
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-600 border-b pb-4">
                <Building2 className="w-6 h-6" />
                社名
              </h3>
              <p className="text-gray-600 text-lg">株式会社昭栄エンジニアサービス</p>
            </div>

            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-600 border-b pb-4">
                <MapPin size={20} />
                所在地
              </h3>
              <p className="text-gray-500 text-lg">東京都葛飾区鎌倉3-57-1</p>
            </div>

            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-600 border-b pb-4">
                <Users size={20} />
                グループ会社
              </h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  株式会社昭栄ホールディングス
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  株式会社昭栄電気産業
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  株式会社ＭＴサービス
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  株式会社Ｓアドバンス
                </li>
              </ul>
            </div>

            {/* 資格取得者セクション */}
            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-600 border-b pb-4">
                <Award className="w-6 h-6" />
                資格取得者【グループ会社含む】
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  第一級電気施工管理技士：1名
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  第三種電気主任技術者：2名
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  第一種電気工事士：10名
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  第二種電気工事士：223名
                </li>
              </ul>
            </div>

            {/* 事業内容セクション */}
            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-600 border-b pb-4">
                <Briefcase className="w-6 h-6" />
                事業内容
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  低圧計器工事業務
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  共架調査業務
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  検査登録業務
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  図面補正業務
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  低圧系統データ調査業務
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  新規事業業務
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-600 border-b pb-4">
                <Building size={20} />
                主要取引先【グループ会社含む】
              </h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  東京電力パワーグリッド株式会社
                </li>
                <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  テプコ・ソリューション・アドバンス株式会社
                </li>
                <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  セコム株式会社
                </li>
                <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  東電タウンプランニング株式会社
                </li>
                <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  東京エナジーアライアンス株式会社
                </li>
                <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  テプコホームテック株式会社
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* フッターとの間のスペース追加 */}
      <div className="h-32"></div>
    </>
  );
};

export default About;