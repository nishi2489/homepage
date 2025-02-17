import { ContactInfo } from "./ContactInfo";
import { ContactFormFields } from "./ContactFormFields";

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] mb-16 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
            alt="都会の夜景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactFormFields />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;