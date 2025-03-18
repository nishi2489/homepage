import { Building2, MapPin, Users, Award, Briefcase, Building } from "lucide-react";

const About = () => {
  return (
    <div className="px-4 py-8 bg-green-50 rounded-b-lg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-3">企業理念とビジョン</h2>
          <p className="text-center text-gray-600 text-lg">電気を通じて、より安全で持続可能な社会づくりに貢献します</p>
        </div>
        
        {/* 既存のコンテンツ */}
        <div id="company" className="container-width px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* ヘッダーセクション */}
            <div className="mb-12 p-12 rounded-2xl bg-gradient-to-br from-[#2563eb]/5 to-[#2563eb]/10 shadow-xl transform hover:scale-[1.01] transition-all duration-500 border border-[#2563eb]/20">
              <div className="relative">
                <h2 className="flex items-center gap-3 text-5xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#2563eb] to-blue-500 bg-clip-text text-transparent">私たちの歩み</span>
                </h2>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2563eb]/10 rounded-full blur-3xl"></div>
              </div>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed font-medium">
                2003年の創業以来、<span className="text-[#2563eb] font-bold">電気設備の安全</span>を守り続け、<br />
                <span className="text-[#2563eb] font-bold">確かな技術</span>と<span className="text-[#2563eb] font-bold">信頼</span>で社会に貢献しています。<br />
                <span className="text-[#2563eb] font-bold">電気インフラの専門家</span>として、安心・安全な暮らしを支えます。
              </p>
            </div>

            {/* 会社画像 */}
            <div className="relative w-full h-[500px] mb-12 overflow-hidden rounded-xl shadow-2xl group">
              <img
                src="/images/company-image.jpg"
                alt="会社外観"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-8">
              {/* 各セクション */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#2563eb]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2563eb]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#2563eb] border-b border-[#2563eb]/20 pb-4">
                  <Building2 className="w-6 h-6" />
                  会社概要
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  安全と信頼を第一に、社会インフラの維持に貢献します。昭栄エンジニアサービスは、電気設備の安全を守る専門家集団として、確かな技術と誠実な対応で、地域社会の暮らしを支えています。
                </p>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#2563eb]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2563eb]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#2563eb] border-b border-[#2563eb]/20 pb-4">
                  <Building2 className="w-6 h-6" />
                  社名
                </h3>
                <p className="text-gray-600 text-lg">株式会社昭栄エンジニアサービス</p>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#2563eb]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2563eb]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#2563eb] border-b border-[#2563eb]/20 pb-4">
                  <MapPin size={20} />
                  所在地
                </h3>
                <p className="text-gray-500 text-lg">東京都葛飾区鎌倉3-57-1</p>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#2563eb]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2563eb]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#2563eb] border-b border-[#2563eb]/20 pb-4">
                  <Users size={20} />
                  グループ会社
                </h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    株式会社昭栄ホールディングス
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    株式会社昭栄電気産業
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    株式会社ＭＴサービス
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    株式会社Ｓアドバンス
                  </li>
                </ul>
              </div>

              {/* 資格取得者セクション */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#2563eb]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2563eb]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#2563eb] border-b border-[#2563eb]/20 pb-4">
                  <Award className="w-6 h-6" />
                  資格取得者【グループ会社含む】
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    第一級電気施工管理技士：1名
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    第三種電気主任技術者：2名
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    第一種電気工事士：10名
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    第二種電気工事士：223名
                  </li>
                </ul>
              </div>

              {/* 事業内容セクション */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#2563eb]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2563eb]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#2563eb] border-b border-[#2563eb]/20 pb-4">
                  <Briefcase className="w-6 h-6" />
                  事業内容
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    低圧計器工事業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    共架調査業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    検査登録業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    図面補正業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    低圧系統データ調査業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    新規事業業務
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#2563eb]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2563eb]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#2563eb] border-b border-[#2563eb]/20 pb-4">
                  <Building size={20} />
                  主要取引先【グループ会社含む】
                </h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    東京電力パワーグリッド株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    テプコ・ソリューション・アドバンス株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    セコム株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    東電タウンプランニング株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    東京エナジーアライアンス株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div>
                    テプコホームテック株式会社
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;