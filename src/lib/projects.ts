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
        title: 'Arbana Beauty',
        description: 'Website profesional për salon bukurie me sistem rezervimesh online dhe galeri punimesh.',
        url: 'https://arbanabeauty.vercel.app/',
        // To use local image: add arbanabeauty.jpg to public/images/portfolio/
        // Currently using optimized Unsplash image (temporary)
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
        category: 'Beauty & Wellness',
        language: 'Shqip',
        results: 'Rritje 30% e rezervimeve online'
    },
    {
        id: '2',
        title: 'Fußballschule',
        description: 'Website për shkollë futbollistike në Gjermani me program trajnimi dhe regjistrim online.',
        url: 'https://fussballschule.vercel.app/',
        image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=85',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
        category: 'Sports & Education',
        language: 'Gjermanisht',
        results: '50+ regjistrime të reja në muaj'
    },
    {
        id: '3',
        title: 'Taxi Luigi',
        description: 'Website për shërbim taxi në Austri me sistem porosish online dhe gjurmim GPS.',
        url: 'https://www.taxiluigi.at/de',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85',
        technologies: ['React', 'Node.js', 'MongoDB', 'GPS Integration'],
        category: 'Transportation',
        language: 'Gjermanisht',
        results: '25% rritje e porosive online'
    },
    {
        id: '4',
        title: 'Kroi Auto Center',
        description: 'Website për qendër servis veturash në Finlandë me sistem rezervimesh dhe galeri.',
        url: 'https://kroi-auto-center.vercel.app/',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
        category: 'Automotive',
        language: 'Finlandisht',
        results: '20+ rezervime në javë'
    },
    {
        id: '5',
        title: 'Kiiltoloisto',
        description: 'Website për kompani detailing dhe pastrim profesional veturash në Finlandë.',
        url: 'https://kiiltoloisto.fi/',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
        technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
        category: 'Automotive',
        language: 'Finlandisht',
        results: '40% rritje e kërkesave'
    },
    {
        id: '6',
        title: 'Ani Auto Salon',
        description: 'Website për salon makinash në Kosovë me katalog automjetesh dhe kontakt.',
        url: 'https://www.aniautosallon.com/',
        image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=85',
        technologies: ['React', 'Node.js', 'MongoDB', 'Image Gallery'],
        category: 'Automotive',
        language: 'Shqip',
        results: '15+ pyetje në ditë'
    },
    {
        id: '7',
        title: 'Digiscreen Kosovo',
        description: 'Website për kompani dixhitale me shërbime marketingu dhe portofol punimesh.',
        url: 'https://digiscreen-kosovo.vercel.app/',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
        category: 'Digital Marketing',
        language: 'Shqip',
        results: '25+ klientë të rinj'
    },
    {
        id: '8',
        title: 'Lebendigkeitsberatung',
        description: 'Website për konsulencë jetësore në Gjermani me blog dhe program konsulencash.',
        url: 'https://lebendigkeitsberatung.vercel.app/',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
        category: 'Health & Wellness',
        language: 'Gjermanisht',
        results: '100+ vizitorë mujorë'
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
