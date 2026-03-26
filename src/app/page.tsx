import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SolutionsSection } from "@/components/SolutionsSection";
import { StatsSection } from "@/components/StatsSection";
import { EnterpriseSection } from "@/components/EnterpriseSection";
import { SupportSection } from "@/components/SupportSection";
import { StartupsSection } from "@/components/StartupsSection";
import { PlatformSection } from "@/components/PlatformSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { NewsSection } from "@/components/NewsSection";
import { BookSection } from "@/components/BookSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <SolutionsSection />
        <StatsSection />
        <EnterpriseSection />
        <SupportSection />
        <StartupsSection />
        <PlatformSection />
        <TestimonialsSection />
        <DeveloperSection />
        <NewsSection />
        <BookSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
