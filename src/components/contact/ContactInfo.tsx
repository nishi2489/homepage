import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6">連絡先情報</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-primary mr-3" />
          <div>
            <p className="font-semibold">電話番号</p>
            <p className="text-gray-600">03-1234-5678</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-primary mr-3" />
          <div>
            <p className="font-semibold">メールアドレス</p>
            <p className="text-gray-600">info@example.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-primary mr-3" />
          <div>
            <p className="font-semibold">所在地</p>
            <p className="text-gray-600">
              東京都葛飾区鎌倉3-58-2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};