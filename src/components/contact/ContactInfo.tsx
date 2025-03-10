import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6">連絡先情報</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-blue-600 mr-3" />
          <div>
            <p className="font-semibold">電話番号</p>
            <p className="text-gray-600">0120-356-362</p>
            <p className="text-sm text-gray-500">受付時間: 平日 9:00〜17:00</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-blue-600 mr-3" />
          <div>
            <p className="font-semibold">メールアドレス</p>
            <p className="text-gray-600">info@shoei-engineer.co.jp</p>
            <p className="text-sm text-gray-500">24時間受付</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-blue-600 mr-3" />
          <div>
            <p className="font-semibold">所在地</p>
            <p className="text-gray-600">
              〒124-0001<br />
              東京都葛飾区鎌倉3-59-2
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          ※お問い合わせフォームからのご連絡は24時間受け付けております。<br />
          担当者からの返信は、営業時間内（平日9:00〜17:00）となります。
        </p>
      </div>
    </div>
  );
};