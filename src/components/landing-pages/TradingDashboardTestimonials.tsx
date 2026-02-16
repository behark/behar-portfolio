'use client';

import { FiStar } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const testimonials = [
    {
        name: 'Marko T.',
        role: 'Trader Profesional',
        image: '👤',
        text: 'Dashboard më i mirë që kam përdorur! Indikatorët janë të saktë dhe sistemi i alarmeve më ka ndihmuar të marr vendime më të mira.',
        rating: 5
    },
    {
        name: 'Ana K.',
        role: 'Investitore',
        image: '👤',
        text: 'Backtesting feature është fantastike. Kam optimizuar strategjitë e mia dhe performanca është rritur me 40%.',
        rating: 5
    },
    {
        name: 'Driton S.',
        role: 'Day Trader',
        image: '👤',
        text: 'Analiza në kohë reale dhe alarmet më kanë kursyer shumë kohë. Tani mund të fokusohem në trading dhe jo në monitorim.',
        rating: 5
    }
];

export function TradingDashboardTestimonials() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Çfarë Thonë Trader-at
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Mbi 150+ trader të kënaqur që përdorin Trading Dashboard çdo ditë
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-2xl">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
