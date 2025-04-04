import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[100px] pb-[60px]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h1>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 