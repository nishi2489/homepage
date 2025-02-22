import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AchievementsTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          採用情報
        </CardTitle>
        <CardDescription>私たちと一緒に、社会インフラの未来を創っていきませんか</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="/images/saku.jpg"
              alt="電気設備サービス"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="/images/item.jpg"
              alt="電気設備サービス"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">募集職種</h3>
          <div className="p-4 border rounded-lg mb-4">
            <h4 className="font-medium mb-2">電気工事士（正社員）</h4>
            <p className="text-sm text-gray-600 mb-4">
              主に一般家庭での電力量計の交換工事や電気設備の点検業務を担当していただきます。
            </p>
            <ul className="text-sm space-y-2">
              <li>給与：月給25万円〜35万円（経験・能力による）</li>
              <li>勤務時間：8:30〜17:30（休憩60分）</li>
              <li>休日：週休2日制（土日）、祝日、年末年始、有給休暇</li>
              <li>資格：第二種電気工事士（未取得の場合、入社後の取得支援あり）</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">応募資格</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>学歴不問</li>
            <li>要普通自動車免許</li>
            <li>未経験者歓迎</li>
            <li>電気工事士資格保有者優遇</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">福利厚生</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>各種社会保険完備</li>
            <li>交通費支給（上限あり）</li>
            <li>資格取得支援制度</li>
            <li>社員研修制度</li>
            <li>昇給・賞与（年2回）</li>
            <li>退職金制度</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">応募方法</h3>
          <p className="text-sm mb-2">
            お電話またはメールにてお問い合わせください。<br />
            面接日程等の詳細をご案内させていただきます。
          </p>
          <div className="text-sm">
            <p>TEL: 0120-356-362（平日 9:00〜17:00）</p>
            <p>Email: recruit@shoei-engineer.co.jp</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AchievementsTab;
