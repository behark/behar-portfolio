'use client';

import { useState } from 'react';
import { FiCalendar, FiClock, FiVideo, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

export function BookingSection() {
    const [selectedType, setSelectedType] = useState<'call' | 'video' | 'meeting'>('call');

    const bookingTypes = [
        {
            id: 'call' as const,
            title: 'Thirrje Telefonike',
            icon: <FiPhone className="w-6 h-6" />,
            duration: '15 minuta',
            description: 'Diskutim i shpejtë për projektin tuaj'
        },
        {
            id: 'video' as const,
            title: 'Video Call',
            icon: <FiVideo className="w-6 h-6" />,
            duration: '30 minuta',
            description: 'Konsulencë e detajuar me demo live'
        },
        {
            id: 'meeting' as const,
            title: 'Takim në Person',
            icon: <FiCalendar className="w-6 h-6" />,
            duration: '1 orë',
            description: 'Takim në zyrë për diskutim të plotë'
        }
    ];

    const handleBooking = () => {
        const typeText = bookingTypes.find(t => t.id === selectedType)?.title || 'Konsulencë';
        const message = encodeURIComponent(
            `Përshëndetje! Dëshiroj të rezervoj një ${typeText} për diskutim për projektin tim.`
        );
        window.open(`https://wa.me/38349333019?text=${message}`, '_blank');
    };

    return (
        <section className="section-base cta-gradient bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
                        Rezervo Konsulencë Falas
                    </h2>
                    <p className="body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Diskutoni projektin tuaj me ne. Oferojmë konsulencë falas për të gjithë klientët e rinj.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {bookingTypes.map((type) => (
                            <ScrollReveal key={type.id} direction="up" delay={0.1 * bookingTypes.indexOf(type)}>
                                <button
                                    onClick={() => setSelectedType(type.id)}
                                    className={`p-6 rounded-xl border transition-all duration-200 text-left ${
                                        selectedType === type.id
                                            ? 'border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm'
                                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
                                    }`}
                                >
                                    <div className={`mb-4 inline-flex p-3 rounded-lg ${
                                        selectedType === type.id
                                            ? 'bg-blue-600 dark:bg-blue-500 text-white'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                                    }`}>
                                        {type.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {type.title}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        <FiClock className="w-4 h-4 mr-2" />
                                        {type.duration}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {type.description}
                                    </p>
                                </button>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Rezervo Tani
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Zgjidhni llojin e konsulencës dhe klikoni butonin më poshtë për të rezervuar në WhatsApp
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleBooking}
                                className="btn-primary flex-1 text-lg py-4"
                            >
                                <FiMessageCircle className="w-5 h-5 mr-2" />
                                Rezervo në WhatsApp
                            </button>
                            <a
                                href="/contact"
                                className="btn-secondary flex-1 text-lg py-4"
                            >
                                Ose na kontaktoni
                            </a>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">100%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Falas</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">24/7</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Disponueshëm</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">15 min</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Përgjigje e shpejtë</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
