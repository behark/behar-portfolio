import { content } from '@/lib/content';
import { FiSearch, FiPhone, FiDollarSign } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Benefits() {
    return (
        <section id="benefits" className="section-base bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
                        {content.home.benefits.title}
                    </h2>
                    <p className="body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {content.home.benefits.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollReveal direction="up" delay={0}>
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm card-hover border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-center mb-4">
                                <FiSearch className="w-12 h-12 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                            </div>
                            <h3 className="heading-md text-blue-600 dark:text-blue-400 mb-3">
                                {content.home.benefits.getFound.title}
                            </h3>
                            <p className="body-base text-gray-600 dark:text-gray-300">
                                {content.home.benefits.getFound.description}
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm card-hover border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-center mb-4">
                                <FiPhone className="w-12 h-12 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                            </div>
                            <h3 className="heading-md text-blue-600 dark:text-blue-400 mb-3">
                                {content.home.benefits.captureLeads.title}
                            </h3>
                            <p className="body-base text-gray-600 dark:text-gray-300">
                                {content.home.benefits.captureLeads.description}
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm card-hover border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-center mb-4">
                                <FiDollarSign className="w-12 h-12 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                            </div>
                            <h3 className="heading-md text-blue-600 dark:text-blue-400 mb-3">
                                {content.home.benefits.growRevenue.title}
                            </h3>
                            <p className="body-base text-gray-600 dark:text-gray-300">
                                {content.home.benefits.growRevenue.description}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
