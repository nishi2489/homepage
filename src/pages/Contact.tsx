import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative">
        <div className="bg-white pt-[120px] pb-16">
          <div className="max-w-5xl mx-auto px-4">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 