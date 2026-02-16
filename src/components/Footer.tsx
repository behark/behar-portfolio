import { content } from '@/lib/content';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Behar Kabashi</h3>
                        <p className="text-gray-400">
                            Web design profesional për bizneset tuaja
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Shpejtë</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">{content.nav.home}</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">{content.nav.portfolio}</Link></li>
                            <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors">Mjete</Link></li>
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
                        <div className="flex space-x-4">
                            <a
                                href={`https://wa.me/38349333019?text=Përshëndetje! Pashë portfolion tuaj dhe jam i interesuar për një website.`}
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
                    <p>&copy; {new Date().getFullYear()} Behar Kabashi - Web Design Profesional. Të gjitha të drejtat e rezervuara.</p>
                </div>
            </div>
        </footer>
    );
}
