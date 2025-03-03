import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ServicesTab = () => {
  // ▼ 遅延アニメーション用の設定
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <motion.div
      id="services"
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-6"
    >
      {/* ▼ 画像カード */}
      <motion.div variants={itemVariants} custom={0}>
        <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <CardContent className="p-0">
            <div className="relative w-full aspect-[16/9]">
              <img
                src="/images/keiki.jpg"
                alt="電気設備サービス"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServicesTab;
