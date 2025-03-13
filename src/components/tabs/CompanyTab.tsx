import { Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 会社情報データ
const companyInfo = {
  overview: {
    name: "株式会社 昭栄",
    established: "1987年4月",
    capital: "3,000万円",
    employees: "300名",
    president: "代表取締役 西原 昭仁",
    business: "電気・ガス設備の保安管理業務、電気工事業、管工事業",
    licenses: [
      "建設業許可 東京都知事許可(特-2)第116387号",
      "電気工事業 東京都知事届出第94287号",
      "一般建設業 東京都知事許可(般-2)第116387号"
    ]
  },
  history: [
    { year: "1987年", event: "株式会社昭栄を設立" },
    { year: "1988年", event: "東京電力株式会社の工事会社に認定" },
    { year: "1995年", event: "東京ガス株式会社の工事会社に認定" },
    { year: "2010年", event: "太陽光発電システム設置工事開始" },
    { year: "2015年", event: "EV充電設備工事開始" },
    { year: "2020年", event: "5G通信基地局設備工事開始" }
  ]
};

export const CompanyTab = () => {
  const services = [
    {
      title: "メーター工事",
      description: "お客様の大切な設備を守り、安心してご使用いただけるよう、徹底した安全管理と確実な点検を提供しています",
      items: [
        {
          text: "停電なしでの電力量計交換作業",
          description: "一般家庭に設置されている電力量計を計量法に基づき10年に1度の周期で交換する業務です。当社は、電力会社から業務委託を受けて電力量計の交換工事を実施しております。"
        },
        "取外・取付計器の指針記録",
        "取付計器の正常動作確認",
        "必要に応じた停電対応の相談"
      ]
    },
    {
      title: "定期調査",
      description: "電気事業法に基づき、4年に1度（定期調査）または1年に1度（特別調査）の法定点検を実施します。",
      items: [
        "電力量計付近での漏電検査実施",
        "分電盤の外観・内部点検実施",
        "必要に応じた絶縁測定の実施",
        "漏電箇所の安全確認対応"
      ]
    },
    {
      title: "竣工調査",
      description: "電気事業法に基づき、新築時や電気設備の変更時に実施します。",
      items: [
        "配線・電気設備の目視点検",
        "絶縁抵抗測定の実施",
        "電圧測定の実施",
        "接地抵抗測定の実施"
      ]
    },
    {
      title: "フィールド作業",
      description: "お客様の引越しや契約変更に伴う電気設備の接続・切断作業を行います。",
      items: [
        "電気の使用開始・停止時の接続作業",
        "電力量計・契約ブレーカーの交換",
        "電線の接続・切断作業",
        "蓄熱の現地確認実施"
      ]
    }
  ];

  return (
    <div 
      id="company" 
      className="space-y-8 p-6 relative bg-gradient-to-b from-gray-50 to-white"
      style={{ scrollMarginTop: '140px' }}
    >
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-sky-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Building2 className="h-8 w-8" />
            企業情報
          </CardTitle>
          <CardDescription className="text-white/90 text-lg">
            電気とガスのライフラインを支える、昭栄の企業情報
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-12">
            {/* 会社概要セクション */}
            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                会社概要
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(companyInfo.overview).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md"
                  >
                    <h4 className="text-gray-500 mb-2">
                      {key === 'name' ? '会社名' :
                       key === 'established' ? '設立' :
                       key === 'capital' ? '資本金' :
                       key === 'employees' ? '従業員数' :
                       key === 'president' ? '代表者' :
                       key === 'business' ? '事業内容' :
                       key === 'licenses' ? '許認可' : key}
                    </h4>
                    {Array.isArray(value) ? (
                      <ul className="space-y-2">
                        {value.map((item, i) => (
                          <li key={i} className="text-gray-800">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-800 font-medium">{value}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 企業理念セクション */}
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                企業理念
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-bold mb-4 text-blue-600">使命</h4>
                  <p className="text-gray-600">
                    安全で快適な暮らしを支えるライフラインの維持に貢献します
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-bold mb-4 text-blue-600">ビジョン</h4>
                  <p className="text-gray-600">
                    技術革新と環境変化に柔軟に対応し、持続可能な社会の実現に寄与します
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-bold mb-4 text-blue-600">価値観</h4>
                  <p className="text-gray-600">
                    誠実・信頼・向上心を大切にし、お客様と社会に貢献します
                  </p>
                </motion.div>
              </div>
            </section>

            {/* 沿革セクション */}
            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                沿革
              </h3>
              <div className="space-y-4">
                {companyInfo.history.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="min-w-[100px] font-bold text-blue-600">
                      {item.year}
                    </div>
                    <div className="text-gray-700">{item.event}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 主要取引先セクションのスタイルを修正 */}
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                主要取引先
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "東京電力パワーグリッド株式会社",
                  "テプコ・ソリューション・アドバンス株式会社",
                  "セコム株式会社",
                  "東電タウンプランニング株式会社",
                  "東京エナジーアライアンス株式会社",
                  "テプコホームテック株式会社"
                ].map((company, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-gray-700">{company}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 事業内容セクションのスタイルを修正 */}
            <section>
              <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
                事業内容
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                      <span className="text-blue-500 mr-3">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-blue-500 flex-shrink-0">✓</span>
                          <div>
                            <p className="text-gray-600">
                              {typeof item === 'string' ? item : item.text}
                            </p>
                            {typeof item !== 'string' && item.description && (
                              <p className="mt-1 text-sm text-gray-500">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
