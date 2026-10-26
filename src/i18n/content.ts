export const LANGS = ['es', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export const isValidLang = (value: string): value is Lang => {
  return LANGS.includes(value as Lang);
};

// Datos legales de la empresa. Deben coincidir exactamente con los registrados
// en Meta Business y 360dialog para la verificación del negocio.
export const company = {
  legalName: 'MLABS GROUP JGZ SL',
  brand: 'MLABS',
  phone: '+34 602723828',
  phoneHref: 'tel:+34602723828',
  email: 'tech@mlabsgroup.com',
  street: 'Calle Villar y Macias 5, 1B',
  postalCode: '37002',
  city: 'Salamanca',
  country: 'España',
  countryEn: 'Spain',
  countryCode: 'ES',
  siteUrl: 'https://mlabsgroup.com',
};

export type ContactTab = 'investor' | 'founder' | 'sales' | 'acquisition';

type Item = { title: string; body: string };

type Venture = {
  name: string;
  category?: string;
  status: string;
  group: 'active' | 'lab';
  markets?: string;
  body: string;
  proof?: string;
};

type TabCopy = {
  label: string;
  title: string;
  lead: string;
  orgLabel: string;
  msgLabel: string;
  cta: string;
};

type LocalizedCopy = {
  siteTitle: string;
  siteDescription: string;
  languageLabel: string;
  nav: { vision: string; about: string; portfolio: string; contact: string; main: string };
  headerCta: string;
  eyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroText: string;
  heroPanelTitle: string;
  heroPanelLink: string;
  heroRows: { name: string; what: string; markets?: string }[];
  doors: { who: string; verb: string; body: string; cta: string; tab: ContactTab }[];
  stats: { value: string; label: string }[];
  visionKicker: string;
  visionTitle: string;
  visionText: string;
  howTitle: [string, string];
  howText: string;
  steps: { n: string; title: string; body: string; gate: string }[];
  coreTitle: string;
  coreText: string;
  core: Item[];
  aboutKicker: string;
  aboutTitle: string;
  aboutText: string[];
  team: { initials: string; name: string; role: string; body: string }[];
  values: Item[];
  portfolioKicker: string;
  portfolioTitle: [string, string];
  filterLabel: string;
  filters: { id: 'all' | 'active' | 'lab'; label: string }[];
  ventures: Venture[];
  acqText: string;
  acqLink: string;
  contactKicker: string;
  contactTitle: string;
  contactText: string;
  audiences: { who: string; title: string; body: string; points: string[]; cta: string; tab: ContactTab }[];
  formTitle: string;
  formText: string;
  formTabsLabel: string;
  tabs: Record<ContactTab, TabCopy>;
  fieldName: string;
  fieldEmail: string;
  fieldWeb: string;
  formSentTitle: string;
  formSentText: string;
  formReset: string;
  footerWork: string;
  footerContact: string;
  footerInvestors: string;
  footerFounders: string;
  footerSales: string;
  legalLink: string;
  privacyLink: string;
  phoneLabel: string;
  addressLabel: string;
  emailLabel: string;
  companyLabel: string;
  countryName: string;
};

export const copy: Record<Lang, LocalizedCopy> = {
  es: {
    siteTitle: 'MLABS Group · Venture builder de SaaS B2B',
    siteDescription:
      'MLABS convierte problemas reales de nichos concretos en compañías de software B2B. Validamos con clientes que pagan, construimos sobre una plataforma común y escalamos mercado a mercado.',
    languageLabel: 'Idioma',
    nav: { vision: 'Visión', about: 'Quiénes somos', portfolio: 'Portfolio', contact: 'Contacto', main: 'Principal' },
    headerCta: 'Hablar con MLABS',
    eyebrow: 'Venture builder de SaaS B2B · Europa y LATAM',
    heroTitle: 'Construimos compañías de software que ',
    heroTitleAccent: 'se venden.',
    heroText:
      'MLABS convierte problemas reales de nichos concretos en compañías de software B2B. Validamos con clientes que pagan, construimos sobre una plataforma común y escalamos cada venture mercado a mercado.',
    heroPanelTitle: 'Portfolio en marcha',
    heroPanelLink: 'Ver el portfolio',
    heroRows: [
      { name: 'FichajeSimple', what: 'Control de empleados', markets: 'ES MX PT SI' },
      { name: 'UNMI', what: 'Gestión inteligente de llamadas perdidas' },
      { name: 'GrowthShare', what: 'Partner OS', markets: 'ES IT PT MX' },
      { name: 'Eclia', what: 'App móvil para digitalizar el mundo cristiano' },
    ],
    doors: [
      { who: 'Para inversores', verb: 'Invierte', body: 'Ventures con clientes y producto, listas para acelerar sus ventas con capital.', cta: 'Solicitar el deck', tab: 'investor' },
      { who: 'Para emprendedores', verb: 'Construye', body: 'Trae una idea o un nicho. Ponemos equipo técnico, plataforma y estructura.', cta: 'Presentar mi proyecto', tab: 'founder' },
      { who: 'Para perfiles de ventas', verb: 'Vende', body: 'Lleva software B2B que ya funciona a tus clientes, con un acuerdo a tu medida.', cta: 'Hablar de ventas', tab: 'sales' },
    ],
    stats: [
      { value: '4', label: 'ventures activas en el portfolio' },
      { value: '6', label: 'mercados con producto localizado en Europa y LATAM' },
      { value: '29', label: 'clientes en México en las dos primeras semanas de salida al mercado' },
      { value: '7', label: 'developers en el equipo técnico central, compartido por todas las ventures' },
    ],
    visionKicker: '01 · Visión',
    visionTitle:
      'El software B2B ya no se gana solo con el producto. Se gana con la distribución, la velocidad y el foco en un nicho.',
    visionText:
      'Construir un SaaS es más barato que nunca; venderlo, no. Por eso en MLABS cada venture nace con un cliente que paga, un canal comercial con acceso al nicho y una plataforma técnica que ya funciona. Lo que funciona en un país se adapta a su idioma y su normativa, y se lanza en el siguiente.',
    howTitle: ['Cómo', 'construimos'],
    howText: 'Primero la venta, después el producto. Cada paso tiene un criterio claro para seguir o parar.',
    steps: [
      { n: '01', title: 'Detectar', body: 'Buscamos nichos donde el problema ya cuesta dinero hoy, con la necesidad validada en otro país y sin un líder local.', gate: 'Criterio: dolor medible en euros' },
      { n: '02', title: 'Prevender', body: 'Antes de escribir código, cerramos las primeras ventas con una oferta concreta y un socio con acceso al nicho.', gate: 'Criterio: pagos reales en 3 semanas' },
      { n: '03', title: 'Construir', body: 'El equipo central construye solo lo propio del nicho sobre MLabs Core. Lanzamiento en semanas, no en meses.', gate: 'Criterio: clientes usando el producto' },
      { n: '04', title: 'Escalar', body: 'Traducimos, adaptamos a la normativa local y replicamos el canal comercial en el siguiente mercado.', gate: 'Criterio: canal que vende sin nosotros' },
    ],
    coreTitle: 'Una plataforma. Muchas compañías.',
    coreText:
      'Cada venture arranca con lo que ya está resuelto. Nadie vuelve a construir pagos, CRM, WhatsApp o la estructura societaria: solo lo que hace único a su nicho.',
    core: [
      { title: 'Revenue OS', body: 'Ventas, facturación, CRM y comisiones centralizados para todas las ventures.' },
      { title: 'GrowthShare', body: 'Enlaces de pago por partner, trazabilidad multinivel y liquidaciones automáticas.' },
      { title: 'WhatsApp e IA', body: 'Infraestructura de Meta Tech Provider y agentes de IA de marca blanca.' },
      { title: 'Pagos', body: 'Suscripciones, enlaces de cobro y recuperación de impagos con Stripe.' },
      { title: 'Localización', body: 'Idioma, moneda y normativa de cada país resueltos desde el primer día.' },
      { title: 'Estructura', body: 'Holding en España y una sociedad por venture, con capital propio para cada proyecto.' },
    ],
    aboutKicker: '02 · Quiénes somos',
    aboutTitle: 'Builders, no espectadores.',
    aboutText: [
      'Somos un equipo de fundadores y developers que ya ha lanzado varios SaaS en producción en distintos países. No invertimos desde la barrera: escribimos el código, cerramos las primeras ventas y montamos la estructura junto a cada founder.',
      'Holding en España, operación entre Europa y LATAM, y una sociedad propia para cada venture.',
    ],
    team: [
      { initials: 'JG', name: 'Javier García-Zaballos', role: 'Fundador y CEO', body: 'Lidera la estrategia, la distribución y el capital del grupo. Emprendedor, habla cinco idiomas y coordina la expansión entre Europa y LATAM.' },
      { initials: '</>', name: 'Socios de tecnología', role: 'Arquitectura y producto', body: 'Arquitectura de MLabs Core, integraciones y despliegue de cada venture del portfolio en nuevos mercados.' },
      { initials: '7', name: 'Equipo técnico', role: '7 developers', body: 'Un equipo central compartido por todas las ventures, que construye y mantiene la plataforma común.' },
    ],
    values: [
      { title: 'Venta antes que código', body: 'Ninguna línea de producto se escribe sin un cliente dispuesto a pagar.' },
      { title: 'Un nicho, muchos países', body: 'Lo que funciona en un mercado se replica con un socio local en el siguiente.' },
      { title: 'Sistemas replicables', body: 'Stack técnico, comercial y legal reutilizable para cada nueva compañía.' },
      { title: 'Retorno medible', body: 'Construimos software que hace ganar o ahorrar dinero al cliente desde el primer mes.' },
    ],
    portfolioKicker: '03 · Portfolio',
    portfolioTitle: ['Lo que estamos', 'construyendo'],
    filterLabel: 'Filtrar portfolio',
    filters: [
      { id: 'all', label: 'Todo' },
      { id: 'active', label: 'Ventures activas' },
      { id: 'lab', label: 'En validación' },
    ],
    ventures: [
      { name: 'FichajeSimple', category: 'Control de empleados', status: 'Activa', group: 'active', markets: 'ES · MX · PT · SI', body: 'Registro de jornada y control de equipos para pequeñas empresas, con alta en menos de 5 minutos y panel gratuito para la gestoría del cliente. Marcas locales: RegistoPonto (PT) y urediure.si (SI).', proof: '29 clientes en México en dos semanas' },
      { name: 'UNMI', status: 'Activa', group: 'active', body: 'Gestión inteligente de llamadas perdidas.' },
      { name: 'GrowthShare', category: 'Partner OS', status: 'Activa', group: 'active', markets: 'ES · IT · PT · MX', body: 'Calcula, controla y liquida el dinero de una red comercial: comisiones multinivel, rappels, cobros y liquidaciones, liberando solo lo que ya se ha cobrado.', proof: 'Motor comercial de todas las ventures MLABS' },
      { name: 'Eclia', status: 'Activa', group: 'active', body: 'App móvil para digitalizar el mundo cristiano.' },
      { name: 'Control de rappels', category: 'Distribución mayorista', status: 'En validación', group: 'lab', markets: 'ES → IT · PT · MX', body: 'Lee los acuerdos con proveedores, calcula el rappel devengado y avisa al distribuidor de cuánto le falta para el siguiente tramo.', proof: 'Preventa abierta con distribuidores' },
      { name: 'Cobros sin fricción', category: 'Finanzas pyme', status: 'En validación', group: 'lab', markets: 'ES → MX · CO · IT', body: 'Recordatorios con enlace de pago y recuperación del IVA de facturas impagadas, sin perseguir al cliente a mano.', proof: 'Preventa abierta con despachos' },
    ],
    acqText: '¿Tienes un software B2B que quieres vender, fusionar o escalar?',
    acqLink: 'Hablemos de adquisición.',
    contactKicker: '04 · Contacto',
    contactTitle: 'Construye con nosotros.',
    contactText: 'Buscamos tres tipos de personas. Si eres una de ellas, queremos hablar contigo.',
    audiences: [
      { who: 'Inversores', title: 'Capital para acelerar ventas de productos ya validados.', body: 'Buscamos inversión y financiación para escalar la distribución de ventures que ya tienen clientes, producto y mercado.', points: ['Equity en la sociedad de cada venture, no en una caja negra', 'Tu capital va a ventas y expansión, no a experimentos', 'Holding financiado con instrumentos no dilutivos', 'Deck, métricas y data room bajo petición'], cta: 'Solicitar el investor deck', tab: 'investor' },
      { who: 'Emprendedores', title: 'Nunca vas a construir solo.', body: 'Developers con una idea ganadora, operadores que conocen un nicho por dentro o dueños de un SaaS que quieren escalarlo.', points: ['Equipo técnico y plataforma desde el día uno', 'Sprint de validación de 3 semanas con clientes reales', 'Estructura legal y acceso a financiación', 'Participación real en tu propia compañía'], cta: 'Presentar mi proyecto', tab: 'founder' },
      { who: 'Ventas', title: 'Lleva nuestro software a tus clientes.', body: 'Líderes comerciales, agencias, closers y distribuidores con acceso a clientes B2B en Europa o LATAM.', points: ['Productos con clientes, soporte y cumplimiento normativo', 'Panel en tiempo real con cada venta y cada pago', 'Acuerdos a medida: comisión, revenue share o participación', 'Posibilidad de liderar la venta de una venture'], cta: 'Hablar de ventas', tab: 'sales' },
    ],
    formTitle: 'Cuéntanos quién eres.',
    formText: 'Respondemos en menos de 48 horas laborables. Si prefieres, escríbenos o llámanos directamente.',
    formTabsLabel: 'Tipo de contacto',
    tabs: {
      investor: { label: 'Inversor', title: 'Recibe el investor deck', lead: 'Te enviamos la tesis, las métricas de cada venture y las oportunidades abiertas de inversión y financiación.', orgLabel: 'Fondo, red o family office', msgLabel: '¿Qué tipo de operación, ticket y fase te interesan?', cta: 'Solicitar el deck' },
      founder: { label: 'Emprendedor', title: 'Presenta tu proyecto', lead: 'Ideas, nichos que conoces por dentro o un producto ya en marcha. Buscamos founders que quieran construir una compañía real.', orgLabel: 'Proyecto o startup', msgLabel: '¿Qué problema resuelves y quién paga hoy por ello?', cta: 'Enviar mi proyecto' },
      sales: { label: 'Ventas', title: 'Vende con MLABS', lead: 'Líderes comerciales, agencias, closers y distribuidores con acceso a clientes B2B. Diseñamos el acuerdo contigo.', orgLabel: 'Empresa o perfil', msgLabel: '¿A qué clientes vendes, en qué mercado y cómo te gustaría colaborar?', cta: 'Quiero hablar de ventas' },
      acquisition: { label: 'Vendo mi software', title: 'Adquisición de software', lead: 'Si tienes un SaaS B2B y quieres venderlo, fusionarlo o escalarlo con distribución internacional, hablemos.', orgLabel: 'Producto', msgLabel: 'Cuéntanos clientes, ingresos aproximados y por qué ahora', cta: 'Iniciar conversación' },
    },
    fieldName: 'Nombre',
    fieldEmail: 'Email',
    fieldWeb: 'LinkedIn o web',
    formSentTitle: 'Casi listo.',
    formSentText: 'Hemos abierto tu cliente de correo con el mensaje preparado. Envíalo y te escribimos en menos de 48 horas laborables.',
    formReset: 'Escribir otro mensaje',
    footerWork: 'Trabaja con nosotros',
    footerContact: 'Contacto',
    footerInvestors: 'Inversores',
    footerFounders: 'Emprendedores',
    footerSales: 'Ventas y partners',
    legalLink: 'Aviso legal',
    privacyLink: 'Privacidad',
    phoneLabel: 'Teléfono',
    addressLabel: 'Dirección',
    emailLabel: 'Correo',
    companyLabel: 'Razón social',
    countryName: 'España',
  },
  en: {
    siteTitle: 'MLABS Group · B2B SaaS venture builder',
    siteDescription:
      'MLABS turns real problems in specific niches into B2B software companies. We validate with paying customers, build on a shared platform and scale market by market.',
    languageLabel: 'Language',
    nav: { vision: 'Vision', about: 'About us', portfolio: 'Portfolio', contact: 'Contact', main: 'Main' },
    headerCta: 'Talk to MLABS',
    eyebrow: 'B2B SaaS venture builder · Europe and LATAM',
    heroTitle: 'We build software companies that ',
    heroTitleAccent: 'sell.',
    heroText:
      'MLABS turns real problems in specific niches into B2B software companies. We validate with paying customers, build on a shared platform and scale each venture market by market.',
    heroPanelTitle: 'Live portfolio',
    heroPanelLink: 'See the portfolio',
    heroRows: [
      { name: 'FichajeSimple', what: 'Workforce time tracking', markets: 'ES MX PT SI' },
      { name: 'UNMI', what: 'Smart missed-call management' },
      { name: 'GrowthShare', what: 'Partner OS', markets: 'ES IT PT MX' },
      { name: 'Eclia', what: 'Mobile app to digitize the Christian world' },
    ],
    doors: [
      { who: 'For investors', verb: 'Invest', body: 'Ventures with customers and product, ready to accelerate sales with capital.', cta: 'Request the deck', tab: 'investor' },
      { who: 'For founders', verb: 'Build', body: 'Bring an idea or a niche. We bring the tech team, platform and structure.', cta: 'Pitch my project', tab: 'founder' },
      { who: 'For sales profiles', verb: 'Sell', body: 'Bring proven B2B software to your customers, with a deal tailored to you.', cta: 'Talk about sales', tab: 'sales' },
    ],
    stats: [
      { value: '4', label: 'active ventures in the portfolio' },
      { value: '6', label: 'markets with localized product across Europe and LATAM' },
      { value: '29', label: 'customers in Mexico in the first two weeks after launch' },
      { value: '7', label: 'developers in the core tech team, shared by every venture' },
    ],
    visionKicker: '01 · Vision',
    visionTitle:
      'B2B software is no longer won on product alone. It is won on distribution, speed and focus on a niche.',
    visionText:
      'Building a SaaS is cheaper than ever; selling it is not. That is why every MLABS venture is born with a paying customer, a sales channel with access to the niche and a technical platform that already works. What works in one country is adapted to its language and regulations, and launched in the next.',
    howTitle: ['How we', 'build'],
    howText: 'Sales first, product second. Every step has a clear criterion to continue or stop.',
    steps: [
      { n: '01', title: 'Detect', body: 'We look for niches where the problem already costs money today, with the need validated in another country and no local leader.', gate: 'Criterion: pain measurable in euros' },
      { n: '02', title: 'Pre-sell', body: 'Before writing code, we close the first sales with a concrete offer and a partner with access to the niche.', gate: 'Criterion: real payments in 3 weeks' },
      { n: '03', title: 'Build', body: 'The core team builds only what is specific to the niche on top of MLabs Core. Launch in weeks, not months.', gate: 'Criterion: customers using the product' },
      { n: '04', title: 'Scale', body: 'We translate, adapt to local regulations and replicate the sales channel in the next market.', gate: 'Criterion: a channel that sells without us' },
    ],
    coreTitle: 'One platform. Many companies.',
    coreText:
      'Every venture starts with what is already solved. Nobody rebuilds payments, CRM, WhatsApp or the corporate structure: only what makes their niche unique.',
    core: [
      { title: 'Revenue OS', body: 'Sales, invoicing, CRM and commissions centralized for every venture.' },
      { title: 'GrowthShare', body: 'Per-partner payment links, multi-level tracking and automated payouts.' },
      { title: 'WhatsApp and AI', body: 'Meta Tech Provider infrastructure and white-label AI agents.' },
      { title: 'Payments', body: 'Subscriptions, payment links and dunning with Stripe.' },
      { title: 'Localization', body: 'Language, currency and regulations of each country solved from day one.' },
      { title: 'Structure', body: 'Holding company in Spain and one company per venture, with its own equity.' },
    ],
    aboutKicker: '02 · About us',
    aboutTitle: 'Builders, not spectators.',
    aboutText: [
      'We are a team of founders and developers who have already launched several SaaS products in production across different countries. We do not invest from the sidelines: we write the code, close the first sales and set up the structure alongside each founder.',
      'Holding company in Spain, operations across Europe and LATAM, and a dedicated company for each venture.',
    ],
    team: [
      { initials: 'JG', name: 'Javier García-Zaballos', role: 'Founder and CEO', body: 'Leads the group’s strategy, distribution and capital. Entrepreneur, speaks five languages and coordinates expansion between Europe and LATAM.' },
      { initials: '</>', name: 'Technology partners', role: 'Architecture and product', body: 'MLabs Core architecture, integrations and the rollout of every portfolio venture into new markets.' },
      { initials: '7', name: 'Tech team', role: '7 developers', body: 'A core team shared by every venture that builds and maintains the common platform.' },
    ],
    values: [
      { title: 'Sales before code', body: 'No line of product is written without a customer willing to pay.' },
      { title: 'One niche, many countries', body: 'What works in one market is replicated with a local partner in the next.' },
      { title: 'Replicable systems', body: 'Reusable technical, commercial and legal stack for every new company.' },
      { title: 'Measurable return', body: 'We build software that makes or saves the customer money from the first month.' },
    ],
    portfolioKicker: '03 · Portfolio',
    portfolioTitle: ['What we are', 'building'],
    filterLabel: 'Filter portfolio',
    filters: [
      { id: 'all', label: 'All' },
      { id: 'active', label: 'Active ventures' },
      { id: 'lab', label: 'In validation' },
    ],
    ventures: [
      { name: 'FichajeSimple', category: 'Workforce time tracking', status: 'Active', group: 'active', markets: 'ES · MX · PT · SI', body: 'Time tracking and team management for small businesses, with sign-up in under 5 minutes and a free dashboard for the customer’s accountant. Local brands: RegistoPonto (PT) and urediure.si (SI).', proof: '29 customers in Mexico in two weeks' },
      { name: 'UNMI', status: 'Active', group: 'active', body: 'Smart missed-call management.' },
      { name: 'GrowthShare', category: 'Partner OS', status: 'Active', group: 'active', markets: 'ES · IT · PT · MX', body: 'Calculates, controls and settles a sales network’s money: multi-level commissions, rebates, collections and payouts, releasing only what has already been collected.', proof: 'Sales engine of every MLABS venture' },
      { name: 'Eclia', status: 'Active', group: 'active', body: 'Mobile app to digitize the Christian world.' },
      { name: 'Rebate control', category: 'Wholesale distribution', status: 'In validation', group: 'lab', markets: 'ES → IT · PT · MX', body: 'Reads supplier agreements, calculates the accrued rebate and tells the distributor how far they are from the next tier.', proof: 'Pre-sales open with distributors' },
      { name: 'Frictionless collections', category: 'SMB finance', status: 'In validation', group: 'lab', markets: 'ES → MX · CO · IT', body: 'Reminders with a payment link and VAT recovery on unpaid invoices, without chasing customers by hand.', proof: 'Pre-sales open with accounting firms' },
    ],
    acqText: 'Do you have B2B software you want to sell, merge or scale?',
    acqLink: 'Let’s talk acquisition.',
    contactKicker: '04 · Contact',
    contactTitle: 'Build with us.',
    contactText: 'We are looking for three kinds of people. If you are one of them, we want to talk to you.',
    audiences: [
      { who: 'Investors', title: 'Capital to accelerate sales of validated products.', body: 'We are raising investment and financing to scale distribution of ventures that already have customers, product and market.', points: ['Equity in each venture’s company, not a black box', 'Your capital goes to sales and expansion, not experiments', 'Holding financed with non-dilutive instruments', 'Deck, metrics and data room on request'], cta: 'Request the investor deck', tab: 'investor' },
      { who: 'Founders', title: 'You will never build alone.', body: 'Developers with a winning idea, operators who know a niche from the inside or SaaS owners who want to scale.', points: ['Tech team and platform from day one', '3-week validation sprint with real customers', 'Legal structure and access to financing', 'Real ownership in your own company'], cta: 'Pitch my project', tab: 'founder' },
      { who: 'Sales', title: 'Bring our software to your customers.', body: 'Sales leaders, agencies, closers and distributors with access to B2B customers in Europe or LATAM.', points: ['Products with customers, support and regulatory compliance', 'Real-time dashboard with every sale and every payment', 'Tailored deals: commission, revenue share or equity', 'Option to lead sales for a venture'], cta: 'Talk about sales', tab: 'sales' },
    ],
    formTitle: 'Tell us who you are.',
    formText: 'We reply within 48 business hours. If you prefer, email or call us directly.',
    formTabsLabel: 'Contact type',
    tabs: {
      investor: { label: 'Investor', title: 'Get the investor deck', lead: 'We will send you the thesis, each venture’s metrics and the open investment and financing opportunities.', orgLabel: 'Fund, network or family office', msgLabel: 'What kind of deal, ticket and stage are you interested in?', cta: 'Request the deck' },
      founder: { label: 'Founder', title: 'Pitch your project', lead: 'Ideas, niches you know from the inside or a product already running. We look for founders who want to build a real company.', orgLabel: 'Project or startup', msgLabel: 'What problem do you solve and who pays for it today?', cta: 'Send my project' },
      sales: { label: 'Sales', title: 'Sell with MLABS', lead: 'Sales leaders, agencies, closers and distributors with access to B2B customers. We design the deal with you.', orgLabel: 'Company or profile', msgLabel: 'Which customers do you sell to, in which market, and how would you like to work together?', cta: 'I want to talk sales' },
      acquisition: { label: 'Selling my software', title: 'Software acquisition', lead: 'If you have a B2B SaaS and want to sell, merge or scale it with international distribution, let’s talk.', orgLabel: 'Product', msgLabel: 'Tell us about customers, approximate revenue and why now', cta: 'Start the conversation' },
    },
    fieldName: 'Name',
    fieldEmail: 'Email',
    fieldWeb: 'LinkedIn or website',
    formSentTitle: 'Almost there.',
    formSentText: 'We opened your email client with the message ready. Send it and we will reply within 48 business hours.',
    formReset: 'Write another message',
    footerWork: 'Work with us',
    footerContact: 'Contact',
    footerInvestors: 'Investors',
    footerFounders: 'Founders',
    footerSales: 'Sales and partners',
    legalLink: 'Legal notice',
    privacyLink: 'Privacy',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
    emailLabel: 'Email',
    companyLabel: 'Company name',
    countryName: 'Spain',
  },
};
