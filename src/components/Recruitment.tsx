"use client";

import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// 勤務地情報を追加
const locations = {
  offices: [
    { name: "本社", address: "東京都 葛飾区 鎌倉3丁目58番2号" },
    { name: "品川事務所", address: "東京都 品川区 戸越3丁目9番3号" },
    { name: "三郷事務所", address: "埼玉県 三郷市 高洲1丁目308番1号" },
    { name: "千葉事務所", address: "千葉県 千葉市若葉区 愛生町70番2号" }
  ],
  areas: [
    { name: "東京エリア", regions: "23区内、都下全域（三鷹市周辺、立川市周辺、八王子市周辺、町田市周辺）" },
    { name: "千葉エリア", regions: "船橋市周辺、千葉市周辺、柏市周辺" },
    { name: "埼玉エリア", regions: "さいたま市周辺、川口市周辺、三郷市周辺、春日部市周辺" }
  ]
};

const Recruitment = () => {
  return (
    <div className="px-4 py-8 bg-yellow-50 rounded-b-lg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-yellow-800 mb-3">採用情報</h2>
          <p className="text-center text-gray-600 text-lg">私たちと一緒に、社会インフラの未来を創っていきませんか</p>
        </div>
        
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
              昭栄が自信を持ってお勧めする３項目
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="text-yellow-500 mr-3">01</span>
                  <span className="text-2xl mr-2">👨‍🏭</span>
                  未経験者を電気のプロへ育成
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  電気の職種が未経験でもプロに育成するプログラムを確立。300人以上を電気のプロとして成功させております！
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="text-yellow-500 mr-3">02</span>
                  <span className="text-2xl mr-2">🔒</span>
                  安定性抜群！
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  電気やガスといった生活になくてはならないライフラインの仕事なので、安定性は抜群。太陽光設備、充電設備、5G通信基地設備など新エネルギーへの新規事業へも拡大中！
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="text-yellow-500 mr-3">03</span>
                  <span className="text-2xl mr-2">💰</span>
                  稼げる仕組み
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  給与形態に歩合制やインセンティブ制を導入しており業務量に見合った給料がもらえる仕組みのため稼げます！
                </p>
              </motion.div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
              業務内容
            </h3>
            <div className="space-y-8">
              {/* メイン業務 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <h4 className="flex items-center text-2xl font-bold mb-6 text-gray-800">
                  <span className="text-3xl mr-3">⚡</span>
                  メイン業務：電気メーターの交換業務
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  一般のご家庭に設置されている電気メーターを定期的に交換する業務です。担当エリアの戸建住宅やアパート、マンションを訪問し交換作業を行ないます。
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <span className="font-semibold">Point:</span> 電力会社から業務委託を受けて電力量計の交換工事を実施しております。計量法に基づき10年に1度の周期で交換する重要な業務です。
                  </p>
                </div>
              </div>

              {/* グループ会社リンク */}
              <motion.div 
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">その他の業務について</h4>
                <p className="text-gray-600 mb-6">
                  電気設備の安全点検、ガスの安全点検、新規電気設備の安全点検など、グループ会社【昭栄電気産業】ではさまざまな事業を展開しています。
                </p>
                <a 
                  href="https://shoeinet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  <span>グループ会社の業務内容はこちら</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              給与
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-yellow-600">
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
                <h4 className="text-xl font-bold mb-4 text-yellow-600">
                  固定給（月20万円以上）＋インセンティブ
                </h4>
                <p className="text-gray-600">業務量に応じた出来高制度！やればやるほど、稼げる仕組みです。</p>
                <p className="mt-2 text-yellow-600">💡 (例)固定給月20万円+インセンティブ15万～40万円</p>
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
                  <span className="text-yellow-500">✓</span>
                  <span>社会保険完備（健康、厚生年金、雇用、労災）</span>
                </motion.li>
                <motion.li 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>社宅完備（ワンルーム）あり。 ※遠方の方も安心して働けます</span>
                </motion.li>
                <motion.li 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>昇給 年1回</span>
                </motion.li>
                <motion.li 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>賞与 年2回</span>
                </motion.li>
              </ul>
              <ul className="space-y-4">
                <motion.li 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>交通費全額支給（固定給＋手当の場合のみ）</span>
                </motion.li>
                <motion.li 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>資格取得支援制度</span>
                </motion.li>
                <motion.li 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>健康診断（年1回）</span>
                </motion.li>
                <motion.li 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>制服貸与</span>
                </motion.li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              勤務地
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">事務所所在地</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locations.offices.map((office, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-bold text-yellow-600">{office.name}</h5>
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">勤務エリア</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {locations.areas.map((area, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-bold text-yellow-600">{area.name}</h5>
                      <p className="text-gray-600">{area.regions}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              採用に関するお問い合わせ
            </h3>
            <p className="text-gray-700 mb-6">
              お電話またはメールフォームよりお気軽にお問い合わせください
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <a href="tel:08054748885" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                <span>採用担当者：西原（TEL：080-5474-8885）</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              
              <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                <span>メールでのお問い合わせはこちら</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
