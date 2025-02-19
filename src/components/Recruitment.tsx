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

        {/* 3つの特徴 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-sm mb-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            昭栄が自信を持ってお勧めする３項目。。
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
      </div>
    </div>
  );
};

export default Recruitment;