"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div 
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            filter: "brightness(0.5)"
          }}
        />
      ))}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-full flex items-center justify-center text-white text-center z-10"
      >
        <div className="p-8 rounded-lg max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-pre-line">
            計器工事の{'\n'}プロフェッショナル{'\n'}安全第一。
          </h1>
          <p className="text-xl md:text-2xl">
            電気計器工事のスペシャリストとして、{'\n'}確かな技術と信頼をお届けします
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;