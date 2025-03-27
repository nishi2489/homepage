"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// アイコン
import { Info, HelpCircle, Lightbulb, ThumbsUp, Target } from "lucide-react";

// 勤務地情報を追加
const locations = {
  offices: [
    { name: "本社", address: "東京都 葛飾区 鎌倉3丁目58番2号" },
    { name: "品川事務所", address: "東京都 品川区 戸越3丁目9番3号" },
    { name: "三郷事務所", address: "埼玉県 三郷市 高洲1丁目308番1号" },
    { name: "千葉事務所", address: "千葉県 千葉市若葉区 愛生町70番2号" }
  ],
  areas: [
    {
      name: "東京エリア",
      regions: "23区内、都下全域（三鷹市周辺、立川市周辺、八王子市周辺、町田市周辺）"
    },
    {
      name: "千葉エリア",
      regions: "船橋市周辺、千葉市周辺、柏市周辺"
    },
    {
      name: "埼玉エリア",
      regions: "さいたま市周辺、川口市周辺、三郷市周辺、春日部市周辺"
    }
  ]
};

// =============================
// 先輩社員データを配列で管理
// =============================
const interviews = [
  {
    id: 1,
    title: "先輩社員の声 01",
    photo: "/images/kousei.jpg",
    qna: [
      {
        icon: Info,
        question: "Q1. 前職の仕事は？",
        answer: "ガソリンスタンドの接客・管理や土建業の現場を経験"
      },
      {
        icon: HelpCircle,
        question: "Q2. 入社の決め手は？",
        answer:
          "同郷の先輩からのお誘いをきっかけに、これまでの経験からライフラインやエネルギー関連の仕事に興味を持つようになりました。電気の仕事は永遠になくならないと感じたので、転職先は電気に決めていました。上京もとても楽しみにしていました！"
      },
      {
        icon: Lightbulb,
        question: "Q3. 昭栄ってどんな会社？",
        answer:
          "チャレンジ精神が豊かな会社で働くことに、日々やりがいを感じています。この会社は安定した基盤を持ちながらも、現状に満足せず、常に改善を目指している点が魅力です。そんな環境が、自分にとても合っていると感じています。"
      },
      {
        icon: ThumbsUp,
        question: "Q4. 入社3ヶ月で一番うれしかった事は？",
        answer:
          "これまでの経験を活かし、太陽光などのエネルギー関連の仕事に配属されました。新しい発見をする中で、自分の評価が高まっていることを実感しています。"
      },
      {
        icon: Target,
        question: "Q5. 目指す自分は？",
        answer:
          "日々努力を重ねて会社に貢献できる人物になりたいと思っています。そして、将来的には、自分自身が立ち上げたグループを作り出す機会を見つけたいです。"
      }
    ]
  },
  {
    id: 2,
    title: "先輩社員の声 02",
    photo: "/images/yoshida.jpg",
    qna: [
      {
        icon: Info,
        question: "Q1. 前職の仕事は？",
        answer: "チェーン店の居酒屋で店長をしていました。接客も含めメンバーの管理を経験。"
      },
      {
        icon: HelpCircle,
        question: "Q2. 入社の決め手は？",
        answer:
          "未経験からでも電気の知識や手順を身につけることができ、電気工事士の資格取得のサポートも充実している点に魅力を感じました。また、歩合給や給与体系にも非常に惹かれました。"
      },
      {
        icon: Lightbulb,
        question: "Q3. 昭栄ってどんな会社？",
        answer:
          "電気工事だけでなく、お客さまサービスに重点を置きながらライフラインの保全に力を注いでいる会社です。特に、安全に関する取り組みは研修を通じて強く感じられます。"
      },
      {
        icon: ThumbsUp,
        question: "Q4. 入社3ヶ月で一番うれしかった事は？",
        answer:
          "研修で培った知識が実務において結びつき、点と点がつながる瞬間を感じた時です。"
      },
      {
        icon: Target,
        question: "Q5. 目指す自分は？",
        answer:
          "AIや自動化が進んでも、電気の知識は重要であり続けると考えています。一人前の電気技術者になり、自分の自信に繋げたいです。"
      }
    ]
  },
  {
    id: 3,
    title: "先輩社員の声 03",
    photo: "/images/kawashima.jpg",
    qna: [
      {
        icon: Info,
        question: "Q1. 前職の仕事は？",
        answer: "鳶土木。工事現場の足場を組んだり、建設車両にて発掘を実施"
      },
      {
        icon: HelpCircle,
        question: "Q2. 入社の決め手は？",
        answer:
          "社員からの紹介。\n歩合制には惹かれていた。仲間たちとグループを組んでの作業"
      },
      {
        icon: Lightbulb,
        question: "Q3. 昭栄ってどんな会社？",
        answer: "話しやすい方が非常に多い。楽しく仕事が出来ている。"
      },
      {
        icon: ThumbsUp,
        question: "Q4. 入社3ヶ月で一番うれしかった事は？",
        answer:
          "上司から仕事を任せられると言われたこと。\n業務内メンバーでの食事会が楽しかった。"
      },
      {
        icon: Target,
        question: "Q5. 目指す自分は？",
        answer:
          "現在の部内にて自分を中心とした班を作りたい。\n資格を取得したい"
      }
    ]
  }
];

const Recruitment = () => {
  // アコーディオン開閉フラグ
  const [showInterview, setShowInterview] = useState(false);
  // 現在表示している先輩社員インタビューのインデックス
  const [currentIndex, setCurrentIndex] = useState(0);

  // 次へ
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % interviews.length);
  };

  // 前へ
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? interviews.length - 1 : prev - 1
    );
  };

  // 今表示している社員データ
  const currentEmployee = interviews[currentIndex];

  return (
    <div className="px-4 py-8 bg-yellow-50 rounded-b-lg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-yellow-800 mb-3">
            採用情報
          </h2>
          <p className="text-left md:text-center text-gray-600 text-lg">
            私たちと一緒に、社会インフラの未来を創っていきませんか
          </p>
        </div>

        <div className="space-y-12">
          {/* 新入社員インタビュー */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
              新入社員インタビュー
            </h3>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <p className="text-gray-600 mb-4 leading-relaxed">
                ガソリンスタンドや土建業、居酒屋店長など、多種多様な仕事を経験してきた先輩社員。
                入社の決め手や会社の魅力、将来の目標などをインタビューしました。
                現在は3人の先輩社員のリアルな声をお届けします。
              </p>

              <button
                onClick={() => setShowInterview(!showInterview)}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
              >
                {showInterview ? "閉じる" : "さらに見る"}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={showInterview ? "M20 12H4" : "M12 4v16m8-8H4"}
                  />
                </svg>
              </button>

              {/* アコーディオン開閉 */}
              {showInterview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 bg-yellow-50 p-4 rounded-lg"
                >
                  {/* スライド切り替えボタン */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={handlePrev}
                      className="text-yellow-700 bg-yellow-200 hover:bg-yellow-300 px-3 py-1 rounded-md font-bold"
                    >
                      ＜
                    </button>
                    <h4 className="text-xl font-bold text-gray-800">
                      {currentEmployee.title}
                    </h4>
                    <button
                      onClick={handleNext}
                      className="text-yellow-700 bg-yellow-200 hover:bg-yellow-300 px-3 py-1 rounded-md font-bold"
                    >
                      ＞
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 写真 */}
                    <div className="md:w-1/3">
                      <img
                        src={currentEmployee.photo}
                        alt="先輩社員の写真"
                        className="w-full h-auto object-cover rounded-md shadow"
                      />
                    </div>
                    {/* Q&A */}
                    <div className="md:w-2/3">
                      <dl className="space-y-6 text-gray-700">
                        {currentEmployee.qna.map((item, idx) => (
                          <div className="flex items-start gap-3" key={idx}>
                            <span className="text-yellow-500">
                              <item.icon className="w-6 h-6" />
                            </span>
                            <div>
                              <dt className="font-bold mb-1">{item.question}</dt>
                              {/* \nなど含む文字列を改行表示したい場合はwhite-space対策も可 */}
                              <dd className="leading-relaxed whitespace-pre-wrap">{item.answer}</dd>
                            </div>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
          {/* ＝＝＝＝＝＝ ここまでインタビュー ＝＝＝＝＝＝ */}

          {/* ＝＝＝＝＝＝ 既存の「昭栄が自信を持ってお勧めする３項目」などはそのまま ＝＝＝＝＝＝ */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
              昭栄が自信を持ってお勧めする３項目
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="text-yellow-500 mr-3">01</span>
                  <span className="text-2xl mr-2">👨‍🏭</span>
                  未経験者を電気のプロへ育成
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  電気の職種が未経験でもプロに育成するプログラムを確立。300人以上を電気のプロとして成功させております！
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="text-yellow-500 mr-3">02</span>
                  <span className="text-2xl mr-2">🔒</span>
                  安定性抜群！
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  電気やガスといった生活になくてはならないライフラインの仕事なので、安定性は抜群。
                  太陽光設備、充電設備、5G通信基地設備など新エネルギーへの新規事業へも拡大中！
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="text-yellow-500 mr-3">03</span>
                  <span className="text-2xl mr-2">💰</span>
                  稼げる仕組み
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  給与形態に歩合制やインセンティブ制を導入しており業務量に見合った給料がもらえる仕組みのため稼げます！
                </p>
              </motion.div>
            </div>
          </section>

          {/* 業務内容 */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
              業務内容
            </h3>
            <div className="space-y-8">
              {/* メイン業務 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <h4 className="flex items-center text-2xl font-bold mb-6 text-gray-800">
                  <span className="text-3xl mr-3">⚡</span>
                  メイン業務：電気メーターの交換業務
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  一般のご家庭に設置されている電気メーターを定期的に交換する業務です。
                  担当エリアの戸建住宅やアパート、マンションを訪問し交換作業を行ないます。
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <span className="font-semibold">Point:</span>{" "}
                    電力会社から業務委託を受けて電力量計の交換工事を実施しております。
                    計量法に基づき10年に1度の周期で交換する重要な業務です。
                  </p>
                </div>
              </div>

              {/* グループ会社リンク */}
              <motion.div 
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">その他の業務について</h4>
                <p className="text-gray-600 mb-6">
                  電気設備の安全点検、ガスの安全点検、新規電気設備の安全点検など、
                  グループ会社【昭栄電気産業】ではさまざまな事業を展開しています。
                </p>
                <a
                  href="https://shoeinet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  <span>グループ会社の業務内容はこちら</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </section>

          {/* 給与 */}
          <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              給与
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-yellow-600">
                  固定給25万円＋各種手当＋賞与2回
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    <div>
                      <p className="font-bold">家族手当</p>
                      <p className="text-gray-600">月1万円（配偶者あり）</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    <div>
                      <p className="font-bold">お子様の成長に子供手当</p>
                      <p className="text-gray-600">月5千円（お1人当り）</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <p className="font-bold">家賃・住宅ローンの補助に住宅手当</p>
                      <p className="text-gray-600">月3万円</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-yellow-600">
                  固定給（月20万円以上）＋インセンティブ
                </h4>
                <p className="text-gray-600">
                  業務量に応じた出来高制度！やればやるほど、稼げる仕組みです。
                </p>
                <p className="mt-2 text-yellow-600">
                  💡 (例)固定給月20万円+インセンティブ15万～40万円
                </p>
              </div>
            </div>
          </section>

          {/* 福利厚生・待遇 */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
              福利厚生・待遇
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>社会保険完備（健康、厚生年金、雇用、労災）</span>
                </motion.li>
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>社宅完備（ワンルーム）あり。 ※遠方の方も安心して働けます</span>
                </motion.li>
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>昇給 年1回</span>
                </motion.li>
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>賞与 年2回</span>
                </motion.li>
              </ul>
              <ul className="space-y-4">
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>交通費全額支給（固定給＋手当の場合のみ）</span>
                </motion.li>
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>資格取得支援制度</span>
                </motion.li>
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>健康診断（年1回）</span>
                </motion.li>
                <motion.li
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-yellow-500">✓</span>
                  <span>制服貸与</span>
                </motion.li>
              </ul>
            </div>
          </section>

          {/* 勤務地 */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              勤務地
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  事務所所在地
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locations.offices.map((office, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h5 className="font-bold text-yellow-600">
                        {office.name}
                      </h5>
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  勤務エリア
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {locations.areas.map((area, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h5 className="font-bold text-yellow-600">{area.name}</h5>
                      <p className="text-gray-600">{area.regions}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* お問い合わせ */}
          <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              採用に関するお問い合わせ
            </h3>
            <p className="text-gray-700 mb-6">
              お電話またはメールフォームよりお気軽にお問い合わせください
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <a
                href="tel:08054748885"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <span>採用担当者：西原（TEL：080-5474-8885）</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <span>メールでのお問い合わせはこちら</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
