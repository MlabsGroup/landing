export const LANGS = ['es', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export const isValidLang = (value: string): value is Lang => {
  return LANGS.includes(value as Lang);
};

type LocalizedCopy = {
  siteTitle: string;
  siteDescription: string;
  eyebrow: string;
  navVision: string;
  navHow: string;
  navOpportunities: string;
  navCredibility: string;
  navContact: string;
  headerCta: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryButton: string;
  heroSecondaryButton: string;
  heroVisualAlt: string;
  visionTitle: string;
  visionText: string;
  howTitle: string;
  howItems: string[];
  showcaseKicker: string;
  showcaseTitle: string;
  showcaseText: string;
  showcasePoints: string[];
  showcaseImageAlt: string;
  buildersTitle: string;
  buildersText: string;
  partnersTitle: string;
  partnersText: string;
  investorsTitle: string;
  investorsText: string;
  credibilityTitle: string;
  credibilityItems: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  holdingTitle: string;
  holdingIntro: string;
  acquisitionTitle: string;
  acquisitionText: string;
  acquisitionButton: string;
  juniorTitle: string;
  juniorText: string;
  juniorButton: string;
  languageLabel: string;
};

export const copy: Record<Lang, LocalizedCopy> = {
  es: {
    siteTitle: 'MLABS | Holding de SaaS B2B',
    siteDescription:
      'MLABS construye, escala y adquiere soluciones B2B con infraestructura global y distribución de alto rendimiento.',
    eyebrow: 'Holding de SaaS B2B',
    navVision: 'Visión',
    navHow: 'Plataforma',
    navOpportunities: 'Oportunidades',
    navCredibility: 'Credibilidad',
    navContact: 'Contacto',
    headerCta: 'Hablar con MLABS',
    heroTitle: 'MLABS: Soluciones específicas e innovadoras para empresas',
    heroSubtitle:
      'Operamos el futuro del software. Construimos, escalamos y adquirimos soluciones B2B de alto impacto.',
    heroPrimaryButton: 'Hablar con MLABS',
    heroSecondaryButton: 'Ver plataforma',
    heroVisualAlt: 'Panel visual premium del ecosistema MLABS',
    visionTitle: 'Visión',
    visionText:
      'El próximo liderazgo del software no se define solo por producto. Se define por distribución, ejecución global y velocidad estratégica.',
    howTitle: 'Cómo funciona',
    howItems: [
      'Seleccionamos mercados donde el B2B tiene fricción real y urgencia de cambio.',
      'Activamos operadores locales, tecnología centralizada y expansión con precisión.',
      'Escalamos proyectos en paralelo desde una arquitectura de plataforma, no desde estructuras aisladas.',
    ],
    showcaseKicker: 'Growth Console',
    showcaseTitle: 'Distribucion y producto en un solo sistema operativo',
    showcaseText:
      'Diseñamos motores de crecimiento que integran desarrollo, datos de mercado y ejecución comercial para escalar con precisión.',
    showcasePoints: [
      'Playbooks de expansion validados por mercado.',
      'Ejecución sincronizada entre talento local y equipo central.',
      'Métricas de crecimiento y posicionamiento en tiempo real.',
    ],
    showcaseImageAlt: 'Panel de expansión internacional de MLABS',
    buildersTitle: 'Para builders',
    buildersText:
      'Un entorno para lanzar más rápido, con stack probado, talento especializado y soporte para internacionalizar',
    partnersTitle: 'Para partners',
    partnersText:
      'Convertimos redes y acceso de mercado en crecimiento tangible con ejecución conjunta y foco comercial',
    investorsTitle: 'Para inversores',
    investorsText:
      'Una tesis orientada a activos SaaS escalables, eficiencia operativa y expansión sostenida en varios mercados.',
    credibilityTitle: 'Señales de credibilidad',
    credibilityItems: [
      'Foco total en tecnología B2B y distribución internacional.',
      'Modelo multiplataforma para construir y escalar en simultáneo.',
      'Estándares operativos orientados a velocidad, calidad y retorno.',
    ],
    ctaTitle: 'Nos asociamos con agencias de venta y partners para distribuir SaaS B2B de alto impacto. ',
    ctaText:
      'Te ofrecemos el producto ideal, cliente objetivo y la suervisión en la ejecución para expandir tu alcance y crecimiento y generar juntos ingresos.',
    ctaButton: 'Quiero colaborar como partner comercial',
    holdingTitle: 'Oportunidades activas',
    holdingIntro:
      'Dos puertas de entrada para founders, operadores y talento técnico con ambición de escala.',
    acquisitionTitle: 'Adquisición de Software',
    acquisitionText:
      'Para dueños de software B2B que quieren vender, fusionar o escalar con estructura, capital y expansión internacional.',
    acquisitionButton: 'Quiero explorar esta vía',
    juniorTitle: 'Junior Partners',
    juniorText:
      'Para developers con ideas ganadoras que buscan un socio capitalista y técnico para construir una compañía real.',
    juniorButton: 'Quiero presentar mi idea',
    languageLabel: 'Idioma',
  },
  en: {
    siteTitle: 'MLABS | B2B SaaS Holding',
    siteDescription:
      'MLABS builds, scales, and acquires B2B solutions through global infrastructure and high-performance distribution.',
    eyebrow: 'B2B SaaS Holding',
    navVision: 'Vision',
    navHow: 'Platform',
    navOpportunities: 'Opportunities',
    navCredibility: 'Credibility',
    navContact: 'Contact',
    headerCta: 'Talk to MLABS',
    heroTitle: 'MLABS: Specific and innovative solutions for companies',
    heroSubtitle:
      'We operate the future of software. We build, scale, and acquire high-impact B2B solutions.',
    heroPrimaryButton: 'Talk to MLABS',
    heroSecondaryButton: 'Explore platform',
    heroVisualAlt: 'Premium visual console of the MLABS ecosystem',
    visionTitle: 'Vision',
    visionText:
      'Software leadership is no longer defined by product alone. It is defined by distribution, global execution, and strategic speed.',
    howTitle: 'How it works',
    howItems: [
      'We target markets where B2B friction is high and change is urgent.',
      'We activate local operators, centralized product infrastructure, and precise expansion.',
      'We scale multiple ventures in parallel through a platform architecture, not isolated structures.',
    ],
    showcaseKicker: 'Growth Console',
    showcaseTitle: 'Distribution and product in one operating system',
    showcaseText:
      'We design growth engines that combine product development, market data, and commercial execution to scale with precision.',
    showcasePoints: [
      'Expansion playbooks validated per market.',
      'Synchronized execution between local operators and the core team.',
      'Real-time metrics for growth and strategic positioning.',
    ],
    showcaseImageAlt: 'International expansion control panel by MLABS',
    buildersTitle: 'For builders',
    buildersText:
      'Launch faster with a proven stack, specialist talent, and a platform built for international growth.',
    partnersTitle: 'For partners',
    partnersText:
      'Turn distribution access and industry networks into measurable growth through aligned execution.',
    investorsTitle: 'For investors',
    investorsText:
      'A thesis focused on scalable SaaS assets, operational efficiency, and durable expansion across markets.',
    credibilityTitle: 'Credibility signals',
    credibilityItems: [
      'Full focus on B2B technology and international distribution.',
      'Multi-venture platform model to build and scale in parallel.',
      'Operational standards designed for speed, quality, and return.',
    ],
    ctaTitle: 'We partner with sales agencies and resellers to distribute high-impact B2B SaaS.',
    ctaText:
      'We offer you the ideal product, target customer, and execution oversight to expand your reach and growth, and generate revenue together.',
    ctaButton: 'Partner with MLABS commercially',
    holdingTitle: 'Active opportunities',
    holdingIntro:
      'Two entry points for founders, operators, and technical talent with scale ambition.',
    acquisitionTitle: 'Software Acquisition',
    acquisitionText:
      'For B2B software owners ready to sell, merge, or scale with stronger structure, capital, and international reach.',
    acquisitionButton: 'I want to explore this path',
    juniorTitle: 'Junior Partners',
    juniorText:
      'For developers with winning ideas looking for a technical and capital partner to build a real company.',
    juniorButton: 'I want to present my idea',
    languageLabel: 'Language',
  },
};
