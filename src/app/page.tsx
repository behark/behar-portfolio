import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Benefits } from '@/components/Benefits';
import { SocialProof } from '@/components/SocialProof';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { ProcessSection } from '@/components/ProcessSection';
import { TechnologyStack } from '@/components/TechnologyStack';
import { Pricing } from '@/components/Pricing';
import { PricingCalculator } from '@/components/PricingCalculator';
import { AdditionalServices } from '@/components/AdditionalServices';
import { BookingSection } from '@/components/BookingSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <Benefits />
        <SocialProof />
        <Stats />
        <Testimonials />
        <ProcessSection />
        <TechnologyStack />
        <Pricing />
        <PricingCalculator />
        <AdditionalServices />
        <BookingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
