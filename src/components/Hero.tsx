import { Phone, CircuitBoard, Shield, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image Carousel */}
      <div className="fixed inset-0 w-full h-full z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              filter: 'contrast(120%) brightness(80%)'
            }}
          />
        ))}
      </div>

      <div 
        className="fixed inset-0 z-5"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.5) 100%)',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/50"
      />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative z-20 pt-[160px] pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="inline-flex flex-col writing-vertical-rl text-4xl sm:text-6xl font-bold mb-6 leading-tight text-white mx-auto">
              <span className="mb-2">計器工事の</span>
              <span className="mb-2">プロフェッショナル</span>
              <span>安全第一。</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-white/80">
              電気計器工事のスペシャリストとして、<br className="hidden sm:block" />
              確かな技術と信頼をお届けします
            </p>
          </motion.div>
        </div>

        <div className="h-[120px]"></div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-colors group">
            <CircuitBoard className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">計器工事のプロ集団</h3>
            <p className="text-white/80">
              電力量計の交換から検査まで、確実な施工を提供します
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-colors group">
            <Shield className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">安全性の追求</h3>
            <p className="text-white/80">
              徹底した安全管理体制で、安心の施工を実現します
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-colors group">
            <Zap className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">グループ会社連携</h3>
            <p className="text-white/80">
              電気・ガス設備工事もグループ会社で対応可能です
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;