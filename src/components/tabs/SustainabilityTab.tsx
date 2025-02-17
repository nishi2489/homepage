import { Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SustainabilityTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-6 w-6" />
          サステナビリティ
        </CardTitle>
        <CardDescription>持続可能な社会の実現に向けて</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-6">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
            alt="サステナビリティ"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">環境への取り組み</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>省エネ機器の積極的な導入推進</li>
            <li>再生可能エネルギーの活用支援</li>
            <li>廃棄物の適正処理とリサイクル</li>
            <li>ペーパーレス化の推進</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">社会貢献活動</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>地域清掃活動の実施</li>
            <li>技術者育成プログラムの提供</li>
            <li>災害時の電気設備復旧支援</li>
            <li>環境教育の実施</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">2030年目標</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>CO2排出量50%削減（2020年比）</li>
            <li>再生可能エネルギー使用率80%達成</li>
            <li>女性管理職比率30%達成</li>
            <li>障がい者雇用率3.0%達成</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);
