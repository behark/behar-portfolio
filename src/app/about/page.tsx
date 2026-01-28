import type { Metadata } from 'next';
import { content } from '@/lib/content';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Rreth Nesh | Behar Kabashi - Web Design Profesional',
    description:
        'Mësoni më shumë rreth ekipit që ndërton webfaqe profesionale dhe sjell rezultate reale për bizneset lokale në Kosovë.',
};

export default function About() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />

            <main id="main-content">
            <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {content.about.title}
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                {content.about.description}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
                                {content.about.mission}
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Vlerat Tona</h3>
                            <ul className="space-y-4">
                                {content.about.values.map((value, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
                        <h2 className="text-3xl font-bold mb-4">{content.about.cta.title}</h2>
                        <p className="text-xl mb-8 opacity-90">
                            {content.about.cta.description}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                        >
                            {content.about.cta.button}
                        </Link>
                    </div>
                </div>
            </section>
            </main>

            <Footer />
        </div>
    );
}
