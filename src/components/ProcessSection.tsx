'use client';

import { FiSearch, FiPenTool, FiCode, FiSend, FiCheckCircle } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
    {
        number: '01',
        icon: <FiSearch className="w-6 h-6" />,
        title: 'Konsultim & Analizë',
        description: 'Diskutojmë nevojat tuaja, objektivat dhe stilin që dëshironi. Analizojmë konkurrencën dhe krijojmë strategji.',
        duration: '1-2 ditë',
        deliverables: ['Konsulencë falas', 'Analizë e tregut', 'Rekomandime strategjike']
    },
    {
        number: '02',
        icon: <FiPenTool className="w-6 h-6" />,
        title: 'Dizajn & Prototip',
        description: 'Krijojmë dizajn profesional që reflekton identitetin tuaj të markës. Ju shfaqim prototip për komente dhe përmirësime.',
        duration: '2-3 ditë',
        deliverables: ['Dizajn i plotë', 'Prototip interaktiv', 'Revisime të pakufizuara']
    },
    {
        number: '03',
        icon: <FiCode className="w-6 h-6" />,
        title: 'Zhvillim & Programim',
        description: 'E ndërtojmë website-in me teknologji moderne, të shpejtë dhe të sigurt. Testojmë në të gjitha pajisjet.',
        duration: '2-3 ditë',
        deliverables: ['Website i plotë', 'I përshtatshëm për celular', 'Optimizuar për Google']
    },
    {
        number: '04',
        icon: <FiSend className="w-6 h-6" />,
        title: 'Lansim & Mbështetje',
        description: 'E lansojmë website-in tuaj dhe sigurohemi që funksionon perfekt. Ofrojmë mbështetje dhe trajnim.',
        duration: '1 ditë',
        deliverables: ['Lansim i suksesshëm', 'Trajnim për përdorim', 'Mbështetje 30 ditë']
    }
];

export function ProcessSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Procesi Ynë i Punës
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Një proces i thjeshtë dhe transparent që ju çon nga ideja në website profesional në 5-7 ditë
                    </p>
                </div>

                <div className="relative">
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                                <div className="relative">
                                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                                        {/* Step number badge */}
                                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                            {step.number}
                                        </div>

                                        {/* Icon */}
                                        <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 mt-4">
                                            {step.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Duration badge */}
                                        <div className="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                            ⏱️ {step.duration}
                                        </div>

                                        {/* Deliverables */}
                                        <div className="space-y-2">
                                            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                Përfshin:
                                            </div>
                                            {step.deliverables.map((item, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                    <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow connector for desktop */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8">
                                            <svg className="w-full h-full text-blue-400 dark:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block bg-blue-50 dark:bg-blue-900/20 px-8 py-4 rounded-xl border border-blue-200 dark:border-blue-800">
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-bold text-blue-600 dark:text-blue-400">Koha totale:</span> 5-7 ditë për website profesional i plotë
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
