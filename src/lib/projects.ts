export interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    image?: string;
    technologies: string[];
    category: string;
    language: string;
    results?: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Platforma Web për 200+ Biznese',
        description: 'Sistem i automatizuar për gjenerimin dhe menaxhimin e faqeve web profesionale për biznese lokale në Kosovë.',
        url: 'https://webpro-demos-kosovo.vercel.app',
        image: '/images/portfolio/ecommerce-platforms.jpg',
        technologies: ['Next.js', 'TypeScript', 'Vercel', 'Automated Deployment'],
        category: 'Web Platform',
        language: 'Albanian',
        results: '200+ faqe të lansuara për biznese në Kosovë'
    },
    {
        id: '2',
        title: 'Platformë SaaS Faturimi',
        description: 'Sistem i plotë faturimi online për biznese — me raporte financiare, menaxhim klientësh dhe eksport PDF.',
        url: 'https://kosovo-invoicing-saas.vercel.app',
        image: '/images/portfolio/kosovo-invoicing-saas.jpg',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'SaaS Architecture'],
        category: 'Fintech & SaaS',
        language: 'Albanian',
        results: 'Platformë invoicing production-ready'
    },
    {
        id: '3',
        title: 'Platformë E-Commerce Multi-Tenant',
        description: 'Arkitekturë moderne e-commerce për menaxhim të shumë dyqaneve online nga një panel i vetëm administrativ.',
        url: 'https://ecommerce-platforms-iota.vercel.app',
        image: '/images/portfolio/ecommerce-platforms.jpg',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
        category: 'E-Commerce',
        language: 'English',
        results: 'Arkitekturë multi-tenant e shkallëzueshme'
    },
    {
        id: '4',
        title: 'Sistem Menaxhimi POS',
        description: 'Sistem Point-of-Sale për menaxhim shitjesh, inventarit dhe raporteve ditore për biznese lokale.',
        url: 'https://github.com/behark/pos-system',
        image: '/images/portfolio/pos-system.jpg',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Dashboard UI'],
        category: 'Retail & POS',
        language: 'Albanian',
        results: 'Workflow i automatizuar për operacione ditore'
    },
    {
        id: '5',
        title: 'Platformë VOIP Call Center',
        description: 'Platformë komunikimi me VOIP për menaxhim thirrjesh, agjentësh dhe monitorim të performancës në kohë reale.',
        url: 'https://voip-call-center.vercel.app',
        image: '/images/portfolio/voip-call-center.jpg',
        technologies: ['Next.js', 'Node.js', 'WebRTC/VOIP', 'Realtime'],
        category: 'Communications',
        language: 'English',
        results: 'Menaxhim i centralizuar i komunikimeve'
    },
    {
        id: '6',
        title: 'Platformë Streaming Media',
        description: 'Sistem për menaxhim përmbajtjesh multimediale me katalogizim, streaming dhe eksport të dhënash në shkallë të madhe.',
        url: 'https://iptv-platform-sable.vercel.app',
        image: '/images/portfolio/iptv-platform.jpg',
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Automation'],
        category: 'Media & Streaming',
        language: 'English',
        results: '10,900+ njësi përmbajtjeje të menaxhuara'
    }
];

export const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
};

export const getProjectsByLanguage = (language: string) => {
    return projects.filter(project => project.language === language);
};

export const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
};
