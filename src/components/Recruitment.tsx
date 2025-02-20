"use client";

import { motion } from "framer-motion";

const Recruitment = () => {
  const recommendations = [
    {
      title: "(1)未経験者を電気のプロへ育成",
      description: "電気の職種が未経験でもプロに育成するプログラムを確立。300人以上を電気のプロとして成功させております！"
    },
    {
      title: "(2)稼げる仕組み",
      description: "給与形態に歩合制やインセンティブ制を導入しており業務量に見合った給料がもらえる仕組みのため稼げます！"
    },
    {
      title: "(3)安定性抜群！",
      description: "電気やガスといった生活になくてはならないライフラインの仕事なので、安定性は抜群。太陽光設備、充電設備、5G通信基地設備など新エネルギーへの新規事業へも拡大中！"
    }
  ];

  return (
    <div className="flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-gray-800"
        >
          採用情報
        </motion.h2>

        {/* 会社イメージ画像 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <img
            src="/images/company-image.jpg"
            alt="昭栄電気工業の会社イメージ"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* 3つの特徴 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-sm mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            昭栄が自信を持ってお勧めする３項目
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {recommendations.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-lg border-l-4 border-yellow-400"
              >
                <h4 className="font-bold text-lg mb-3 text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* メイン事業の紹介 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-sm mb-8"
        >
          <div className="flex items-center justify-center">
            <span className="inline-block bg-yellow-400 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              メイン事業
            </span>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">計器工事</h3>
            <p className="text-gray-600 mb-4">
              一般家庭に設置されている電力量計を計量法に基づき10年に1度の周期で交換する業務です。
              当社は、電力会社から業務委託を受けて電力量計の交換工事を実施しております。
            </p>
            <a 
              href="https://shoeinet.com/business/keiki/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-yellow-600 font-medium hover:text-yellow-700"
            >
              詳しく見る →
            </a>
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
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            採用情報の詳細はこちら
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Recruitment;