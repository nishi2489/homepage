import { Card, CardContent } from "@/components/ui/card";

export const ServicesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white">
      <Card>
        <CardContent className="p-0">
          <div className="relative w-full aspect-[16/9]">
            <img
              src="/images/keiki.jpg"
              alt="電気設備サービス"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="relative w-full aspect-[16/9]">
            <img
              src="/images/item.jpg"
              alt="電気設備サービス"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesTab;
