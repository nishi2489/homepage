import { CheckCircle2, Shield, Flame, Wrench, ClipboardCheck, Gauge } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, items, bgImage }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="relative bg-white p-6 rounded-lg shadow-sm overflow-hidden group hover:shadow-xl transition-all"
    >
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-12 h-12 text-primary mb-4" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-600"
            >
              <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div
        className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-300 transform group-hover:scale-110"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />
    </motion.div>
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
      bgImage: "/images/teiki.jpg"
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
      bgImage: "/images/idou.jpg"
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
      bgImage: "/images/shunkou.jpg"
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
      bgImage: "/images/gas.jpg"
    }
  ];

  const [showProcedure, setShowProcedure] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-width">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center font-bold mb-8 whitespace-nowrap text-2xl sm:text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
        >
          安全を第一に考えたサービス
        </motion.h2>

        <p className="text-left md:text-center text-lg md:text-xl text-gray-600 mb-12 px-4 md:px-0">
          お客様の大切な設備を守り、安心して使用いただけるよう、<br className="hidden md:inline" />
          徹底した安全管理と確実な点検を提供しています
        </p>

        {/* メイン事業 */}
        <div className="mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 px-8 py-3 rounded-full font-bold text-white shadow-lg transform hover:scale-105 transition-transform relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
              メイン事業
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-50"></div>
            <div className="relative z-10">
<<<<<<< HEAD
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  className="bg-yellow-100 p-3 rounded-full"
                >
                  <Gauge className="text-yellow-600" size={48} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                  メーター工事
                </h3>
              </div>

              {/* 画像セクション */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative h-72 md:h-[600px] rounded-xl overflow-hidden shadow-lg group"
                >
                  <img
                    src="/images/keikitumi.jpg"
                    alt="メーター工事作業員"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-2xl font-bold mb-2">メーター工事作業</h4>
                      <p className="text-lg">熟練の技術者による安全な作業</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative h-72 md:h-[600px] rounded-xl overflow-hidden shadow-lg group"
                >
                  <img
                    src="/images/souko.jpg"
                    alt="メーター保管倉庫"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-2xl font-bold mb-2">メーター保管設備</h4>
                      <p className="text-lg">適切な管理と保管体制</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 必要資格 */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl mb-8 border border-yellow-200">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-800">【必要資格】</h4>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  社内外の研修課程を修了し、適性検査により合格者として認定を受けた者
                </p>
              </div>

              {/* 手順説明セクション */}
              <div className="space-y-16">
                {/* ステップ1: 作業のお知らせ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full font-bold text-xl">1</span>
                    <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">作業のお知らせ</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img
                      src="/images/notice.jpg"
                      alt="作業お知らせのイメージ"
                      className="w-full rounded-lg shadow-md"
                    />
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                        「電気計器お取り替えのお知らせ」を用いて、事前にお客さまへ作業予定日をお知らせいたします。
                      </p>
                      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                        <p className="text-lg md:text-xl leading-relaxed font-medium text-yellow-700">
                          ※ご案内した日時のご都合が合わないお客さまには、専用ダイヤルにて日時変更を承っています。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ステップ2: ご挨拶 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full font-bold text-xl">2</span>
                    <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">ご挨拶</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img
                      src="/images/greeting.jpg"
                      alt="ご挨拶のイメージ"
                      className="w-full rounded-lg shadow-md"
                    />
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                        作業当日、作業員が身分証明書を携帯の上、ご訪問してご挨拶させていただきます。
                      </p>
                      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                        <p className="text-lg md:text-xl leading-relaxed font-medium text-yellow-700">
                          お客さまの立会いは不要ですが、メーター設置場所に近づけるようご協力をお願いいたします。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ステップ3: 作業内容 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full font-bold text-xl">3</span>
                    <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">作業内容</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img
                      src="/images/work.jpg"
                      alt="作業内容のイメージ"
                      className="w-full rounded-lg shadow-md"
                    />
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                        屋外にある電力量計の交換を行います。
                      </p>
                      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                        <ul className="space-y-4 text-lg md:text-xl leading-relaxed font-medium text-yellow-700">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-500 mt-1">•</span>
                            <span>作業の際は基本的に「停電はいたしません」</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-500 mt-1">•</span>
                            <span>取外計器の指針と取付計器の指針を記録いたします</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-500 mt-1">•</span>
                            <span>取付計器が正常に動作していることを液晶表示のランプで確認いたします</span>
                          </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-yellow-200">
                          <p className="text-lg md:text-xl leading-relaxed font-medium text-yellow-700">
                            ※停電が必要になる場合は別途ご相談させていただきます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ステップ4: 作業終了後のお知らせ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full font-bold text-xl">4</span>
                    <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">作業終了後のお知らせ</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img
                      src="/images/complete.jpg"
                      alt="作業完了のイメージ"
                      className="w-full rounded-lg shadow-md"
                    />
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                        作業完了後、メーターの正常動作確認を行い、交換完了のお知らせを投函させていただきます。
                      </p>
                      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                        <p className="text-lg md:text-xl leading-relaxed font-medium text-yellow-700">
                          新しいメーターは、今後10年間安全にご使用いただけます。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
=======
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="text-yellow-400" size={28} />
                <div className="text-xl font-bold hover:text-blue-600 transition-colors">
                  メーター工事
                </div>
>>>>>>> 673c7d8bcf2680d096797ad296023beff373b744
              </div>
            </div>
          </motion.div>
        </div>

        {/* グループ会社事業 */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-3xl -z-10"></div>
          <div className="text-center mb-12 flex items-center justify-center gap-4">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 px-8 py-3 rounded-full font-bold text-white shadow-lg"
            >
              グループ会社事業
            </motion.span>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://shoeinet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg text-sm font-medium"
            >
              昭栄電気産業の詳細はこちら →
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
