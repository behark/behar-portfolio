'use client';

import { projects } from '@/lib/projects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { FiTrendingUp } from 'react-icons/fi';
import { useState } from 'react';
import { ImageLoadingPlaceholder } from '@/components/LoadingSpinner';

export function PortfolioPageContent() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />

            <main id="main-content">
            <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 ${inView ? 'animate-fadeInUp' : ''}`}>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                            Portfolio
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Projekte të realizuara për klientë nga industria të ndryshme
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`project-card bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 dark:border-gray-700 ${inView ? 'animate-scaleIn' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden bg-gray-900">
                                    {/* Get fallback image based on project */}
                                    {(() => {
                                        const fallbackImages: Record<string, string> = {
                                            '1': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85',
                                            '2': 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=85',
                                            '3': 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85',
                                            '4': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85',
                                            '5': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
                                            '6': 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=85',
                                            '7': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
                                            '8': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85',
                                        };
                                        const imageSrc = project.image?.startsWith('/') 
                                            ? project.image 
                                            : (project.image || fallbackImages[project.id] || '');
                                        
                                        return imageSrc ? (
                                            <>
                                                {loadingImages[project.id] && <ImageLoadingPlaceholder />}
                                                <Image
                                                    src={imageSrc}
                                                    alt={`${project.title} - ${project.description}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    loading={index < 3 ? "eager" : "lazy"}
                                                    onLoad={() => {
                                                        setLoadingImages(prev => ({ ...prev, [project.id]: false }));
                                                    }}
                                                    onLoadStart={() => {
                                                        setLoadingImages(prev => ({ ...prev, [project.id]: true }));
                                                    }}
                                                    onError={(e) => {
                                                        setLoadingImages(prev => ({ ...prev, [project.id]: false }));
                                                        // Fallback to Unsplash if local image fails
                                                        const target = e.target as HTMLImageElement;
                                                        if (fallbackImages[project.id] && !target.src.includes('unsplash.com')) {
                                                            target.src = fallbackImages[project.id];
                                                        }
                                                    }}
                                                />
                                                {/* Gradient Overlay */}
                                                <div 
                                                    className="absolute inset-0"
                                                    style={{
                                                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.4))',
                                                    }}
                                                />
                                            </>
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                                                <div className="text-white text-center">
                                                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="text-sm font-medium">{project.category}</p>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                    {/* Hover Overlay */}
                                    <div className="project-overlay">
                                        <div className="text-white">
                                            <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                                            <p className="text-sm opacity-90">{project.language}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {project.language}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {project.description}
                                    </p>

                                    {project.results && (
                                        <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-lg mb-4 text-sm font-medium flex items-center">
                                            <FiTrendingUp className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                                            <span>{project.results}</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-3">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 btn-primary text-center hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2"
                                        >
                                            Shiko Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`text-center mt-16 ${inView ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.8s' }}>
                        <Link
                            href="/contact"
                            className="inline-block btn-primary text-lg px-8 py-4"
                        >
                            Filloni Projektin Tuaj
                        </Link>
                    </div>
                </div>
            </section>
            </main>

            <Footer />
        </div>
    );
}
