'use client';

import { FiTrendingUp, FiZap, FiCheck } from 'react-icons/fi';
import Link from 'next/link';

export function TradingDashboardHero() {
    const handleGetStarted = () => {
        const message = encodeURIComponent(
            'Përshëndetje! Jam i interesuar për Trading Dashboard. Mund të bisedojmë më shumë?'
        );
        window.open(`https://wa.me/38349333019?text=${message}`, '_blank');
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white min-h-[600px] md:min-h-[700px] flex items-center">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <FiZap className="w-4 h-4" />
                            <span className="text-sm font-semibold">Platform Profesionale</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Trading Dashboard <span className="text-yellow-300">Profesional</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
                            Indikatorë të avancuar, analizë në kohë reale dhe sistemi i alarmeve për të marrë vendime më të mira në trading.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <FiCheck className="w-6 h-6 text-green-300 flex-shrink-0" />
                                <span className="text-lg">50+ Indikatorë Profesionale</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiCheck className="w-6 h-6 text-green-300 flex-shrink-0" />
                                <span className="text-lg">Analizë në Kohë Reale</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiCheck className="w-6 h-6 text-green-300 flex-shrink-0" />
                                <span className="text-lg">Sistemi i Alarmeve dhe Njoftimeve</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleGetStarted}
                                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transform transition-all duration-300 shadow-xl"
                            >
                                Fillo Tani - €49/muaj
                            </button>
                            <Link
                                href="#features"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center"
                            >
                                Mëso Më Shumë
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <FiTrendingUp className="w-8 h-8 text-yellow-300" />
                                    <h3 className="text-2xl font-bold">Dashboard Live</h3>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="text-sm text-green-200 mb-2">BTC/USD</div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-2xl font-bold">$42,350</div>
                                        <div className="text-green-300 text-sm">+2.5%</div>
                                    </div>
                                    <div className="text-xs text-green-200 mt-2">Shenjë blerjeje e detektuar</div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="text-sm text-green-200 mb-2">ETH/USD</div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-2xl font-bold">$2,850</div>
                                        <div className="text-red-300 text-sm">-1.2%</div>
                                    </div>
                                    <div className="text-xs text-yellow-200 mt-2">Alarm aktiv: Shitje e rekomanduar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
