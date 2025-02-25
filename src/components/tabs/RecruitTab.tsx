import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const RecruitTab = () => {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            採用情報
          </CardTitle>
          <CardDescription>私たちと一緒に、社会インフラの未来を創っていきませんか</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-6">昭栄が自信を持ってお勧めする３項目</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 whitespace-nowrap text-left flex items-center text-gray-800">
                    <span className="text-blue-500 mr-2 flex-shrink-0 w-[2em] text-left">（1）</span>
                    未経験者を電気のプロへ育成
                  </h4>
                  <p className="text-gray-600">電気の職種が未経験でもプロに育成するプログラムを確立。300人以上を電気のプロとして成功させております！</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 whitespace-nowrap text-left flex items-center text-gray-800">
                    <span className="text-blue-500 mr-2 flex-shrink-0 w-[2em] text-left">(2)</span>
                    稼げる仕組み
                  </h4>
                  <p className="text-gray-600">給与形態に歩合制やインセンティブ制を導入しており業務量に見合った給料がもらえる仕組みのため稼げます！</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 whitespace-nowrap text-left flex items-center text-gray-800">
                    <span className="text-blue-500 mr-2 flex-shrink-0 w-[2em] text-left">(3)</span>
                    安定性抜群！
                  </h4>
                  <p className="text-gray-600">電気やガスといった生活になくてはならないライフラインの仕事なので、安定性は抜群。太陽光設備、充電設備、5G通信基地設備など新エネルギーへの新規事業へも拡大中！</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">業務内容</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">💡 電気メーターの交換業務</h4>
                  <p>一般のご家庭に設置されている電気メーターを定期的に交換する業務です。担当エリアの戸建住宅やアパート、マンションを訪問し交換作業を行ないます。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">💡 電気の安全訪問員</h4>
                  <p>お客さまのご要望に合わせて電気が安全に使用できるようにメンテナンスを行う業務です。電気のお困りごとを解決する事でお客さまには大変喜ばれているお仕事です。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">💡 電気設備の安全点検</h4>
                  <p>一般のご家庭へ定期的にお伺いし法令点検を行います。お客さまが安全で高品質な電気をご使用いただくための業務になります。こちらの業務もお客さまから感謝のお言葉をいただくことが多いです。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">💡 新規電気設備の安全点検</h4>
                  <p>東京都内の新築物件に対して電気のご利用開始前に法令点検を行います。お住いになられるお客さまが安全で高品質な電気をご利用いただくための業務になります。</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">🧰 ガスの安全点検</h4>
                  <p>一般のご家庭へ定期的にお伺いし法令点検を行います。また、お引越しに関わるガスの開始、終了を対応します。担当エリアを巡回しながら、「ガス漏れは発生していないか」「ガスの風呂釜や湯沸かし器はきちんと動くか」をチェックします。</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">勤務地</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">【事務所】</h4>
                  <ul className="space-y-2">
                    <li>本社　　　：東京都 葛飾区 鎌倉3丁目58番2号</li>
                    <li>板橋事務所：東京都 板橋区 南町38番6号</li>
                    <li>品川事務所：東京都 品川区 戸越3丁目9番3号</li>
                    <li>三郷事務所：埼玉県 三郷市 高洲1丁目308番1号</li>
                    <li>幸手事務所：埼玉県 幸手市 北1丁目10番3号</li>
                    <li>登戸事務所：神奈川県 川崎市多摩区 宿河原1丁目6番1号</li>
                    <li>千葉事務所：千葉県 千葉市若葉区 愛生町70番2号</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">【担当エリア】</h4>
                  <ul className="space-y-2">
                    <li>東京エリア：23区内、都下全域（三鷹市周辺、立川市周辺、八王子市周辺、町田市周辺）</li>
                    <li>千葉エリア：船橋市周辺、千葉市周辺、柏市周辺</li>
                    <li>埼玉エリア：さいたま市周辺、川口市周辺、三郷市周辺、春日部市周辺</li>
                    <li>神奈川エリア：川崎市周辺、横浜市周辺、相模原市周辺</li>
                    <li>茨城エリア：古河市周辺、筑西市周辺、笠間市周辺</li>
                    <li>山梨エリア：大月市周辺、富士吉田市周辺</li>
                  </ul>
                  <p className="mt-2">※茨城エリア、山梨エリアは新エリアです。お近くにお住いの方、Ｕターン、Ｉターン就職の方はご注目！</p>
                  <p className="mt-4">※お住まいから近い勤務エリアに配属することで通勤時間の短縮に繋がり、自分の時間が広がります。ご希望の勤務地をご相談ください！</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">給与</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">①　固定給25万円＋各種手当＋賞与2回</h4>
                  <div className="mt-4">
                    <h5 className="font-bold mb-2">【各種手当】</h5>
                    <ul className="space-y-2">
                      <li>💡 家族の大黒柱に家族手当<br/>月1万円（配偶者あり）</li>
                      <li>💡 お子様の成長に子供手当<br/>月5千円（お1人当り）</li>
                      <li>💡 家賃・住宅ローンの補助に住宅手当<br/>月3万円</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">②　固定給（月20万円以上）＋インセンティブ</h4>
                  <p>業務量に応じた出来高制度！やればやるほど、稼げる仕組みです。</p>
                  <p className="mt-2">💡 (例)固定給月20万円+インセンティブ15万～40万円</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">応募資格</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>学歴不問</li>
                <li>自動車運転免許（原付限定可）</li>
                <li>未経験者歓迎</li>
                <li>電気工事士資格保有者優遇</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">勤務時間</h3>
              <p>事業場外みなし労働時間制で、1日7時間、土曜日は5時間です。勤務開始・終了時間は柔軟に調整できます。</p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">休日・休暇</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>💡 週休制（日曜・祝日）</li>
                <li>💡 年末休暇あり</li>
                <li>💡 夏季休暇あり</li>
                <li>💡 有給休暇</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">福利厚生・待遇</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>■ 社会保険完備（健康、厚生年金、雇用、労災）</li>
                <li>■ 社宅完備（ワンルーム）あり。 ※遠方の方も安心して働けます</li>
                <li>■ 昇給　年1回</li>
                <li>■ 賞与　年2回</li>
                <li>■ 交通費全額支給（固定給＋手当の場合のみ）</li>
                <li>■ 家族手当（配偶者／月1万円～）</li>
                <li>■ 子ども手当（お子様1人につき／月5千円）</li>
                <li>■ 住宅手当（家賃や住宅ローンをお支払いの方／月3万円）</li>
                <li>■ 健康診断（年1回）</li>
                <li>■ 資格取得支援制度（第二種電気工事士、第一種電気工事士、第三種電気主任技術者取得全面サポート）</li>
                <li>■ 引越支援制度（会社都合の場合に引越代金や家賃の支援）</li>
                <li>■ 経営者育成支援（入社数年後、独立したい方の相談を歓迎、10名程度のグループを任せ経営力を磨きいずれは法人化）</li>
              </ul>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-bold mb-2">💡 新年会　年１回（2月）</h4>
                  <p>ホテルの宴会場を貸し切りで行います。年間MVPを決める表彰式や豪華賞品が当る抽選会で盛り上がります。昨年までは感染対策により未実施でしたが、今年は4年ぶりに開催！舞台上でのテーブル対抗ゲームと巨大スクリーンでの役員インタビューも盛り上がりました。</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">💡 業務グループ毎の懇親会（不定期）</h4>
                  <p>グループマネージャーに懇親会の職務権限があります！グループメンバーを集め暑気払いや忘年会を行います。こんな時だからこそ現場・オペレーター・管理方が一堂に会し交流を深めます！</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">💡 ゴルフコンペ　年2回（6月,12月）</h4>
                  <p>総勢50名程が集まる大ゴルフコンペ！初心者の初参加が毎回あり平均スコアは110程のエンジョイゴルフ！役員や色んな部署の方と1日回って仕事やプライベートなど様々な話ができて充実な時間を過ごせます。</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">応募から入社までの流れ</h3>
              <div className="space-y-4">
                <p>応募</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="flex items-center gap-2">
                    📞 応募方法：お電話またはオンラインフォームからお選びいただけます。
                    <a 
                      href="https://shoeinet.com/form/index.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 underline"
                    >
                      オンラインフォームはこちら
                    </a>
                  </li>
                  <li>📝 書類選考と面接：書類選考後、面接を行います。1日同行の職場体験もあり（日当9,000円、交通費込み）。</li>
                  <li>💼 職場体験のすすめ：面接時に1日同行で、職場環境や仕事内容を体験できます。</li>
                  <li>✔️ 採用決定と入社手続き：採用決定後、入社日を調整します。</li>
                </ul>

                <div className="mt-6">
                  <h4 className="font-bold mb-2">🏢 面接場所とアクセス</h4>
                  <ul className="space-y-2">
                    <li>🚶 京成本線 京成小岩駅より徒歩5分</li>
                    <li>🚶 北総線 新柴又駅より徒歩10分</li>
                    <li>🚶 常磐線 金町駅から京成バスで鎌倉町下車、徒歩1分</li>
                  </ul>
                </div>

                <p className="mt-4">📞 採用担当者：西原（TEL：080-5474-8885）までお問い合わせください。</p>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
