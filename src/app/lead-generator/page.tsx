import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LeadGeneratorHero } from '@/components/landing-pages/LeadGeneratorHero';
import { LeadGeneratorFeatures } from '@/components/landing-pages/LeadGeneratorFeatures';
import { LeadGeneratorHowItWorks } from '@/components/landing-pages/LeadGeneratorHowItWorks';
import { LeadGeneratorPricing } from '@/components/landing-pages/LeadGeneratorPricing';
import { LeadGeneratorTestimonials } from '@/components/landing-pages/LeadGeneratorTestimonials';

export const metadata = {
    title: 'Lead Generator - Gjenerim Automatik i Lead-eve për Bizneset Lokale',
    description: 'Sistem automatik për gjenerimin e lead-eve për bizneset lokale. Integrim me CRM, email automation dhe analytics dashboard.',
    keywords: 'lead generator, lead generation, marketing automation, CRM integration',
};

export default function LeadGeneratorPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navbar />
            <main>
                <LeadGeneratorHero />
                <LeadGeneratorFeatures />
                <LeadGeneratorHowItWorks />
                <LeadGeneratorPricing />
                <LeadGeneratorTestimonials />
            </main>
            <Footer />
        </div>
    );
}
