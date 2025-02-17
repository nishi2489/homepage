import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import TabsContainer from "../components/TabsContent";
import WorkFlow from "../components/WorkFlow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="bg-white relative z-10">
        <TabsContainer />
        <WorkFlow />
        <Services />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Index;