import { ContactFormFields } from "./ContactFormFields";

const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto">
          ご質問やご相談がございましたら、お気軽にお問い合わせください
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <ContactFormFields />
      </div>
    </div>
  );
};

export default ContactForm;