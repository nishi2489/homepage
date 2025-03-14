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
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full flex items-center justify-center pt-16"
        >
          <div className="p-8 max-w-4xl">
            <h1 className="font-extrabold leading-tight text-4xl md:text-7xl tracking-tight text-white drop-shadow-lg">
              安全な電気設備で<br />
              安心な暮らしを守る
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
