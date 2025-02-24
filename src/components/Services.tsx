import { CheckCircle2, Shield, Flame, Wrench, ClipboardCheck, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Services.module.css";

const ServiceCard = ({ icon: Icon, title, description, items, bgImage, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[300px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10">
        <Icon className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <ul className="mt-4 space-y-2 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </motion.a>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "定期調査",
      description: "電気事業法に基づき、4年に1度（定期調査）または1年に1度（特定調査）の法定点検を実施します",
      items: [
        "電力量計付近での漏電検査実施",
        "分電盤の外観・内部点検実施",
        "必要に応じた絶縁測定の実施",
        "電気設備の安全相談対応"
      ],
      bgImage: "/images/teiki.jpg",
      link: "https://shoeinet.com/business/electric-safety/index.php"
    },
    {
      icon: Wrench,
      title: "フィールド作業",
      description: "お客様の引越しや契約変更に伴う電気設備の接続・切断作業を行います",
      items: [
        "電気の使用開始・停止時の接続作業",
        "電力量計・契約ブレーカーの交換",
        "電線の接続・切断作業",
        "事前の現場確認実施"
      ],
      bgImage: "/images/idou.jpg",
      link: "https://shoeinet.com/business/home-engineer/index.php"
    },
    {
      icon: ClipboardCheck,
      title: "竣工調査",
      description: "電気事業法に基づく法定点検で、新築時や電気設備の変更時に実施します",
      items: [
        "配線・電気設備の目視点検",
        "絶縁抵抗測定の実施",
        "電圧測定の実施",
        "接地抵抗測定の実施"
      ],
      bgImage: "/images/shunkou.jpg",
      link: "https://shoeinet.com/business/electric-new/index.php"
    },
    {
      icon: Flame,
      title: "ガス調査サービス",
      description: "お客様の安全を確保するため、専門的な視点でガス設備の点検を実施します",
      items: [
        "ガス漏れ調査の実施",
        "ガス機器の点火試験",
        "設置状況と使用環境の確認",
        "安全装置付き機器への交換提案"
      ],
      bgImage: "/images/gas.jpg",
      link: "https://shoeinet.com/business/gas-engineer/index.php"
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container-width">
        {/* ★ ここを1行で収めたいので、whitespace-nowrap とスマホ用にフォントサイズ小さめ指定 */}
        <h2 className="text-center font-bold mb-4 whitespace-nowrap text-base sm:text-lg md:text-3xl">
          安全を第一に考えたサービス
        </h2>

        <p className="text-center text-gray-600 mb-12">
          お客様の大切な設備を守り、安心して使用いただけるよう、<br className="hidden md:inline" />
          徹底した安全管理と確実な点検を提供しています
        </p>

        {/* メイン事業 */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <span className="inline-block bg-yellow-400 px-6 py-2 rounded-full font-bold">
              メイン事業
            </span>
          </div>

          <a
            href="https://shoeinet.com/business/keiki/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-white rounded-lg shadow-lg p-8 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="text-yellow-400" size={28} />
                <div className="text-xl font-bold hover:text-blue-600 transition-colors">
                  計器工事
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                一般家庭に設置されている電力量計を計量法に基づき10年に1度の周期で交換する業務です。<br />
                当社は、電力会社から業務委託を受けて電力量計の交換工事を実施しております。
              </p>
              <ul className="space-y-3 ml-9">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-4 bg-gray-300 mt-1" />
                  <span>停電なしでの電力量計交換作業</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-4 bg-gray-300 mt-1" />
                  <span>取外・取付計器の指針記録</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-4 bg-gray-300 mt-1" />
                  <span>取付計器の正常動作確認</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-4 bg-gray-300 mt-1" />
                  <span>必要に応じた停電対応の相談</span>
                </li>
              </ul>
            </div>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url('/images/souko.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </a>
        </div>

        {/* グループ会社事業 */}
        <div>
          <div className="text-center mb-8">
            <span className="inline-block bg-gray-200 px-6 py-2 rounded-full font-bold">
              グループ会社事業
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
