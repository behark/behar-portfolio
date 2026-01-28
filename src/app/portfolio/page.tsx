import type { Metadata } from 'next';
import { PortfolioPageContent } from '@/components/PortfolioPageContent';

export const metadata: Metadata = {
    title: 'Portfolio Projekte | Behar Kabashi - Web Design Profesional',
    description:
        'Shembuj realë të projekteve të realizuara për dentistë, restorante dhe biznese të tjera lokale, me rezultate të matshme.',
};

export default function Portfolio() {
    return <PortfolioPageContent />;
}