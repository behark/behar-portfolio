'use client';

import { useState } from 'react';
import { content } from '@/lib/content';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-all duration-300">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        {/* Logo placeholder - you can replace with actual logo */}
                        <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">BK</span>
                        </div>
                        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Behar Kabashi
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                        >
                            {content.nav.home}
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                        >
                            {content.nav.portfolio}
                        </Link>
                        <div className="relative group">
                            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-1">
                                Mjete
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="py-2">
                                    <Link href="/car-sniper" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Car Sniper
                                    </Link>
                                    <Link href="/trading-dashboard" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Trading Dashboard
                                    </Link>
                                    <Link href="/lead-generator" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Lead Generator
                                    </Link>
                                    <Link href="/pine-scripts" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        Pine Scripts
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/about"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                        >
                            {content.nav.about}
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                        >
                            {content.nav.contact}
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden animate-fadeIn">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content.nav.home}
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content.nav.portfolio}
                            </Link>
                            <div className="px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">
                                Mjete:
                            </div>
                            <Link
                                href="/car-sniper"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-6 py-2 rounded-md text-sm font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Car Sniper
                            </Link>
                            <Link
                                href="/trading-dashboard"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-6 py-2 rounded-md text-sm font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Trading Dashboard
                            </Link>
                            <Link
                                href="/lead-generator"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-6 py-2 rounded-md text-sm font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Lead Generator
                            </Link>
                            <Link
                                href="/pine-scripts"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-6 py-2 rounded-md text-sm font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pine Scripts
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content.nav.about}
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content.nav.contact}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
