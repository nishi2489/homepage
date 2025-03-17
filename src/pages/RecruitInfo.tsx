import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RecruitTab } from "../components/tabs/RecruitTab";
import Recruitment from "../components/Recruitment";

const RecruitInfo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[100px] pb-[60px]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">採用情報</h1>
          <RecruitTab />
          <div className="mt-12">
            <Recruitment />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecruitInfo; 