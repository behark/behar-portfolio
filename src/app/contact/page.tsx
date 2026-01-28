import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/ContactPageContent';

export const metadata: Metadata = {
    title: 'Kontakt | Behar Kabashi - Web Design Profesional',
    description:
        'Na kontaktoni për një konsultim falas rreth webfaqes suaj dhe si mund të sjellim më shumë klientë për biznesin tuaj.',
};

export default function Contact() {
    return <ContactPageContent />;
}