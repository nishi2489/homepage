"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero1.jpg')`,
          filter: "brightness(0.5)"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-full flex items-center justify-center text-white text-center z-10 px-4"
      >
        <div className="p-8 rounded-lg max-w-4xl">
          {/* ▼ スマホでも3行に分けるため <br /> を使う。ただし文字サイズはやや小さめに */}
          <h1 className="font-bold leading-tight text-3xl md:text-6xl mb-6">
            計器工事の<br />
            プロフェッショナル<br />
            安全第一
          </h1>

          {/* ▼ サブテキストは改行量を減らして、見やすさを確保 */}
          <p className="text-base sm:text-lg md:text-2xl">
            電気計器工事のスペシャリストとして、<br className="hidden md:inline" />
            確かな技術と信頼をお届けします
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
