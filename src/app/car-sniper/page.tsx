import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CarSniperHero } from '@/components/landing-pages/CarSniperHero';
import { CarSniperFeatures } from '@/components/landing-pages/CarSniperFeatures';
import { CarSniperHowItWorks } from '@/components/landing-pages/CarSniperHowItWorks';
import { CarSniperPricing } from '@/components/landing-pages/CarSniperPricing';
import { CarSniperTestimonials } from '@/components/landing-pages/CarSniperTestimonials';

export const metadata = {
    title: 'Car Sniper - AI-Powered Car Monitor | Gjeni Makinën e Ëndrrave',
    description: 'Monitor automatik për listat e makinave. Merrni njoftime në Telegram/WhatsApp kur gjeni makinën e përsosur me çmimin e duhur.',
    keywords: 'car monitor, car sniper, makinë, monitorim automatik, njoftime makinash',
};

export default function CarSniperPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <main>
                <CarSniperHero />
                <CarSniperFeatures />
                <CarSniperHowItWorks />
                <CarSniperPricing />
                <CarSniperTestimonials />
            </main>
            <Footer />
        </div>
    );
}
