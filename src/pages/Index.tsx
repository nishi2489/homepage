import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TabsContainer from "../components/TabsContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative">
        <Hero />
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">昭栄エンジニアサービスへようこそ</h2>
            
            <div className="max-w-7xl mx-auto">
              <TabsContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;