import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ImpactCounter from "@/components/ImpactCounter";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import CommunityFeed from "@/components/CommunityFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <ImpactCounter />
        <FeaturedBusinesses />
        <CommunityFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;