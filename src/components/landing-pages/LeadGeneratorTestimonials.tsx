'use client';

import { FiStar } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const testimonials = [
    {
        name: 'Arben K.',
        role: 'Pronar Biznesi',
        image: '👤',
        text: 'Lead Generator më ka rritur klientët me 40% në 3 muaj! Sistemi automatik kursen kaq shumë kohë dhe lead-et janë të cilësisë së lartë.',
        rating: 5
    },
    {
        name: 'Lena M.',
        role: 'Marketing Manager',
        image: '👤',
        text: 'Email automation dhe integrimi me CRM tonë e bënë procesin shumë më të lehtë. Tani fokusohemi në konvertim dhe jo në kërkim.',
        rating: 5
    },
    {
        name: 'Driton S.',
        role: 'CEO',
        image: '👤',
        text: 'ROI është fantastike! Investimi në Lead Generator u kthye në 2 muaj. Rekomandoj për çdo biznes që dëshiron të rritet.',
        rating: 5
    }
];

export function LeadGeneratorTestimonials() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Çfarë Thonë Klientët
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Mbi 100+ biznese që përdorin Lead Generator për rritjen e tyre
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
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-2xl">
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
