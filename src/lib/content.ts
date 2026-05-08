// Albanian content for Apex Agency professional website
export const content = {
  // Navigation
  nav: {
    home: 'Ballina',
    portfolio: 'Portfolio',
    about: 'Rreth Nesh',
    contact: 'Kontakt'
  },

  // Homepage
  home: {
    hero: {
      title: 'Agjenci Profesionale e Zhvillimit Web & IT',
      subtitle: 'Zhvillojmë zgjidhje dixhitale për institucione, komuna dhe biznese në Kosovë. Teknologji moderne, dorëzim i shpejtë, cilësi e lartë.',
      cta: 'Shihni Projektet',
      ctaSecondary: 'Kërkoni Ofertë'
    },
    benefits: {
      title: 'Shërbime Profesionale IT për Sektorin Publik & Privat',
      subtitle: 'Ofrojmë zgjidhje të plota dixhitale — nga zhvillimi i faqeve web deri te sistemet e menaxhimit dhe infrastruktura dixhitale.',
      getFound: {
        title: 'Zhvillim Web & Aplikacionesh',
        description: 'Faqe institucionale, portale, sisteme online me teknologji moderne'
      },
      captureLeads: {
        title: 'Infrastrukturë & Hostim',
        description: 'Serverë të sigurt, SSL, mirëmbajtje dhe monitorim 24/7'
      },
      growRevenue: {
        title: 'Konsulencë & Strategji Dixhitale',
        description: 'Transformim dixhital, optimizim SEO dhe marketing online'
      }
    },
    stats: {
      clients: '200+',
      clientsLabel: 'Projekte të realizuara',
      revenue: '50+',
      revenueLabel: 'Klientë aktivë',
      customers: '99.9%',
      customersLabel: 'Uptime i garantuar'
    }
  },

  // Portfolio
  portfolio: {
    title: 'Projektet e Realizuara',
    projects: [
      {
        title: 'Platforma Web për Biznese Lokale',
        description: 'Zhvilluam mbi 200 faqe web profesionale për biznese në tërë Kosovën — restorante, hotele, klinika, agjenci dhe më shumë.',
        before: {
          title: 'SFIDA:',
          points: ['• Biznese pa prezencë online', '• Humbje e klientëve dixhitalë', '• Pamundësi e rezervimeve online']
        },
        after: {
          title: 'ZGJIDHJA:',
          points: ['• Faqe profesionale responsive', '• Integrim me Google Maps & SEO', '• Sisteme kontakti dhe rezervimesh']
        },
        result: 'REZULTAT: 200+ faqe të lansuara, mesatarisht +35% klientë të rinj',
        url: 'https://webpro-demos-kosovo.vercel.app'
      },
      {
        title: 'Platformë SaaS Faturimi',
        description: 'Sistem i plotë faturimi online për biznese në Kosovë — me raporte, menaxhim klientësh dhe integrim fiskal.',
        before: {
          title: 'SFIDA:',
          points: ['• Faturim manual me gabime', '• Humbje kohe administrative', '• Pa raporte financiare']
        },
        after: {
          title: 'ZGJIDHJA:',
          points: ['• Platformë cloud me dashboard', '• Fatura automatike PDF', '• Raporte dhe analitikë në kohë reale']
        },
        result: 'REZULTAT: Kursim 80% i kohës administrative për klientët',
        url: 'https://kosovo-invoicing-saas.vercel.app'
      },
      {
        title: 'Platformë E-Commerce Multi-Tenant',
        description: 'Arkitekturë moderne e-commerce që mundëson menaxhimin e shumë dyqaneve nga një panel i vetëm.',
        before: {
          title: 'SFIDA:',
          points: ['• Nevoja për shumë dyqane online', '• Menaxhim i centralizuar', '• Shkallëzim i shpejtë']
        },
        after: {
          title: 'ZGJIDHJA:',
          points: ['• Arkitekturë multi-tenant', '• Panel administrativ i unifikuar', '• Pagesa online të integruara']
        },
        result: 'REZULTAT: Platformë production-ready për tregun kosovar',
        url: 'https://ecommerce-platforms-iota.vercel.app'
      }
    ]
  },

  // About
  about: {
    title: 'Rreth Apex Agency',
    description: 'Apex Agency është agjenci e specializuar në zhvillim web, dizajn dixhital dhe zgjidhje IT për sektorin publik dhe privat në Kosovë. E regjistruar në ARBK me aktivitete primare në programim kompjuterik (62.01), dizajn (74.10), publicitet (73.11) dhe hostim (63.11).',
    mission: 'Misioni ynë është dixhitalizimi i bizneseve dhe institucioneve në Kosovë përmes teknologjive moderne, me fokus në cilësi, siguri dhe efikasitet.',
    values: [
      'Profesionalizëm dhe cilësi e lartë teknike',
      'Dorëzim brenda afatit të dakorduar',
      'Transparencë e plotë në çmime dhe procese',
      'Mbështetje teknike e vazhdueshme pas dorëzimit',
      'Përputhshmëri me standardet ndërkombëtare'
    ],
    cta: {
      title: 'Kërkoni ofertë për projektin tuaj',
      description: 'Kontaktoni për një konsultim profesional pa obligim. Oferta e personalizuar brenda 24 orëve.',
      button: 'Kërkoni Ofertë'
    }
  },

  // Contact
  contact: {
    title: 'Kontaktoni Apex Agency',
    description: 'Për oferta, bashkëpunime dhe informata teknike — jemi të gatshëm t\'ju ndihmojmë.',
    form: {
      name: 'Emri / Institucioni',
      email: 'Email',
      phone: 'Telefon',
      message: 'Përshkrim i projektit',
      submit: 'Dërgo Kërkesën'
    },
    info: {
      phone: '+383 49 333 019',
      email: 'beharkabashi22@gmail.com',
      location: 'Mitrovicë, Kosovë'
    }
  },

  // Pricing
  pricing: {
    title: 'Paketat e Shërbimeve',
    plans: [
      {
        name: 'BAZË',
        price: '€350',
        features: [
          'Faqe web responsive (1-3 faqe)',
          'Dizajn profesional modern',
          'Optimizim SEO bazik',
          'Certifikatë SSL e përfshirë',
          'Hostim 1 vit i përfshirë'
        ]
      },
      {
        name: 'PROFESIONAL',
        price: '€800',
        popular: 'MË I KËRKUARI',
        features: [
          'Faqe web e plotë (5-10 faqe)',
          'Sistem kontakti & rezervimesh',
          'Optimizim i plotë SEO',
          'Integrim Google Maps & Analytics',
          'Mirëmbajtje 3 muaj e përfshirë',
          'Trajnim për stafin'
        ]
      },
      {
        name: 'ENTERPRISE',
        price: '€2,000+',
        features: [
          'Portal institucional i plotë',
          'Sisteme të personalizuara',
          'Integrime me API të jashtme',
          'Dashboard administrativ',
          'Mirëmbajtje 12 muaj',
          'SLA me kohe reagimi të garantuar'
        ]
      }
    ]
  },

  // Testimonials
  testimonials: {
    title: 'Referenca nga Klientët',
    items: [
      {
        text: 'Apex Agency na realizoi faqen brenda javës. Profesionalizëm i lartë dhe komunikim i shkëlqyer gjatë tërë procesit.',
        author: 'Hotel Parliament — Prishtinë',
        stars: 5
      },
      {
        text: 'Zgjidhja dixhitale që na ofruan na kurseu kohë dhe solli klientë të rinj. E rekomandoj pa hezitim.',
        author: 'Kristal Optika — Prishtinë',
        stars: 5
      },
      {
        text: 'Ekip serioz që e kupton nevojën e biznesit. Faqja jonë tani duket profesionale dhe funksionon perfekt.',
        author: 'Gelato Cake House — Kosovë',
        stars: 5
      }
    ]
  },

  // FAQ
  faq: {
    title: 'Pyetjet e Shpeshta',
    items: [
      {
        question: 'Sa kohë zgjat realizimi i projektit?',
        answer: 'Projektet standarde realizohen në 5-10 ditë pune. Projektet më komplekse (portale, sisteme) — 2-4 javë.'
      },
      {
        question: 'A punoni me institucione publike?',
        answer: 'Po. Jemi të regjistruar në ARBK me kodin e aktivitetit 62.01 dhe mund të marrim pjesë në prokurime publike.'
      },
      {
        question: 'Çfarë teknologjish përdorni?',
        answer: 'Next.js, React, TypeScript, PostgreSQL, Node.js, Vercel, dhe teknologji të tjera moderne të industrisë.'
      },
      {
        question: 'A ofroni mirëmbajtje pas dorëzimit?',
        answer: 'Po. Çdo paketë përfshin periudhë mirëmbajtjeje. Gjithashtu ofrojmë kontrata mujore mirëmbajtjeje.'
      }
    ]
  }
};
