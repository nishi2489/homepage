import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Factory, Building, GraduationCap, Hospital, Hotel } from "lucide-react";
import { CaseStudy } from "./CaseStudy";

export const CaseStudiesTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          導入事例
        </CardTitle>
        <CardDescription>実際の導入事例をご紹介します</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="導入事例 - チーム"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1579551441922-b37c9b69ce3f"
            alt="導入事例 - 技術"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        <CaseStudy
          icon={Factory}
          title="大手製造業A社様"
          challenges={[
            "老朽化した電気設備の安全性への懸念",
            "高額な電気料金",
            "突発的な設備故障による生産ライン停止"
          ]}
          solutions={[
            "24時間遠隔監視システムの導入",
            "計画的な設備更新プログラムの実施",
            "省エネ機器への段階的な切り替え"
          ]}
          results={[
            "年間電気料金を25%削減",
            "設備故障による生産ライン停止が90%減少",
            "CO2排出量を年間30%削減"
          ]}
        />

        <CaseStudy
          icon={Building}
          title="商業施設B社様"
          challenges={[
            "施設内の照明設備の非効率な運用",
            "空調システムの制御が不適切",
            "電気設備の定期点検による営業時間への影響"
          ]}
          solutions={[
            "スマート照明制御システムの導入",
            "AIを活用した空調制御システムの実装",
            "営業時間外での効率的な点検スケジュール策定"
          ]}
          results={[
            "照明関連の電力使用量を40%削減",
            "空調効率が35%向上",
            "年間保守コストを20%削減"
          ]}
        />

        <CaseStudy
          icon={GraduationCap}
          title="教育機関C様"
          challenges={[
            "築50年以上の古い電気設備",
            "安全基準への適合性の懸念",
            "限られた予算内での設備更新の必要性"
          ]}
          solutions={[
            "段階的な設備更新計画の策定と実施",
            "省エネ補助金を活用した最新設備の導入",
            "教職員向け省エネ研修プログラムの実施"
          ]}
          results={[
            "電気設備の安全性が大幅に向上",
            "年間電気料金を30%削減",
            "教職員の省エネ意識が向上"
          ]}
        />

        <CaseStudy
          icon={Hospital}
          title="医療機関D様"
          challenges={[
            "24時間稼働による高い電力消費",
            "医療機器の安定稼働の確保",
            "バックアップ電源システムの老朽化"
          ]}
          solutions={[
            "高効率な医療用電源システムの導入",
            "最新のバックアップ電源システムへの更新",
            "エネルギー使用量の可視化システム導入"
          ]}
          results={[
            "電力使用量を20%削減",
            "バックアップ電源の信頼性が向上",
            "年間維持費を15%削減"
          ]}
        />

        <CaseStudy
          icon={Hotel}
          title="ホテルE様"
          challenges={[
            "客室の電力使用効率の低さ",
            "設備の老朽化による故障リスク",
            "宿泊客の快適性と省エネの両立"
          ]}
          solutions={[
            "客室管理システムの最新化",
            "全館LED照明への切り替え",
            "スマートエネルギー制御システムの導入"
          ]}
          results={[
            "客室の電力消費を35%削減",
            "顧客満足度が15%向上",
            "設備保守コストを25%削減"
          ]}
        />
      </CardContent>
    </Card>
  </div>
);