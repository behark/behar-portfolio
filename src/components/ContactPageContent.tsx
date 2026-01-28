'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { content } from '@/lib/content';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { showToast } from '@/components/Toast';
import { ButtonSpinner } from '@/components/LoadingSpinner';

export function ContactPageContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Validation functions
    const validateEmail = (email: string): string => {
        if (!email) return 'Email është i detyrueshëm';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Email jo valid';
        return '';
    };

    const validatePhone = (phone: string): string => {
        if (!phone) return ''; // Phone is optional
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(phone)) return 'Numri i telefonit jo valid';
        if (phone.replace(/\D/g, '').length < 8) return 'Numri i telefonit shumë i shkurtër';
        return '';
    };

    const validateName = (name: string): string => {
        if (!name.trim()) return 'Emri është i detyrueshëm';
        if (name.trim().length < 2) return 'Emri duhet të jetë të paktën 2 karaktere';
        return '';
    };

    const validateMessage = (message: string): string => {
        if (!message.trim()) return 'Mesazhi është i detyrueshëm';
        if (message.trim().length < 10) return 'Mesazhi duhet të jetë të paktën 10 karaktere';
        if (message.length > 1000) return 'Mesazhi nuk mund të jetë më shumë se 1000 karaktere';
        return '';
    };

    const validateField = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'name':
                error = validateName(value);
                break;
            case 'email':
                error = validateEmail(value);
                break;
            case 'phone':
                error = validatePhone(value);
                break;
            case 'message':
                error = validateMessage(value);
                break;
        }
        return error;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Real-time validation if field has been touched
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors({
                ...errors,
                [name]: error
            });
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });

        const error = validateField(name, value);
        setErrors({
            ...errors,
            [name]: error
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors: Record<string, string> = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) {
                newErrors[key] = error;
            }
        });

        setErrors(newErrors);
        setTouched({
            name: true,
            email: true,
            phone: true,
            message: true
        });

        // If there are errors, don't submit
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        setError(false);

        try {
            // Using Web3Forms - free email service
            // Sign up at https://web3forms.com to get your access key
            // Add your key to .env.local as NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

            // Check if API key is configured
            if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
                setError(true);
                console.error('Web3Forms API key not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local');
                return;
            }

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `Mesazh i ri nga ${formData.name}`,
                    from_name: 'Behar Kabashi Portfolio',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
                setErrors({});
                setTouched({});
                showToast('Mesazhi juaj u dërgua me sukses! Do t\'ju kontaktojmë së shpejti.', 'success');
            } else {
                setError(true);
                showToast('Ka ndodhur një gabim. Ju lutemi provoni përsëri.', 'error');
                console.error('Form submission failed:', result.message || 'Unknown error');
            }
        } catch (err) {
            console.error('Form submission error:', err);
            setError(true);
            showToast('Lidhja me serverin dështoi. Ju lutemi kontrolloni lidhjen tuaj dhe provoni përsëri.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            <Navbar />

            <main id="main-content">
            <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {content.contact.title}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {content.contact.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Dërgoni Mesazh
                            </h2>

                            {submitted ? (
                                <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-6 rounded-lg text-center border border-green-200 dark:border-green-700">
                                    <div className="flex justify-center mb-4">
                                        <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Faleminderit!</h3>
                                    <p className="mb-4">Mesazhi juaj u dërgua me sukses. Do t&apos;ju kontaktojmë së shpejti.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-sm text-green-700 dark:text-green-400 hover:underline"
                                    >
                                        Dërgo mesazh tjetër
                                    </button>
                                </div>
                            ) : (
                                <>
                                    {error && (
                                        <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-700">
                                            <p className="font-medium mb-2">Ka ndodhur një gabim. Ju lutemi provoni përsëri ose na kontaktoni direkt.</p>
                                            <p className="text-sm opacity-90">
                                                Nëse problemi vazhdon, ju lutemi na kontaktoni në{' '}
                                                <a 
                                                    href={`mailto:${content.contact.info.email}`}
                                                    className="underline hover:no-underline"
                                                >
                                                    {content.contact.info.email}
                                                </a>
                                                {' '}ose{' '}
                                                <a 
                                                    href={`tel:${content.contact.info.phone.replace(/\s+/g, '')}`}
                                                    className="underline hover:no-underline"
                                                >
                                                    {content.contact.info.phone}
                                                </a>
                                            </p>
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {content.contact.form.name} <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                                                    errors.name && touched.name
                                                        ? 'border-red-500 dark:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                }`}
                                            />
                                            {errors.name && touched.name && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {content.contact.form.email} <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                                                    errors.email && touched.email
                                                        ? 'border-red-500 dark:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                }`}
                                            />
                                            {errors.email && touched.email && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                {content.contact.form.phone} <span className="text-gray-400 text-xs">(Opsionale)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="+383 49 123 456"
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
                                                    errors.phone && touched.phone
                                                        ? 'border-red-500 dark:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                }`}
                                            />
                                            {errors.phone && touched.phone && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                                            )}
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {content.contact.form.message} <span className="text-red-500">*</span>
                                                </label>
                                                <span className={`text-xs ${
                                                    formData.message.length > 1000 
                                                        ? 'text-red-500' 
                                                        : formData.message.length > 800 
                                                        ? 'text-yellow-500' 
                                                        : 'text-gray-500 dark:text-gray-400'
                                                }`}>
                                                    {formData.message.length} / 1000
                                                </span>
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                                rows={5}
                                                maxLength={1000}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none ${
                                                    errors.message && touched.message
                                                        ? 'border-red-500 dark:border-red-500'
                                                        : 'border-gray-300 dark:border-gray-600'
                                                }`}
                                            />
                                            {errors.message && touched.message && (
                                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting || Object.keys(errors).length > 0}
                                            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 active:scale-95 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 flex items-center justify-center relative overflow-hidden"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <ButtonSpinner />
                                                    Duke dërguar...
                                                </>
                                            ) : content.contact.form.submit}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Informacione Kontakti
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <FiPhone className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Telefon</p>
                                            <a
                                                href={`tel:${content.contact.info.phone.replace(/\s+/g, '')}`}
                                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                {content.contact.info.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <FiMail className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                            <a
                                                href={`mailto:${content.contact.info.email}`}
                                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                {content.contact.info.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <FiMapPin className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Lokacion</p>
                                            <p className="text-gray-600 dark:text-gray-300">{content.contact.info.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-600 text-white p-8 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                                <p className="mb-4">Për komunikim të menjëhershëm, na kontaktoni në WhatsApp:</p>
                                <a
                                    href={`https://wa.me/38349333019?text=Përshëndetje! Pashë portfolion tuaj dhe jam i interesuar për një website.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    Shkruani në WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>

            <Footer />
        </div>
    );
}
