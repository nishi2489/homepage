import { Card, CardContent } from "@/components/ui/card";

export const CompanyTab = () => {
  return (
    <div 
      id="company" 
      className="space-y-8 p-6 relative bg-gradient-to-b from-gray-50 to-white"
      style={{ scrollMarginTop: '140px' }}
    >
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8">
          {/* 新しい企業情報のコンテンツをここに実装予定 */}
        </CardContent>
      </Card>
    </div>
  );
};
