import { useState } from "react";

export const ContactFormFields = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      console.log('フォームデータ:', formData);
      
      // APIエンドポイントにデータを送信
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('API応答ステータス:', response.status);
      
      // レスポンスの内容を取得
      let responseData;
      try {
        responseData = await response.json();
        console.log('レスポンスデータ:', responseData);
      } catch (parseError) {
        console.error('レスポンスのJSONパースエラー:', parseError);
        responseData = { success: false, error: 'レスポンスの解析に失敗しました' };
      }

      // シミュレーションモードの場合は常に成功とする
      const isSimulated = responseData && responseData.simulated === true;
      
      if (response.ok || isSimulated) {
        // 送信成功時の処理
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        console.log('送信成功', isSimulated ? '(シミュレーションモード)' : '');
      } else {
        setSubmitStatus('error');
        console.error('送信エラー:', responseData?.error || '不明なエラー');
      }
    } catch (error) {
      console.error('送信処理エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
          お問い合わせを送信しました。担当者より順次ご連絡いたします。
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
          送信に失敗しました。お手数ですが、時間をおいて再度お試しいただくか、お電話でのお問い合わせをお願いいたします。
        </div>
      )}
    
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="山田 太郎"
            className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="example@email.com"
            className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="090-1234-5678"
            className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            placeholder="お問い合わせ内容をご記入ください"
            className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </form>
    </>
  );
};