import { content } from '@/lib/content';
import { FiStar } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Testimonials() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
                    {content.testimonials.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {content.testimonials.items.map((testimonial, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="flex mb-4" aria-label={`${testimonial.stars} out of 5 stars`}>
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <FiStar 
                                            key={i} 
                                            className="w-5 h-5 text-yellow-400 fill-yellow-400 hover:scale-110 transition-transform" 
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <p className="font-bold text-blue-600 dark:text-blue-400">
                                    {testimonial.author}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
