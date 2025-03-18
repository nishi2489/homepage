import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CompanyTab } from "../components/tabs/CompanyTab";
import About from "../components/About";

const CompanyInfo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[100px] pb-[60px]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center text-green-700">昭栄エンジニアサービスについて</h1>
          <About />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyInfo; 