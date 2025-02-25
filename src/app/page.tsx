// app/page.tsx
"use client"; 
// ↑ もしサーバーコンポーネントではなく、クライアントサイドの動きをしたい場合に指定

import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Service from "@/components/Service";
import Recruitment from "@/components/Recruitment";
import ServicesTab from "@/components/ServicesTab";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4">
        {/* Companyコンポーネント呼び出し */}
        <Company />

        <div className="py-8">
          <Service />
        </div>
        
        <div className="py-8">
          <Recruitment />
        </div>
        
        <div className="service-section">
          <a
            href="https://shoeinet.com/business/keiki/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-blue-600 transition-colors"
          >
            <span className="text-yellow-400 mr-2">○</span>
            計器工事
          </a>
        </div>
        
        <ServicesTab />
      </div>
    </main>
  );
}
