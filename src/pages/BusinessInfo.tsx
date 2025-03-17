import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ServicesTab } from "../components/tabs/ServicesTab";
import Services from "../components/Services";

const BusinessInfo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[100px] pb-[60px]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">事業情報</h1>
          <ServicesTab />
          <div className="mt-12">
            <Services />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInfo; 