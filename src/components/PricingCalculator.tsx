'use client';

import { useState } from 'react';
import { FiDollarSign, FiCheck } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

interface CalculatorOptions {
    pages: number;
    features: string[];
    support: string;
}

const featureOptions = [
    { id: 'contact-form', label: 'Formular Kontakti', price: 0 },
    { id: 'gallery', label: 'Galeri Fotografish', price: 50 },
    { id: 'booking', label: 'Sistem Rezervimesh', price: 200 },
    { id: 'ecommerce', label: 'Blerje Online', price: 300 },
    { id: 'blog', label: 'Blog/News', price: 100 },
    { id: 'multilang', label: 'Shumë Gjuhë', price: 150 },
    { id: 'seo', label: 'SEO Optimizim', price: 100 },
    { id: 'analytics', label: 'Google Analytics', price: 50 }
];

const supportOptions = [
    { id: 'email', label: 'Mbështetje Email', price: 0 },
    { id: '1month', label: '1 Muaj Mbështetje', price: 50 },
    { id: '3months', label: '3 Muaj Mbështetje', price: 120 },
    { id: '6months', label: '6 Muaj Mbështetje', price: 200 }
];

export function PricingCalculator() {
    const [pages, setPages] = useState(5);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [support, setSupport] = useState('email');

    const basePrice = 250;
    const pagePrice = pages > 5 ? (pages - 5) * 50 : 0;
    const featuresPrice = selectedFeatures.reduce((total, featureId) => {
        const feature = featureOptions.find(f => f.id === featureId);
        return total + (feature?.price || 0);
    }, 0);
    const supportPrice = supportOptions.find(s => s.id === support)?.price || 0;

    const totalPrice = basePrice + pagePrice + featuresPrice + supportPrice;

    const toggleFeature = (featureId: string) => {
        setSelectedFeatures(prev =>
            prev.includes(featureId)
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    const handleGetQuote = () => {
        const message = encodeURIComponent(
            `Përshëndetje! Kam llogaritur një çmim për website-in tim:\n\n` +
            `Faqe: ${pages}\n` +
            `Karakteristika: ${selectedFeatures.length > 0 ? selectedFeatures.map(id => featureOptions.find(f => f.id === id)?.label).join(', ') : 'Asnjë'}\n` +
            `Mbështetje: ${supportOptions.find(s => s.id === support)?.label}\n\n` +
            `Çmimi i vlerësuar: €${totalPrice}\n\n` +
            `Mund të diskutojmë më shumë?`
        );
        window.open(`https://wa.me/38349333019?text=${message}`, '_blank');
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full mb-4">
                        <FiDollarSign className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Llogaritni Çmimin Tuaj
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Zgjidhni karakteristikat që dëshironi dhe merrni një çmim të vlerësuar për website-in tuaj
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <ScrollReveal direction="right" delay={0}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            {/* Number of Pages */}
                            <div className="mb-8">
                                <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Numri i Faqeve
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="20"
                                        value={pages}
                                        onChange={(e) => setPages(Number(e.target.value))}
                                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                    />
                                    <div className="w-20 text-center font-bold text-blue-600 dark:text-blue-400 text-xl">
                                        {pages}
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    Faqe bazë: 5 (€250). Çdo faqe shtesë: +€50
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-8">
                                <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Karakteristika Shtesë
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {featureOptions.map((feature) => (
                                        <button
                                            key={feature.id}
                                            onClick={() => toggleFeature(feature.id)}
                                            className={`p-3 rounded-lg border-2 text-left transition-all ${
                                                selectedFeatures.includes(feature.id)
                                                    ? 'border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                    {feature.label}
                                                </span>
                                                {selectedFeatures.includes(feature.id) && (
                                                    <FiCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                )}
                                            </div>
                                            {feature.price > 0 && (
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    +€{feature.price}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Support */}
                            <div>
                                <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Mbështetje
                                </label>
                                <div className="space-y-2">
                                    {supportOptions.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => setSupport(option.id)}
                                            className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                                                support === option.id
                                                    ? 'border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold text-gray-900 dark:text-white">
                                                    {option.label}
                                                </span>
                                                {option.price > 0 && (
                                                    <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                                                        +€{option.price}
                                                    </span>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Price Summary */}
                    <ScrollReveal direction="left" delay={0.2}>
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 p-8 rounded-xl shadow-xl text-white">
                            <h3 className="text-2xl font-bold mb-6">Çmimi i Vlerësuar</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center pb-3 border-b border-blue-400/30">
                                    <span className="text-blue-100">Faqe bazë (5 faqe)</span>
                                    <span className="font-bold">€250</span>
                                </div>
                                {pagePrice > 0 && (
                                    <div className="flex justify-between items-center pb-3 border-b border-blue-400/30">
                                        <span className="text-blue-100">{pages - 5} faqe shtesë</span>
                                        <span className="font-bold">+€{pagePrice}</span>
                                    </div>
                                )}
                                {featuresPrice > 0 && (
                                    <div className="flex justify-between items-center pb-3 border-b border-blue-400/30">
                                        <span className="text-blue-100">Karakteristika</span>
                                        <span className="font-bold">+€{featuresPrice}</span>
                                    </div>
                                )}
                                {supportPrice > 0 && (
                                    <div className="flex justify-between items-center pb-3 border-b border-blue-400/30">
                                        <span className="text-blue-100">Mbështetje</span>
                                        <span className="font-bold">+€{supportPrice}</span>
                                    </div>
                                )}
                            </div>

                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xl font-semibold">Total:</span>
                                    <span className="text-4xl font-bold">€{totalPrice}</span>
                                </div>
                                <div className="text-sm text-blue-100 mt-2">
                                    * Ky është një çmim i vlerësuar. Çmimi final mund të ndryshojë bazuar në kërkesat specifike.
                                </div>
                            </div>

                            <button
                                onClick={handleGetQuote}
                                className="w-full bg-white text-blue-600 py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transform transition-all duration-300 shadow-lg"
                            >
                                Merrni Ofertë të Detajuar
                            </button>

                            <div className="mt-6 text-center text-sm text-blue-100">
                                <p>✓ Oferta falas dhe pa detyrim</p>
                                <p>✓ Përgjigje brenda 24 orëve</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
