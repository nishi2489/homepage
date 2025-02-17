import { Shield, Wrench, Flame, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicesTab = () => {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-6 w-6" />
            サービス
          </CardTitle>
          <CardDescription>お客様のニーズに合わせた包括的なサービスを提供します</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="電気設備サービス"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="電気設備サービス"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">定期調査</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>電力量計付近での漏電検査実施</li>
                <li>分電盤の外観・内部点検実施</li>
                <li>必要に応じた絶縁測定の実施</li>
                <li>電気設備の安全相談対応</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">計器工事</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>停電なしでの電力量計交換作業</li>
                <li>取外・取付計器の指針記録</li>
                <li>取付計器の正常動作確認</li>
                <li>必要に応じた停電対応の相談</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">ガス調査サービス</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>ガス漏れ調査の実施</li>
                <li>ガス機器の点火試験</li>
                <li>設置状況と使用環境の確認</li>
                <li>安全装置付き機器への交換提案</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">フィールド作業</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>電気の使用開始・停止時の接続作業</li>
                <li>電力量計・契約ブレーカーの交換</li>
                <li>電線の接続・切断作業</li>
                <li>事前の現場確認実施</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">竣工調査</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>配線・電気設備の目視点検</li>
                <li>絶縁抵抗測定の実施</li>
                <li>電圧測定の実施</li>
                <li>接地抵抗測定の実施</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};