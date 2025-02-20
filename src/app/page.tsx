"use client";

import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Service from "@/components/Service";
import Recruitment from "@/components/Recruitment";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4">
        <Company />
        <div className="py-8">
          <Service />
        </div>
        <div className="py-8">
          <Recruitment />
        </div>
      </div>
    </main>
  );
} 