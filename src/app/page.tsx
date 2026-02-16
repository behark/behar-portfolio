import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { SocialProof } from '@/components/SocialProof';
import { ProcessSection } from '@/components/ProcessSection';
import { Pricing } from '@/components/Pricing';
import { BookingSection } from '@/components/BookingSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Benefits />
        <SocialProof />
        <ProcessSection />
        <Pricing />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
