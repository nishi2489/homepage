"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/images/hero1.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
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
          {/* ▼ スマホでも3行に分けるため <br /> を使う。ただし文字サイズはやや小さめに */}
          <h1 className="font-bold leading-tight text-4xl md:text-7xl mb-6">
          安全な電気設備で<br />
          安心な暮らしを守る<br />
          </h1>

          {/* ▼ サブテキストは改行量を減らして、見やすさを確保 */}

        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
