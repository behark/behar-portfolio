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
        title: 'Ecommerce Platforms',
        description: 'Platformë multi-tenant e-commerce me arkitekturë moderne për menaxhim dyqanesh, katalogësh dhe porosive.',
        url: 'https://ecommerce-platforms-iota.vercel.app',
        image: '/images/portfolio/ecommerce-platforms.jpg',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
        category: 'SaaS & Ecommerce',
        language: 'English',
        results: 'Arkitekturë multi-tenant production-ready'
    },
    {
        id: '2',
        title: 'Kosovo Invoicing SaaS',
        description: 'SaaS invoicing full-stack i ndërtuar me Next.js, PostgreSQL dhe TypeScript për biznese në Kosovë.',
        url: 'https://kosovo-invoicing-saas.vercel.app',
        image: '/images/portfolio/kosovo-invoicing-saas.jpg',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'SaaS Architecture'],
        category: 'Fintech & SaaS',
        language: 'English',
        results: 'Platformë invoicing e gatshme për zgjerim'
    },
    {
        id: '3',
        title: 'VOIP Call Center',
        description: 'Platformë call center me VOIP për menaxhim thirrjesh, agjentësh dhe monitorim të performancës në kohë reale.',
        url: 'https://voip-call-center.vercel.app',
        image: '/images/portfolio/voip-call-center.jpg',
        technologies: ['Next.js', 'Node.js', 'WebRTC/VOIP', 'Realtime Monitoring'],
        category: 'Communications',
        language: 'English',
        results: 'Menaxhim i centralizuar për operacionet e thirrjeve'
    },
    {
        id: '4',
        title: 'POS System',
        description: 'Sistem POS për menaxhim shitjesh, transaksionesh dhe operacione ditore për biznese lokale.',
        url: 'https://github.com/behark/pos-system',
        image: '/images/portfolio/pos-system.jpg',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Dashboard UI'],
        category: 'Retail & POS',
        language: 'English',
        results: 'Workflow më i shpejtë për operacionet e kasës'
    },
    {
        id: '5',
        title: 'IPTV Platform',
        description: 'Platformë e avancuar IPTV me menaxhim kanalesh, playlist utilities dhe eksport të dhënash në shkallë të madhe.',
        url: 'https://iptv-platform-sable.vercel.app',
        image: '/images/portfolio/iptv-platform.jpg',
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Automation Scripts'],
        category: 'Media & Streaming',
        language: 'English',
        results: '10,900+ kanale të menaxhuara'
    },
    {
        id: '6',
        title: 'Dating App',
        description: 'Aplikacion social me gamification, monitorim dhe infrastrukturë të optimizuar për performancë production.',
        url: 'https://dating-app-seven-peach.vercel.app',
        image: '/images/portfolio/dating-app.jpg',
        technologies: ['JavaScript', 'TypeScript', 'Microservices', 'DevOps'],
        category: 'Social Platform',
        language: 'English',
        results: 'Deployments aktive dhe iterim i shpejtë i feature-ve'
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
