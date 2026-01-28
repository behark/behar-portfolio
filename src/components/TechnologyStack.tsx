'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

const technologies = {
    frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '💅' }
    ],
    backend: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'API', icon: '🔌' }
    ],
    tools: [
        { name: 'WordPress', icon: '📝' },
        { name: 'Git', icon: '📦' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Vercel', icon: '▲' },
        { name: 'AWS', icon: '☁️' }
    ]
};

export function TechnologyStack() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Teknologjitë që Përdorim
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Teknologji moderne dhe të testuara për website-a të shpejtë, të sigurt dhe të besueshëm
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <ScrollReveal direction="up" delay={0}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <span className="mr-2">🎨</span>
                                Frontend
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {technologies.frontend.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                        <span className="text-2xl">{tech.icon}</span>
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Backend */}
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <span className="mr-2">⚙️</span>
                                Backend
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {technologies.backend.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                        <span className="text-2xl">{tech.icon}</span>
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Tools */}
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <span className="mr-2">🛠️</span>
                                Mjete & Platforma
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {technologies.tools.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                        <span className="text-2xl">{tech.icon}</span>
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Ne përdorim teknologji moderne për të krijuar website-a që funksionojnë në të gjitha pajisjet
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-lg border border-green-200 dark:border-green-800">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">Të gjitha teknologjitë janë të përditësuara dhe të sigurta</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
