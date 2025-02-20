import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-gray-800"
        >
          サービス
        </motion.h2>
        
        <p className="text-center text-gray-600 mb-8">
          お客様のニーズに合わせた包括的なサービスを提供します
        </p>

        {/* サービス画像セクション */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/item.jpg"
              alt="電気設備サービス"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/saku.jpg"
              alt="システムサービス"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service; 