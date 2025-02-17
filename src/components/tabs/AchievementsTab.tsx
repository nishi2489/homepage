import { Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AchievementsTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          実績
        </CardTitle>
        <CardDescription>30年以上の実績と信頼</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-6">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="ビジネス成長"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">3,000+</h3>
            <p className="text-sm text-gray-600">年間点検件数</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-sm text-gray-600">取引企業数</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">99.9%</h3>
            <p className="text-sm text-gray-600">顧客満足度</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">主な実績</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>大手製造業の工場設備点検（年間200件以上）</li>
            <li>商業施設の電気設備24時間監視システム導入</li>
            <li>教育機関の設備更新プロジェクト完遂</li>
            <li>省エネ化による電力使用量30%削減達成</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);
