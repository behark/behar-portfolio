'use client';

import { FiStar } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const testimonials = [
    {
        name: 'Arben K.',
        role: 'Pronar Biznesi',
        image: '👤',
        text: 'Gjeta makinën time të ëndrrave në javën e parë! Car Sniper më njoftoi për një BMW 320d që sapo u listua dhe isha i pari që kontaktova. Kursova €2,000!',
        rating: 5
    },
    {
        name: 'Liridona M.',
        role: 'Konsumatore',
        image: '👤',
        text: 'Nuk më duhej më të kontrolloja çdo ditë listat. Car Sniper e bëri automatikisht dhe më njoftoi sapo gjeti diçka që më interesonte. Fantastike!',
        rating: 5
    },
    {
        name: 'Blerim S.',
        role: 'Tregtar Automjetesh',
        image: '👤',
        text: 'Përdor Car Sniper për të gjetur automjete me çmime të mira që mund t\'i rishit. Më ka kursyer shumë kohë dhe ka rritur fitimet e mia.',
        rating: 5
    }
];

export function CarSniperTestimonials() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Çfarë Thonë Përdoruesit
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Mbi 200+ përdorues të kënaqur që kanë gjetur makinën e tyre me Car Sniper
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
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-2xl">
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
