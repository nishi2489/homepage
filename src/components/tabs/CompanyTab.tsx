import { Card, CardContent } from "@/components/ui/card";

export const CompanyTab = () => {
  return (
    <div 
      id="company" 
      className="space-y-8 p-6 relative bg-gradient-to-b from-gray-50 to-white"
      style={{ scrollMarginTop: '140px' }}
    >
      <Card className="border-0 shadow-xl">
        {/* 
          text-left: モバイル時は左寄せ
          md:text-center: md以上の画面サイズでは中央寄せ
          !text-left: 親要素の text-center を上書き
        */}
        <CardContent className="p-8 text-left md:text-center !text-left">
          <h2 className="text-2xl font-bold mb-4">企業情報</h2>
          <p>
            安全と信頼を第一に、社会インフラの維持に貢献しています。
            電気設備の安全を守る専門家集団として、確かな技術と誠実な対応で
            地域社会の暮らしを支えます。
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
