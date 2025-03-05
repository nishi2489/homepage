"use client";

import { motion } from "framer-motion";

const Recruitment = () => {
  const recommendations = [
    {
      icon: "🎓",
      title: "(1)未経験者を電気のプロへ育成",
      description: "電気の職種が未経験でもプロに育成するプログラムを確立。300人以上を電気のプロとして成功させております！"
    },
    {
      icon: "🏢",
      title: "(2)安定性抜群！",
      description: "電気やガスといった生活になくてはならないライフラインの仕事なので、安定性は抜群。太陽光設備、充電設備、5G通信基地設備など新エネルギーへの新規事業へも拡大中！"
    },
    {
      icon: "💰",
      title: "(3)稼げる仕組み",
      description: "給与形態に歩合制やインセンティブ制を導入しており業務量に見合った給料がもらえる仕組みのため稼げます！"
    }
  ];

  // 勤務地情報を追加
  const locations = {
    offices: [
      { name: "本社", address: "東京都 葛飾区 鎌倉3丁目58番2号" },
      { name: "品川事務所", address: "東京都 品川区 戸越3丁目第3号" },
      { name: "三郷事務所", address: "埼玉県 三郷市 高州1丁目308番1号" },
      { name: "千葉事務所", address: "千葉県 千葉市若葉区 殿生町70番2号" }
    ],
    areas: [
      { name: "東京エリア", regions: "23区内、都下全域（三鷹市周辺、立川市周辺、八王子市周辺、町田市周辺）" },
      { name: "千葉エリア", regions: "船橋市周辺、千葉市周辺、柏市周辺" },
      { name: "埼玉エリア", regions: "さいたま市周辺、川口市周辺、三郷市周辺、春日部市周辺" }
    ]
  };

  return (
    <div className="flex justify-center bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center text-gray-800"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            採用情報
          </span>
        </motion.h2>

        {/* 会社イメージ画像 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 relative rounded-xl overflow-hidden"
        >
          <img
            src="/images/company-image.jpg"
            alt="昭栄電気工業の会社イメージ"
            className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* 3つの特徴 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
            昭栄が自信を持ってお勧めする３項目
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {recommendations.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-xl mb-4 text-gray-800">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* メイン事業の紹介 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-xl shadow-lg mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full text-lg font-bold">
              メイン事業
            </span>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">メーター工事</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              一般家庭に設置されている電力量計を計量法に基づき10年に1度の周期で交換する業務です。
              当社は、電力会社から業務委託を受けて電力量計の交換工事を実施しております。
            </p>
            <a 
              href="https://shoeinet.com/business/keiki/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-yellow-600 font-bold hover:text-yellow-700 transition-colors duration-200"
            >
              詳しく見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.section>

        {/* 勤務地情報 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-xl shadow-lg mb-16"
        >
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
            勤務地情報
          </h3>

          {/* 事務所一覧 */}
          <div className="mb-12">
            <h4 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              事務所一覧
            </h4>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {locations.offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <h5 className="font-bold text-yellow-600 mb-2">{office.name}</h5>
                  <p className="text-gray-600 text-sm">{office.address}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 担当エリア */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              担当エリア
            </h4>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {locations.areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <h5 className="font-bold text-yellow-600 mb-2">{area.name}</h5>
                  <p className="text-gray-600 text-sm">{area.regions}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 注意書き */}
          <div className="mt-8 text-sm text-gray-600">
            <p className="mb-2">※茨城エリア、山梨エリアは新エリアです。お近くにお住いの方、Uターン、Iターン就職の方はご注目！</p>
            <p>※お住まいが近い勤務地エリアに配属することで通勤時間の短縮に繋がり、自分の時間が広がります。ご希望の勤務地をご相談ください！</p>
          </div>
        </motion.section>

        {/* 安全点検情報 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-xl shadow-lg mb-16"
        >
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
            安全への取り組み
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-bold text-xl mb-2">新規電気設備の安全点検</h4>
                <p className="text-gray-600">
                  東京都内の新築物件に対して電気のご利用開始前に法令点検を行います。お客様に安全で品質な電気をご利用いただくための点検となります。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">🔥</span>
              <div>
                <h4 className="font-bold text-xl mb-2">ガスの安全点検</h4>
                <p className="text-gray-600">
                  一般のご家庭へ定期的にお伺いし法令点検を行います。また、お引越しに関わるガスの開栓、終了を対応します。当社エリアを巡回しながら、「ガス漏れは発生していないか」「ガスの配管や消耗品に異常はないか」をチェックします。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 採用情報へのリンクボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://www.shoei-k.co.jp/recruit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            採用情報の詳細はこちら
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Recruitment;
