import { Building2, MapPin, Users, Award, Briefcase, Building } from "lucide-react";

const About = () => {
  return (
    <div className="px-4 py-8 bg-green-50 rounded-b-lg">
      <div className="max-w-6xl mx-auto">

        {/* ＝＝＝＝＝＝ 背景上のタイトルと本文 ＝＝＝＝＝＝ */}
        <div className="mb-12 text-center">
          {/* ここではテキストを緑系に変更 */}
          <h2 className="text-2xl sm:text-3xl text-green-600 font-bold mb-4">
            企業情報
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            安全と信頼を第一に、社会インフラの維持に貢献しています。
            <br className="hidden sm:block" />
            電気設備の安全を守る専門家集団として、
            確かな技術と誠実な対応で地域社会の暮らしを支えます。
          </p>
        </div>

        <div id="company" className="container-width px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">

            {/* 会社画像 */}
            <div
              className="
                relative
                w-full
                h-auto md:h-[500px]
                mb-12
                overflow-hidden
                rounded-xl
                shadow-2xl
                group
              "
            >
              <img
                src="/images/company-image.jpg"
                alt="会社外観"
                className="
                  w-full
                  h-auto
                  max-h-[80vh]
                  object-contain
                  md:max-h-none
                  md:object-cover
                  md:w-full
                  md:h-full
                  transform
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />
              {/* ここも青系 → 緑系に変更 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#15803d]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-8">

              {/* 社名 */}
              {/* 背景や境界線・文字色を青系(#2563eb)→緑系(#15803d)へ */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#15803d]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#15803d]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#15803d] border-b border-[#15803d]/20 pb-4">
                  <Building2 className="w-6 h-6" />
                  社名
                </h3>
                <p className="text-gray-600 text-lg">株式会社昭栄エンジニアサービス</p>
              </div>

              {/* 所在地 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#15803d]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#15803d]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#15803d] border-b border-[#15803d]/20 pb-4">
                  <MapPin size={20} />
                  所在地
                </h3>
                <p className="text-gray-500 text-lg">東京都葛飾区鎌倉3-57-1</p>
              </div>

              {/* グループ会社 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#15803d]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#15803d]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#15803d] border-b border-[#15803d]/20 pb-4">
                  <Users size={20} />
                  グループ会社
                </h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    株式会社昭栄ホールディングス
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    株式会社昭栄電気産業
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    株式会社ＭＴサービス
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    株式会社Ｓアドバンス
                  </li>
                </ul>
              </div>

              {/* 資格取得者 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#15803d]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#15803d]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#15803d] border-b border-[#15803d]/20 pb-4">
                  <Award className="w-6 h-6" />
                  資格取得者【グループ会社含む】
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    第一級電気施工管理技士：1名
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    第三種電気主任技術者：2名
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    第一種電気工事士：10名
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    第二種電気工事士：223名
                  </li>
                </ul>
              </div>

              {/* 事業内容 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#15803d]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#15803d]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#15803d] border-b border-[#15803d]/20 pb-4">
                  <Briefcase className="w-6 h-6" />
                  事業内容
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    低圧計器工事業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    共架調査業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    検査登録業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    図面補正業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    低圧系統データ調査業務
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    新規事業業務
                  </li>
                </ul>
              </div>

              {/* 主要取引先 */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white to-[#15803d]/5 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#15803d]/10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#15803d] border-b border-[#15803d]/20 pb-4">
                  <Building size={20} />
                  主要取引先
                </h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    東京電力パワーグリッド株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    株式会社T-Cruise
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    株式会社THREET
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    樹電工株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    千葉電工業株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    テックジャパンエンジニアリング株式会社
                  </li>
                  <li className="flex items-center gap-3 text-lg md:whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
                    上田設備
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
