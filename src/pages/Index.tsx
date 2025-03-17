import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative">
        <Hero />
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">昭栄エンジニアサービスへようこそ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/business" className="block group">
                <div className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 group-hover:text-blue-700">事業情報</h3>
                  <p className="text-gray-600">電力会社から委託を受け、一般家庭の電気メーターを計量法に基づき定期的に交換する業務を行っています。</p>
                </div>
              </Link>
              
              <Link to="/company" className="block group">
                <div className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold mb-4 text-green-600 group-hover:text-green-700">企業情報</h3>
                  <p className="text-gray-600">昭栄エンジニアサービスの会社概要や理念、沿革についてご紹介します。</p>
                </div>
              </Link>
              
              <Link to="/recruit" className="block group">
                <div className="bg-yellow-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600 group-hover:text-yellow-700">採用情報</h3>
                  <p className="text-gray-600">私たちと一緒に働きませんか？採用情報や求人についてご紹介します。</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;