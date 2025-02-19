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
        {/* サービスの内容をここに追加 */}
      </div>
    </div>
  );
};

export default Service; 