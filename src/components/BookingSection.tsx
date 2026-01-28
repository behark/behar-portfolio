'use client';

import { useState } from 'react';
import { FiCalendar, FiClock, FiVideo, FiPhone } from 'react-icons/fi';
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
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Rezervo Konsulencë Falas
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Diskutoni projektin tuaj me ne. Oferojmë konsulencë falas për të gjithë klientët e rinj.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {bookingTypes.map((type) => (
                            <ScrollReveal key={type.id} direction="up" delay={0.1 * bookingTypes.indexOf(type)}>
                                <button
                                    onClick={() => setSelectedType(type.id)}
                                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                                        selectedType === type.id
                                            ? 'border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg transform scale-105'
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
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:scale-105 active:scale-95 transform transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-1.013-2.03-1.206-.272-.193-.47-.289-.669-.289-.199 0-.38.063-.531.25-.15.188-.588.735-.768.978-.18.243-.36.289-.598.089-.238-.199-1.002-.736-1.908-1.344-1.765-1.267-2.914-2.827-3.22-3.302-.306-.476-.031-.737.23-.967.243-.211.531-.53.796-.796.265-.265.354-.442.531-.736.177-.295.089-.552-.044-.736-.133-.185-.297-.331-.531-.552-.234-.221-.497-.442-.663-.736-.166-.295-.124-.442.062-.736.186-.295.796-1.914.996-2.62.2-.707.1-1.323-.05-1.736-.15-.414-.669-1.002-1.914-1.002-.723 0-1.47.106-2.24.331-.77.225-1.493.53-2.16.884-.531.281-1.002.618-1.38.978-.378.36-.63.736-.796 1.103-.166.368-.243.736-.243 1.103 0 .368.062.736.199 1.103.137.368.331.736.531 1.103.2.368.442.736.708 1.103.266.368.531.618.796.884.265.266.53.442.796.618.266.177.53.354.796.442.266.089.53.133.796.133.266 0 .531-.044.796-.133.265-.088.53-.265.796-.442.265-.176.53-.352.796-.618.266-.266.508-.735.708-1.103.2-.367.394-.735.531-1.103.137-.367.199-.735.199-1.103 0-.367-.077-.735-.243-1.103-.166-.367-.418-.743-.796-1.103-.378-.36-.849-.697-1.38-.978-.667-.354-1.39-.659-2.16-.884-.77-.225-1.517-.331-2.24-.331-1.245 0-1.764.818-1.914 1.002-.15.185-.25.53-.05 1.736.2.706.81 2.325.996 2.62.186.295.228.442.062.736-.166.295-.429.515-.663.736-.234.221-.398.367-.531.552-.133.185-.221.442-.044.736.177.295.288.531.531.736.243.211.531.53.796.796.265.265.23.491.23.967-.306.475-1.455 2.035-3.22 3.302-.906.608-1.67 1.145-1.908 1.344-.238.2-.418.154-.598.089-.18-.064-.618-.735-.768-.978-.15-.243-.332-.25-.531-.25-.199 0-.397.096-.669.289-.272.193-1.733 1.057-2.03 1.206-.297.149-.531.331-.531.618 0 .287.234.469.531.618.297.149 1.758 1.013 2.03 1.206.272.193.47.289.669.289.199 0 .38-.063.531-.25.15-.188.588-.735.768-.978.18-.243.36-.289.598-.089.238.199 1.002.736 1.908 1.344 1.765 1.267 2.914 2.827 3.22 3.302.306.476.031.737-.23.967-.243.211-.531.53-.796.796-.265.265-.354.442-.531.736-.177.295-.089.552.044.736.133.185.297.331.531.552.234.221.497.442.663.736.166.295.124.442-.062.736-.186.295-.796 1.914-.996 2.62-.2.707-.1 1.323.05 1.736.15.414.669 1.002 1.914 1.002.723 0 1.47-.106 2.24-.331.77-.225 1.493-.53 2.16-.884.531-.281 1.002-.618 1.38-.978.378-.36.63-.736.796-1.103.166-.368.243-.736.243-1.103 0-.368-.062-.736-.199-1.103-.137-.368-.331-.736-.531-1.103-.2-.368-.442-.736-.708-1.103-.266-.368-.531-.618-.796-.884-.265-.266-.53-.442-.796-.618-.266-.177-.53-.354-.796-.442-.266-.089-.53-.133-.796-.133-.266 0-.531.044-.796.133-.265.088-.53.265-.796.442-.265.176-.53.352-.796.618-.266.266-.508.735-.708 1.103-.2.367-.394.735-.531 1.103-.137.367-.199.735-.199 1.103 0 .367.077.735.243 1.103.166.367.418.743.796 1.103.378.36.849.697 1.38.978.667.354 1.39.659 2.16.884.77.225 1.517.331 2.24.331 1.245 0 1.764-.818 1.914-1.002.15-.185.25-.53.05-1.736-.2-.706-.81-2.325-.996-2.62-.186-.295-.228-.442-.062-.736.166-.295.429-.515.663-.736.234-.221.398-.367.531-.552.133-.185.221-.442.044-.736-.177-.295-.288-.531-.531-.736-.243-.211-.531-.53-.796-.796-.265-.265-.23-.491-.23-.967.306-.475 1.455-2.035 3.22-3.302.906-.608 1.67-1.145 1.908-1.344.238-.2.418-.154.598-.089.18.064.618.735.768.978.15.243.332.25.531.25.199 0 .397-.096.669-.289.272-.193 1.733-1.057 2.03-1.206.297-.149.531-.331.531-.618 0-.287-.234-.469-.531-.618z"/>
                                </svg>
                                Rezervo në WhatsApp
                            </button>
                            <a
                                href="/contact"
                                className="flex-1 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-center"
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
