import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PineScriptsHero } from '@/components/landing-pages/PineScriptsHero';
import { PineScriptsFeatures } from '@/components/landing-pages/PineScriptsFeatures';
import { PineScriptsHowItWorks } from '@/components/landing-pages/PineScriptsHowItWorks';
import { PineScriptsPricing } from '@/components/landing-pages/PineScriptsPricing';
import { PineScriptsTestimonials } from '@/components/landing-pages/PineScriptsTestimonials';

export const metadata = {
    title: 'Pine Scripts Collection - Indikatorë TradingView Profesionale',
    description: 'Koleksion i gjerë i indikatorëve TradingView për strategji trading. 50+ indikatorë profesionale me përditësime të vazhdueshme.',
    keywords: 'pine scripts, tradingview indicators, trading strategies, technical analysis',
};

export default function PineScriptsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <main>
                <PineScriptsHero />
                <PineScriptsFeatures />
                <PineScriptsHowItWorks />
                <PineScriptsPricing />
                <PineScriptsTestimonials />
            </main>
            <Footer />
        </div>
    );
}
