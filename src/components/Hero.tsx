"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-screen">
      <div
        className="relative w-full h-full bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: 'url("/images/hero3.jpg")'
        }}
      >
        {/* 背景の薄暗いオーバーレイ */}
        <div className="absolute inset-0 bg-black/30" />

        {/* ここがポイント：モバイルで左寄せ、md以上で中央寄せ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative 
            w-full h-full 
            flex
            items-center       /* ←縦方向中央寄せ */
            justify-center     /* ←横方向中央寄せ */
            px-0
          "
        >
          {/* ここがポイント：モバイルで text-left、md以上で text-center */}
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 z-10">
              <div>安全な電気設備で</div>
              <div>安心な暮らしを守る</div>
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;