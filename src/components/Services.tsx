import { CheckCircle2, Shield, Flame, Wrench, ClipboardCheck, Gauge } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FastForward, BatteryCharging, BarChart } from "lucide-react";

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

  return (
    <div className="px-4 py-8 bg-blue-50 rounded-b-lg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-3">事業情報</h2>
          <p className="text-left md:text-center text-gray-600 text-lg">電力会社から委託を受け、一般家庭の電気メーターを計量法に基づき定期的に交換する業務を行っています</p>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center font-bold mb-8 whitespace-nowrap text-2xl sm:text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]"
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
            <span className="inline-block bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-8 py-3 rounded-full font-bold text-white shadow-lg transform hover:scale-105 transition-transform relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
              メイン事業
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block bg-gradient-to-br from-white to-[#2563eb]/5 rounded-2xl shadow-2xl p-8 border border-[#2563eb]/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/5 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#2563eb]/10 p-3 rounded-full"
                >
                  <Gauge className="text-[#2563eb]" size={48} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                  メーター工事
                </h3>
              </div>

              {/* 画像セクション */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-lg group"
                >
                  <img
                    src="/images/keikitumi3.jpg"
                    alt="メーター工事作業員"
                    className="w-[80%] h-[80%] object-cover transform transition-transform duration-500 group-hover:scale-110 mx-auto my-auto"
                    style={{ objectPosition: '50% 10%' }}
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
                  className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-lg group"
                >
                  <img
                    src="/images/souko.jpg"
                    alt="メーター保管倉庫"
                    className="w-[80%] h-[80%] object-cover transform transition-transform duration-500 group-hover:scale-110 mx-auto my-auto"
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
              <div className="bg-gradient-to-r from-[#2563eb]/5 to-[#2563eb]/10 p-8 rounded-xl mb-8 border border-[#2563eb]/20">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[#2563eb]">【必要資格】</h4>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  社内外の研修課程を修了し、適性検査により合格者として認定を受けた者
                </p>
              </div>

              {/* お客様へのお知らせ */}
              <div className="bg-gradient-to-r from-[#2563eb]/5 to-[#2563eb]/10 p-8 rounded-xl mb-8 border border-[#2563eb]/20">
                <h4 className="text-2xl md:text-3xl font-bold mb-6 text-[#2563eb]">【お客様へのお知らせ】</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <text x="12" y="12" textAnchor="middle" fontSize="12" fill="currentColor" stroke="none" dy=".3em">¥0</text>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-blue-800 mb-2">費用について</h5>
                      <p className="text-blue-700 text-sm">取替工事にあたり、費用はいただきません</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 21h18" />
                        <path d="M19 21v-4" />
                        <path d="M19 17a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2" />
                        <path d="M9 7h6" />
                        <path d="M12 7v4" />
                        <circle cx="12" cy="4" r="2" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-blue-800 mb-2">作業場所</h5>
                      <p className="text-blue-700 text-sm">室内への立ち入りはいたしません</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                        <path d="M12 11v4" />
                        <path d="M8 15h8" />
                        <path d="M17 13v-2" />
                        <path d="M7 13v-2" />
                        <path d="M20 21v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-blue-800 mb-2">ご不在時の対応</h5>
                      <p className="text-blue-700 text-sm">ご不在時でも工事ができます</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-blue-800 mb-2">工事結果</h5>
                      <p className="text-blue-700 text-sm">工事結果は『完了のお知らせ』にてご連絡します</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 手順説明セクション */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ステップ1: 作業のお知らせ */}
                <div className="bg-gradient-to-br from-white to-[#2563eb]/5 rounded-lg p-6 shadow-md border border-[#2563eb]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#2563eb] text-white rounded-full font-bold">1</span>
                    <h4 className="text-xl font-bold text-[#2563eb]">作業のお知らせ</h4>
                  </div>
                  <div className="relative h-64 rounded-lg shadow-md mb-4 overflow-hidden group">
                    <img
                      src="/images/notice.jpg"
                      alt="作業お知らせのイメージ"
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-gray-700">
                    「電気計器お取り替えのお知らせ」を用いて、事前にお客さまへ作業予定日をお知らせいたします。
                  </p>
                  <div className="mt-4 bg-[#2563eb]/5 p-4 rounded-lg border border-[#2563eb]/10">
                    <p className="text-sm text-[#2563eb]">
                      ※ご案内した日時のご都合が合わないお客さまには、専用ダイヤルにて日時変更を承っています。
                    </p>
                  </div>
                </div>

                {/* ステップ2: ご挨拶 */}
                <div className="bg-gradient-to-br from-white to-[#2563eb]/5 rounded-lg p-6 shadow-md border border-[#2563eb]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#2563eb] text-white rounded-full font-bold">2</span>
                    <h4 className="text-xl font-bold text-[#2563eb]">ご挨拶</h4>
                  </div>
                  <div className="relative h-64 rounded-lg shadow-md mb-4 overflow-hidden group">
                    <img
                      src="/images/greeting.jpg"
                      alt="ご挨拶のイメージ"
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-gray-700">
                    作業当日、作業員が身分証明書を携帯の上、ご訪問してご挨拶させていただきます。
                  </p>
                  <div className="mt-4 bg-[#2563eb]/5 p-4 rounded-lg border border-[#2563eb]/10">
                    <p className="text-sm text-[#2563eb]">
                      お客さまの立会いは不要ですが、メーター設置場所に近づけるようご協力をお願いいたします。
                    </p>
                  </div>
                </div>

                {/* ステップ3: 作業内容 */}
                <div className="bg-gradient-to-br from-white to-[#2563eb]/5 rounded-lg p-6 shadow-md border border-[#2563eb]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#2563eb] text-white rounded-full font-bold">3</span>
                    <h4 className="text-xl font-bold text-[#2563eb]">作業内容</h4>
                  </div>
                  <div className="relative h-64 rounded-lg shadow-md mb-4 overflow-hidden group">
                    <img
                      src="/images/work.jpg"
                      alt="作業内容のイメージ"
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-gray-700">
                    屋外にある電力量計の交換を行います。
                  </p>
                  <div className="mt-4 bg-[#2563eb]/5 p-4 rounded-lg border border-[#2563eb]/10">
                    <ul className="space-y-2 text-sm text-[#2563eb]">
                      <li>• 作業の際は基本的に「停電はいたしません」</li>
                      <li>• 取外計器の指針と取付計器の指針を記録いたします</li>
                      <li>• 取付計器が正常に動作していることを液晶表示のランプで確認いたします</li>
                    </ul>
                  </div>
                </div>

                {/* ステップ4: 作業終了後のお知らせ */}
                <div className="bg-gradient-to-br from-white to-[#2563eb]/5 rounded-lg p-6 shadow-md border border-[#2563eb]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#2563eb] text-white rounded-full font-bold">4</span>
                    <h4 className="text-xl font-bold text-[#2563eb]">作業終了後のお知らせ</h4>
                  </div>
                  <div className="relative h-64 rounded-lg shadow-md mb-4 overflow-hidden group">
                    <img
                      src="/images/complete.jpg"
                      alt="作業完了のイメージ"
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-gray-700">
                    作業完了後、メーターの正常動作確認を行い、交換完了のお知らせを投函させていただきます。
                  </p>
                  <div className="mt-4 bg-[#2563eb]/5 p-4 rounded-lg border border-[#2563eb]/10">
                    <p className="text-sm text-[#2563eb]">
                      新しいメーターは、今後10年間安全にご使用いただけます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* グループ会社事業 */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-3xl -z-10"></div>
          <div className="text-center mb-12">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://shoeinet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-8 py-3 rounded-full font-bold text-white shadow-lg transform hover:scale-105 transition-transform relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
              グループ会社「昭栄電気産業」のサービス詳細はこちら
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-lg group bg-white"
              >
                <div className="absolute inset-0 bg-cover bg-center z-0 opacity-100" style={{ backgroundImage: `url(${service.bgImage})` }} />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 to-white/60 z-10" />
                <div className="relative z-20 p-8">
                  <div className="flex items-center gap-4 mb-6 bg-white/80 p-3 rounded-xl shadow-sm">
                    <div className="bg-cyan-50 p-3 rounded-lg shadow-sm">
                      <service.icon className="w-12 h-12 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-900">{service.title}</h3>
                  </div>
                  <div className="glass-card mb-6">
                    <p className="text-lg text-cyan-900 font-medium">{service.description}</p>
                  </div>
                  <div className="glass-card">
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="flex-shrink-0 mt-1">
                            <div className="bg-cyan-100 rounded-full p-1">
                              <svg className="w-4 h-4 text-cyan-700" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </span>
                          <span className="text-cyan-900 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <style jsx>{`
                  .glass-card {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 1rem;
                    padding: 1.25rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                  }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;