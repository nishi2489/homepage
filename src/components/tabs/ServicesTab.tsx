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
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <CardContent className="p-0">
            <div className="relative">
              {/*
                モバイルでは幅を小さく、PCでは従来通り自動調整
                => w-full h-auto でOK（PCでもレイアウト崩れが起きにくい）
              */}
              <img
                src="/images/keiki.jpg"
                alt="電気設備サービス"
                className="w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServicesTab;
