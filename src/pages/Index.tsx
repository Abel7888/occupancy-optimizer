import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ForOwnersSection from "@/components/ForOwnersSection";
import ForInvestorsSection from "@/components/ForInvestorsSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ForOwnersSection />
        <ForInvestorsSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
