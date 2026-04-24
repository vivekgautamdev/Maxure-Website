import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SmartThinkingCards from "./SmartThinkingCards";
import ProductCategoriesGrid from "./ProductCategoriesGrid";
import WhyMaxureSection from "./WhyMaxureSection";
import ClassroomSection from "./ClassroomSection";
import ConnectivityDiagram from "./ConnectivityDiagram";
import SoftwareFeaturesSection from "./SoftwareFeaturesSection";
import PanelSizesSection from "./PanelSizesSection";
import BuiltForEverySpaceSection from "./BuiltForEverySpaceSection";
import SpecsAccordion from "./SpecsAccordion";
import ClientLogosMarquee from "./ClientLogosMarquee";
import DemoRequestSection from "./DemoRequestSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <SmartThinkingCards />
      <ProductCategoriesGrid />
      <WhyMaxureSection />
      <ClassroomSection />
      <ConnectivityDiagram />
      <SoftwareFeaturesSection />
      <PanelSizesSection />
      <BuiltForEverySpaceSection />
      <SpecsAccordion />
      <ClientLogosMarquee />
      <DemoRequestSection />
      <Footer />
    </div>
  );
}

export default Home;
