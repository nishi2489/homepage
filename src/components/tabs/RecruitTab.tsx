import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// 勤務地情報を追加
const locations = {
  offices: [
    { name: "本社", address: "東京都 葛飾区 鎌倉3丁目58番2号" },
    { name: "板橋事務所", address: "東京都 板橋区 南町38番6号" },
    { name: "品川事務所", address: "東京都 品川区 戸越3丁目9番3号" },
    { name: "三郷事務所", address: "埼玉県 三郷市 高洲1丁目308番1号" },
    { name: "幸手事務所", address: "埼玉県 幸手市 北1丁目10番3号" },
    { name: "登戸事務所", address: "神奈川県 川崎市多摩区 宿河原1丁目6番1号" },
    { name: "千葉事務所", address: "千葉県 千葉市若葉区 愛生町70番2号" }
  ],
  areas: [
    { name: "東京エリア", regions: "23区内、都下全域（三鷹市周辺、立川市周辺、八王子市周辺、町田市周辺）" },
    { name: "千葉エリア", regions: "船橋市周辺、千葉市周辺、柏市周辺" },
    { name: "埼玉エリア", regions: "さいたま市周辺、川口市周辺、三郷市周辺、春日部市周辺" },
    { name: "神奈川エリア", regions: "川崎市周辺、横浜市周辺、相模原市周辺" },
    { name: "茨城エリア", regions: "古河市周辺、筑西市周辺、笠間市周辺" },
    { name: "山梨エリア", regions: "大月市周辺、富士吉田市周辺" }
  ]
};

export const RecruitTab = () => {
  return (
    <div 
      id="recruit" 
      className="space-y-8 p-6 relative bg-gradient-to-b from-gray-50 to-white"
      style={{ scrollMarginTop: '140px' }}
    >
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Users className="h-8 w-8" />
            採用情報
          </CardTitle>
          <CardDescription className="text-blue-100 text-lg">
            私たちと一緒に、社会インフラの未来を創っていきませんか
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                昭栄が自信を持ってお勧めする３項目
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="text-blue-500 mr-3">01</span>
                    未経験者を電気のプロへ育成
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    電気の職種が未経験でもプロに育成するプログラムを確立。300人以上を電気のプロとして成功させております！
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="text-blue-500 mr-3">02</span>
                    稼げる仕組み
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    給与形態に歩合制やインセンティブ制を導入しており業務量に見合った給料がもらえる仕組みのため稼げます！
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="text-blue-500 mr-3">03</span>
                    安定性抜群！
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    電気やガスといった生活になくてはならないライフラインの仕事なので、安定性は抜群。太陽光設備、充電設備、5G通信基地設備など新エネルギーへの新規事業へも拡大中！
                  </p>
                </motion.div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                業務内容
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                    <span className="text-3xl mr-3">💡</span>
                    電気メーターの交換業務
                  </h4>
                  <p className="text-gray-600">
                    一般のご家庭に設置されている電気メーターを定期的に交換する業務です。担当エリアの戸建住宅やアパート、マンションを訪問し交換作業を行ないます。
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                    <span className="text-3xl mr-3">💡</span>
                    電気の安全訪問員
                  </h4>
                  <p className="text-gray-600">
                    お客さまのご要望に合わせて電気が安全に使用できるようにメンテナンスを行う業務です。電気のお困りごとを解決する事でお客さまには大変喜ばれているお仕事です。
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                    <span className="text-3xl mr-3">💡</span>
                    電気設備の安全点検
                  </h4>
                  <p className="text-gray-600">
                    一般のご家庭へ定期的にお伺いし法令点検を行います。お客さまが安全で高品質な電気をご使用いただくための業務になります。こちらの業務もお客さまから感謝のお言葉をいただくことが多いです。
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                    <span className="text-3xl mr-3">💡</span>
                    新規電気設備の安全点検
                  </h4>
                  <p className="text-gray-600">
                    東京都内の新築物件に対して電気のご利用開始前に法令点検を行います。お住いになられるお客さまが安全で高品質な電気をご利用いただくための業務になります。
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="flex items-center text-xl font-bold mb-4 text-gray-800">
                    <span className="text-3xl mr-3">💡</span>
                    ガスの安全点検
                  </h4>
                  <p className="text-gray-600">
                    一般のご家庭へ定期的にお伺いし法令点検を行います。また、お引越しに関わるガスの開始、終了を対応します。担当エリアを巡回しながら、「ガス漏れは発生していないか」「ガスの風呂釜や湯沸かし器はきちんと動くか」をチェックします。
                  </p>
                </motion.div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                給与
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-600">
                    固定給25万円＋各種手当＋賞与2回
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                      <div>
                        <p className="font-bold">家族手当</p>
                        <p className="text-gray-600">月1万円（配偶者あり）</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                      <div>
                        <p className="font-bold">お子様の成長に子供手当</p>
                        <p className="text-gray-600">月5千円（お1人当り）</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏠</span>
                      <div>
                        <p className="font-bold">家賃・住宅ローンの補助に住宅手当</p>
                        <p className="text-gray-600">月3万円</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold mb-4 text-blue-600">
                    固定給（月20万円以上）＋インセンティブ
                  </h4>
                  <p className="text-gray-600">業務量に応じた出来高制度！やればやるほど、稼げる仕組みです。</p>
                  <p className="mt-2 text-blue-600">💡 (例)固定給月20万円+インセンティブ15万～40万円</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                福利厚生・待遇
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>社会保険完備（健康、厚生年金、雇用、労災）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>社宅完備（ワンルーム）あり。 ※遠方の方も安心して働けます</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>昇給 年1回</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>賞与 年2回</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>交通費全額支給（固定給＋手当の場合のみ）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>家族手当（配偶者／月1万円～）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>子ども手当（お子様1人につき／月5千円）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>住宅手当（家賃や住宅ローンをお支払いの方／月3万円）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>健康診断（年1回）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>資格取得支援制度（第二種電気工事士、第一種電気工事士、第三種電気主任技術者取得全面サポート）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>引越支援制度（会社都合の場合に引越代金や家賃の支援）</span>
                  </motion.li>
                  <motion.li 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>経営者育成支援（入社数年後、独立したい方の相談を歓迎、10名程度のグループを任せ経営力を磨きいずれは法人化）</span>
                  </motion.li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                応募から入社までの流れ
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">応募方法</h4>
                    <p className="text-gray-600">
                      お電話またはオンラインフォームからお選びいただけます
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">書類選考と面接</h4>
                    <p className="text-gray-600">書類選考後、面接を行います。1日同行の職場体験もあり（日当9,000円、交通費込み）。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">職場体験のすすめ</h4>
                    <p className="text-gray-600">面接時に1日同行で、職場環境や仕事内容を体験できます。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">採用決定と入社手続き</h4>
                    <p className="text-gray-600">採用決定後、入社日を調整します。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 勤務地情報セクションを追加 */}
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                勤務地情報
              </h3>
              
              <div className="space-y-8">
                {/* 事務所一覧 */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="text-2xl mr-2">🏢</span>
                    事務所一覧
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {locations.offices.map((office, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h5 className="font-bold text-blue-600">{office.name}</h5>
                        <p className="text-gray-600">{office.address}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 担当エリア */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="text-2xl mr-2">🗺️</span>
                    担当エリア
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {locations.areas.map((area, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h5 className="font-bold text-blue-600">{area.name}</h5>
                        <p className="text-gray-600">{area.regions}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 注意書き */}
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-600 mb-2">
                    ※茨城エリア、山梨エリアは新エリアです。お近くにお住いの方、Uターン、Iターン就職の方はご注目！
                  </p>
                  <p className="text-gray-600">
                    ※お住まいから近い勤務エリアに配属することで通勤時間の短縮に繋がり、自分の時間が広がります。ご希望の勤務地をご相談ください！
                  </p>
                </div>
              </div>
            </section>

            {/* アクセス情報を追加 */}
            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                面接場所とアクセス
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚶</span>
                      <p>京成本線 京成小岩駅より徒歩5分</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚶</span>
                      <p>北総線 新柴又駅より徒歩10分</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚶</span>
                      <p>常磐線 金町駅から京成バスで鎌倉町下車、徒歩1分</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* 応募フォームへのリンク */}
            <section className="text-center">
              <a 
                href="https://shoeinet.com/form/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <span>応募フォームはこちら</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="mt-4 text-gray-600">
                採用担当者：西原（TEL：080-5474-8885）
              </p>
            </section>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};
