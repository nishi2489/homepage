import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import TabsContainer from "../components/TabsContent";
import ContactForm from "../components/contact/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="bg-white relative z-10">
        <TabsContainer />
        <Services />
        <About />
        <div id="contact-section" className="py-16">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;