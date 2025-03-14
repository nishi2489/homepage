import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import TabsContainer from "../components/TabsContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative">
        <Hero />
        <div className="bg-white">
          <TabsContainer />
          <Services />
          <About />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;