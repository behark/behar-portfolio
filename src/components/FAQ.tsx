'use client';

import { useState } from 'react';
import { content } from '@/lib/content';
import { ScrollReveal } from '@/components/ScrollReveal';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
                    {content.faq.title}
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {content.faq.items.map((item, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div 
                                className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:scale-98"
                                    aria-expanded={openIndex === index}
                                >
                                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 pr-4">
                                        {item.question}
                                    </h3>
                                    <span className={`text-2xl text-blue-600 dark:text-blue-400 transform transition-transform duration-300 flex-shrink-0 hover:scale-110 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <p className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
