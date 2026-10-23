import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
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
import FooterSection from './sections/FooterSection';

export default function HomePage() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <TrustSection />
      <WhyBoulevardSection />
      <DevelopmentsSection />
      <AmenitiesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <LocationSection />
      <InquirySection />
      <ClosingSection />
      <FooterSection />
    </main>
  );
}
