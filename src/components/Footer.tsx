import { content } from '@/lib/content';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Apex Agency</h3>
                        <p className="text-gray-400">
                            Agjenci dixhitale në Kosovë — faqe web, marketing dixhital & menaxhim i rrjeteve sociale.
                        </p>
                        <p className="text-gray-500 text-xs mt-2">Biznes i regjistruar në ARBK 🇽🇰</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Shpejtë</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">{content.nav.home}</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">{content.nav.portfolio}</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">{content.nav.about}</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">{content.nav.contact}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <FiPhone className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                                <a
                                    href={`tel:${content.contact.info.phone.replace(/\s+/g, '')}`}
                                    className="hover:text-white transition-colors"
                                    aria-label={`Call ${content.contact.info.phone}`}
                                >
                                    {content.contact.info.phone}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                                <a
                                    href={`mailto:${content.contact.info.email}`}
                                    className="hover:text-white transition-colors"
                                    aria-label={`Email ${content.contact.info.email}`}
                                >
                                    {content.contact.info.email}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FiMapPin className="w-5 h-5 mr-3 text-gray-400" aria-hidden="true" />
                                <span>{content.contact.info.location}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Na Ndiqni</h4>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="https://www.facebook.com/profile.php?id=61556600279854"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/apexagency.xk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Instagram
                            </a>
                            <a
                                href={`https://wa.me/38349333019?text=Përshëndetje! Jam i interesuar për shërbimet tuaja.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Apex Agency. Të gjitha të drejtat e rezervuara.</p>
                    <div className="flex justify-center gap-6 mt-3 text-sm">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privatësia</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Kushtet</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
