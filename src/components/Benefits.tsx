import { content } from '@/lib/content';
import { FiSearch, FiPhone, FiDollarSign } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BounceOnHover } from '@/components/MicroInteractions';

export function Benefits() {
    return (
        <section id="benefits" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {content.home.benefits.title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {content.home.benefits.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                            <div className="flex justify-center mb-4">
                                <BounceOnHover>
                                    <FiSearch className="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors icon-bounce" aria-hidden="true" />
                                </BounceOnHover>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                {content.home.benefits.getFound.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {content.home.benefits.getFound.description}
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                            <div className="flex justify-center mb-4">
                                <BounceOnHover>
                                    <FiPhone className="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors icon-bounce" aria-hidden="true" />
                                </BounceOnHover>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                {content.home.benefits.captureLeads.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {content.home.benefits.captureLeads.description}
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                            <div className="flex justify-center mb-4">
                                <BounceOnHover>
                                    <FiDollarSign className="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors icon-bounce" aria-hidden="true" />
                                </BounceOnHover>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                {content.home.benefits.growRevenue.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {content.home.benefits.growRevenue.description}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
