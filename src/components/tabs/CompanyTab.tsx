import { Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CompanyTab = () => {
  const services = [
    {
      title: "計器工事",
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
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            会社情報
          </CardTitle>
          <CardDescription>1990年の創業以来、電気設備の安全を守り続けています</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="オフィスビル"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">会社概要</h3>
            <p>安全と信頼を第一に、社会インフラの維持に貢献します。</p>
          </div>
          <div className="space-y-4">
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">社名</h3>
              <p className="text-gray-600">株式会社昭栄電気産業</p>
            </motion.div>
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">所在地</h3>
              <p className="text-gray-600">東京都葛飾区鎌倉3-58-2</p>
            </motion.div>
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">グループ会社</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>株式会社昭栄ホールディングス</li>
                <li>株式会社昭栄エンジニアサービス</li>
                <li>株式会社ＭＴサービス</li>
                <li>株式会社Ｓアドバンス</li>
              </ul>
            </motion.div>
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">資格取得者</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>第一級電気施工管理技士：1名</li>
                <li>第三種電気主任技術者：2名</li>
                <li>第一種電気工事士：10名</li>
                <li>第二種電気工事士：223名</li>
              </ul>
              <h3 className="font-semibold text-gray-900 mt-4">取得免許</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>一般建設業 東京都知事許可（般-17）第89280号</li>
                <li>特定労働者派遣事業 厚生労働大臣届出 特13-12-0057号</li>
                <li>電気通信工事業 東京都知事許可（般-9）第89280号</li>
                <li>電気工事業 東京都知事届出第 045060号</li>
                <li>日本建設業施工管理技師会 第20046号</li>
              </ul>
            </motion.div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">事業内容</h3>
            <p className="text-gray-600">
              電柱設計、定期調査、竣工調査、ガス調査、フィールド作業、外線・内線電気工事、
              EV充電器施工、太陽光・蓄電池施工、ものづくり開発、警備設備工事、派遣業
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-900">主要取引先</CardTitle>
          <CardDescription className="text-blue-800">
            <ul className="list-disc list-inside space-y-1">
              <li>東京電力パワーグリッド株式会社</li>
              <li>テプコ・ソリューション・アドバンス株式会社</li>
              <li>セコム株式会社</li>
              <li>東電タウンプランニング株式会社</li>
              <li>東京エナジーアライアンス株式会社</li>
              <li>テプコホームテック株式会社</li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              事業内容
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              安全と信頼を第一に、社会インフラの維持に貢献します
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-500">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-base text-gray-500">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
