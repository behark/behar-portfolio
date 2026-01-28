import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TradingDashboardHero } from '@/components/landing-pages/TradingDashboardHero';
import { TradingDashboardFeatures } from '@/components/landing-pages/TradingDashboardFeatures';
import { TradingDashboardHowItWorks } from '@/components/landing-pages/TradingDashboardHowItWorks';
import { TradingDashboardPricing } from '@/components/landing-pages/TradingDashboardPricing';
import { TradingDashboardTestimonials } from '@/components/landing-pages/TradingDashboardTestimonials';

export const metadata = {
    title: 'Trading Dashboard - Platform Profesionale për Trading | Analizë në Kohë Reale',
    description: 'Dashboard profesional për trading me indikatorë të avancuar, analizë në kohë reale dhe sistemi i alarmeve.',
    keywords: 'trading dashboard, trading platform, indikatorë trading, analizë trading',
};

export default function TradingDashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <main>
                <TradingDashboardHero />
                <TradingDashboardFeatures />
                <TradingDashboardHowItWorks />
                <TradingDashboardPricing />
                <TradingDashboardTestimonials />
            </main>
            <Footer />
        </div>
    );
}
