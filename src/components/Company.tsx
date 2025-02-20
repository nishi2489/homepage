"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Company = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-gray-800"
        >
          会社情報
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-gray-600 text-center mb-8">
            2003年の創業以来、電気設備の安全を守り続けています
          </p>
          
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/company-image.jpg" // 新しい画像のパスを指定
              alt="昭栄エンジニアの会社風景"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">会社概要</h3>
          <p className="text-gray-600">
            安全と信頼を第一に、社会インフラの維持に貢献します。
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Company; 