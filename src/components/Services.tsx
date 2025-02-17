import { CheckCircle2, Shield, Flame, Wrench, ClipboardCheck, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, items, bgImage }) => {
  return (
    <motion.div 
      className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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
        className="absolute inset-0 opacity-10 rounded-lg"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container-width">
        <h2 className="text-center text-3xl font-bold mb-4">
          安全を第一に考えたサービス
        </h2>
        <p className="text-center text-gray-600 mb-12">
          お客様の大切な設備を守り、安心して使用いただけるよう、徹底した安全管理と確実な点検を提供しています
        </p>

        {/* メイン事業 */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <span className="inline-block bg-yellow-400 px-6 py-2 rounded-full font-bold">
              メイン事業
            </span>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="text-yellow-400" size={28} />
                <h3 className="text-xl font-bold">計器工事</h3>
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
          </div>
        </div>

        {/* グループ会社事業 */}
        <div>
          <div className="text-center mb-8">
            <span className="inline-block bg-gray-200 px-6 py-2 rounded-full font-bold">
              グループ会社事業
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 定期調査 */}
            <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-gray-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">定期調査</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    電気事業法に基づき、4年に1度（定期調査）または1年に1度（特定調査）の法定点検を実施します
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-3 bg-gray-300 mt-1.5" />
                      <span>電力量計付近での漏電検査実施</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-3 bg-gray-300 mt-1.5" />
                      <span>分電盤の外観・内部点検実施</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-3 bg-gray-300 mt-1.5" />
                      <span>必要に応じた絶縁測定の実施</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-3 bg-gray-300 mt-1.5" />
                      <span>電気設備の安全相談対応</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* フィールド作業 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-4">
                <Wrench className="w-8 h-8 text-gray-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">フィールド作業</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    お客様の引越しや契約変更に伴う電気設備の接続・切断作業を行います
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>電気の使用開始・停止時の接続作業</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>電力量計・契約ブレーカーの交換</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>電線の接続・切断作業</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>事前の現場確認実施</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 竣工調査 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-4">
                <ClipboardCheck className="w-8 h-8 text-gray-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">竣工調査</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    電気事業法に基づく法定点検で、新築時や電気設備の変更時に実施します
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>配線・電気設備の目視点検</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>絶縁抵抗測定の実施</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>電圧測定の実施</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>接地抵抗測定の実施</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ガス調査サービス */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-4">
                <Flame className="w-8 h-8 text-gray-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ガス調査サービス</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    お客様の安全を確保するため、専門的な視点でガス設備の点検を実施します
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>ガス漏れ調査の実施</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>ガス機器の点火試験</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>設置状況と使用環境の確認</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-4 bg-gray-300 mt-1" />
                      <span>安全装置付き機器への交換提案</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;