import { Calendar, Shield, Wrench, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WorkFlow = () => {
  const steps = [
    {
      icon: "📅",
      title: "作業のお知らせ",
      description: "作業日を\nお知らせいたします",
    },
    {
      icon: "👤",
      title: "ご挨拶",
      description: "お客様宅へ\n訪問いたします",
    },
    {
      icon: "🔧",
      title: "作業内容",
      description: "屋外にて\n電力量計の交換を行います",
    },
    {
      icon: "📋",
      title: "作業終了後のお知らせ",
      description: "交換後のお控えを\nご覧ください",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-gray-600 py-12 w-[800px]">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-center text-2xl font-bold mb-12 text-white">作業の流れ</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-600 text-center whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow; 