'use client';

import { content } from '@/lib/content';
import { AnimatedCounter } from './AnimatedCounter';
import { useInView } from 'react-intersection-observer';

export function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fadeIn">
                    Rezultatet Reale
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className={`text-center card-hover bg-gray-50 dark:bg-gray-800 p-8 rounded-xl ${inView ? 'animate-scaleIn' : ''} hover:scale-105 transition-transform duration-300`}>
                        <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                            {inView && <AnimatedCounter end={50} suffix="+" />}
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            {content.home.stats.clientsLabel}
                        </p>
                    </div>

                    <div className={`text-center card-hover bg-gray-50 dark:bg-gray-800 p-8 rounded-xl ${inView ? 'animate-scaleIn' : ''} hover:scale-105 transition-transform duration-300`} style={{ animationDelay: '0.2s' }}>
                        <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                            {inView && <AnimatedCounter end={2.5} suffix="M+" prefix="€" duration={2500} />}
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            {content.home.stats.revenueLabel}
                        </p>
                    </div>

                    <div className={`text-center card-hover bg-gray-50 dark:bg-gray-800 p-8 rounded-xl ${inView ? 'animate-scaleIn' : ''} hover:scale-105 transition-transform duration-300`} style={{ animationDelay: '0.4s' }}>
                        <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                            {inView && <AnimatedCounter end={5000} suffix="+" duration={3000} />}
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            {content.home.stats.customersLabel}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
