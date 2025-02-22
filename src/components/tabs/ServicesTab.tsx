import { Card, CardContent } from "@/components/ui/card";

export const ServicesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <img
        src="/images/keiki.jpg"
        alt="電気設備サービス"
        className="w-full h-48 object-cover rounded-lg"
      />
      <img
        src="/images/item.jpg"
        alt="電気設備サービス"
        className="w-full h-48 object-cover rounded-lg"
      />
    </div>
  );
};

export default ServicesTab;