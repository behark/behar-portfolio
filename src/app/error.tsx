'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FiAlertCircle, FiHome, FiRefreshCw } from 'react-icons/fi';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log error to console or error reporting service
        console.error('Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
            <Navbar />
            
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <div className="mb-8">
                        <div className="flex justify-center mb-4">
                            <FiAlertCircle className="w-16 h-16 text-red-600 dark:text-red-400" aria-hidden="true" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Diçka shkoi keq
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Na vjen keq, ka ndodhur një gabim. Ju lutemi provoni përsëri.
                        </p>
                        {error.message && (
                            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-8">
                                <p className="text-sm text-red-700 dark:text-red-400 font-mono">
                                    {error.message}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <button
                            onClick={reset}
                            className="inline-flex items-center btn-primary text-lg px-8 py-4"
                        >
                            <FiRefreshCw className="w-5 h-5 mr-2" aria-hidden="true" />
                            Provo Përsëri
                        </button>
                        <Link
                            href="/"
                            className="inline-flex items-center border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
                        >
                            <FiHome className="w-5 h-5 mr-2" aria-hidden="true" />
                            Kthehu në Ballinë
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
