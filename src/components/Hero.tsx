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
          <h1 className="font-bold leading-tight text-3xl md:text-6xl">
            安全な電気設備で<br />
            安心な暮らしを守る
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
