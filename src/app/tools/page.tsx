import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const toolPages = [
  {
    title: 'Car Sniper',
    description: 'Monitorim automatik i listimeve dhe njoftime për automjete të reja.',
    href: '/car-sniper',
  },
  {
    title: 'Trading Dashboard',
    description: 'Panel analizash dhe monitorim tregu për trader-at aktivë.',
    href: '/trading-dashboard',
  },
  {
    title: 'Lead Generator',
    description: 'Sistem për mbledhje lead-esh dhe ndjekje të pipeline-it.',
    href: '/lead-generator',
  },
  {
    title: 'Pine Scripts',
    description: 'Koleksion scripts dhe indikatorësh për TradingView.',
    href: '/pine-scripts',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <main id="main-content">
        <section className="section-base bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="heading-lg text-gray-900 dark:text-white mb-4">Mjete & Produkte</h1>
              <p className="body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Të gjitha mjetet e veçanta në një faqe të vetme, me strukturë të thjeshtë.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {toolPages.map((tool) => (
                <article
                  key={tool.href}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm card-hover"
                >
                  <h2 className="heading-md text-gray-900 dark:text-white mb-2">{tool.title}</h2>
                  <p className="body-base text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                  <Link href={tool.href} className="btn-secondary">
                    Shiko Faqen
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
