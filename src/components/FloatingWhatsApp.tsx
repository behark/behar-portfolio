'use client';

export function FloatingWhatsApp() {
    return (
        <a
            href={`https://wa.me/38349333019?text=Përshëndetje! Pashë portfolion tuaj dhe jam i interesuar për një website.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Shkruani në WhatsApp"
            className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-background md:bottom-6 md:right-6"
        >
            <span className="text-lg">WhatsApp</span>
        </a>
    );
}
