import HeroSection from './sections/HeroSection';
import TrustSection from './sections/TrustSection';
import DevelopmentsSection from './sections/DevelopmentsSection';
import WhyBoulevardSection from './sections/WhyBoulevardSection';
import AmenitiesSection from './sections/AmenitiesSection';
import PortfolioSection from './sections/PortfolioSection';
import InquirySection from './sections/InquirySection';
import LocationSection from './sections/LocationSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ClosingSection from './sections/ClosingSection';
import SectionGradient from './SectionGradient';

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <div className="landing-content">
        <SectionGradient />
        <WhyBoulevardSection />
        <DevelopmentsSection />
        <AmenitiesSection variant="home" />
        <TrustSection />
        <PortfolioSection />
        <TestimonialsSection />
        <LocationSection />
        <InquirySection />
        <ClosingSection />
      </div>
    </main>
  );
}
