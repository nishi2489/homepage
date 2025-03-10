import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ServicesTab = () => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      id="services"
      initial="hidden"
      animate="visible"
<<<<<<< HEAD
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      <motion.div variants={itemVariants}>
=======
      className="grid grid-cols-1 gap-6"
    >
      {/* ▼ 画像カード */}
      <motion.div variants={itemVariants} custom={0}>
>>>>>>> 673c7d8bcf2680d096797ad296023beff373b744
        <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src="/images/keiki.jpg"
                alt="電気設備サービス"
<<<<<<< HEAD
                className="w-full h-auto"
=======
                className="absolute inset-0 w-full h-full object-cover"
>>>>>>> 673c7d8bcf2680d096797ad296023beff373b744
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServicesTab;
