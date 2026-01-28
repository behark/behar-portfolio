import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
            <Navbar />
            
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4 animate-fadeIn">
                            404
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
                            Faqja nuk u gjet
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            Na vjen keq, faqja që po kërkoni nuk ekziston ose është zhvendosur.
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <Link
                            href="/"
                            className="inline-block btn-primary text-lg px-8 py-4"
                        >
                            Kthehu në Ballinë
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
                        >
                            Na Kontaktoni
                        </Link>
                    </div>

                    <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Faqet e disponueshme:
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Ballina
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Rreth Nesh
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                Kontakt
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
