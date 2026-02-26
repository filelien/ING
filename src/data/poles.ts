export type Pole = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  highlights: { label: string; value: string }[];
  gradient: string;
  accent: string;
  heroImage: string;
};

export const poles: Pole[] = [
  {
    slug: 'technologies',
    title: 'Technologies & Transformation Digitale',
    tagline: 'Plateformes critiques, cloud, data & cybersécurité.',
    description:
      "Conception, développement et sécurisation de plateformes numériques (cloud, IA, data, mobile, cybersécurité) pour entreprises et institutions.",
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Architecture cloud & DevOps',
      'Développement web/mobile & API',
      'Data, IA, analytique décisionnelle',
      'SOC, IAM, pentest et durcissement',
      'ERP/CRM et intégration SI',
    ],
    highlights: [
      { label: 'Projets livrés', value: '60+' },
      { label: 'Certifications cloud & sécu', value: 'Oracle · AWS · Azure · CISSP · CKA' },
      { label: 'SLA applicatifs', value: '99.5%+' },
    ],
    gradient: 'from-blue-600 to-cyan-500',
    accent: 'text-cyan-300',
  },
  {
    slug: 'energie',
    title: 'Énergie & Solutions Industrielles',
    tagline: 'Micro-réseaux, solaire, efficacité et supervision 24/7.',
    description:
      "Études, ingénierie et déploiement de solutions solaires, hybrides et réseaux industriels avec monitoring et maintenance.",
    heroImage: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Centrales solaires et hybrides',
      'Audit énergétique et optimisation',
      'Réseaux MT/BT et protections',
      'Supervision et maintenance 24/7',
      'Électrification sites isolés',
    ],
    highlights: [
      { label: 'Capacité installée', value: '3+ MW' },
      { label: 'Réduction coûts énergie', value: '-38% constaté' },
      { label: 'Sites industriels servis', value: '20+' },
    ],
    gradient: 'from-emerald-500 to-green-500',
    accent: 'text-emerald-300',
  },
  {
    slug: 'genie-civil',
    title: 'Génie Civil & Infrastructures',
    tagline: 'Conception, OPC, contrôle technique et HSE.',
    description:
      "Études techniques, BIM, pilotage de chantiers et contrôle qualité pour bâtiments, ouvrages et infrastructures.",
    heroImage: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Conception et études structurelles',
      'OPC, supervision et reporting chantier',
      'Contrôle technique & HSE',
      'BIM et jumeaux numériques',
      'Réhabilitation et renforcement',
    ],
    highlights: [
      { label: 'Surfaces suivies', value: '50 000 m²' },
      { label: 'Projets structurants', value: '15+' },
      { label: 'Respect délais', value: '≥95%' },
    ],
    gradient: 'from-slate-500 to-gray-500',
    accent: 'text-slate-200',
  },
  {
    slug: 'economie',
    title: 'Économie & Conseil Stratégique',
    tagline: 'Analyses, modèles financiers et décisions documentées.',
    description:
      "Études de faisabilité, business plans, modèles financiers, schémas directeurs et stratégies sectorielles.",
    heroImage: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Études de marché et faisabilité',
      'Modèles financiers CAPEX/OPEX',
      'Business plans et stratégie',
      'Due diligence & audit',
      'Data & business intelligence',
    ],
    highlights: [
      { label: 'Études livrées', value: '40+' },
      { label: 'Secteurs couverts', value: 'Énergie, industrie, services' },
      { label: 'Scénarios décision', value: 'Multi-CAPEX/OPEX' },
    ],
    gradient: 'from-amber-500 to-orange-500',
    accent: 'text-amber-300',
  },
  {
    slug: 'mecanique',
    title: 'Génie Mécanique & Ingénierie',
    tagline: 'Conception, fabrication, maintenance industrielle.',
    description:
      "Conception mécanique, lignes de production, maintenance préventive et corrective, rétrofit et prototypage.",
    heroImage: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Études et conception mécanique',
      'Fabrication & assemblage',
      'Maintenance préventive et corrective',
      'Automatisation & supervision',
      'Rétrofit et prototypage',
    ],
    highlights: [
      { label: 'Lignes livrées', value: '12' },
      { label: 'Disponibilité visée', value: '≥98%' },
      { label: 'SLA maintenance', value: '24/7' },
    ],
    gradient: 'from-indigo-500 to-purple-500',
    accent: 'text-indigo-200',
  },
  {
    slug: 'telecoms',
    title: 'Télécoms & Infrastructures Numériques',
    tagline: 'Backbone, fibre, datacenters, IoT et smart cities.',
    description:
      "Déploiement et sécurisation d'infrastructures télécoms : fibre, backbone, datacenters, IoT et solutions smart city.",
    heroImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Fibre optique et réseaux backbone',
      'Datacenters et salles serveurs',
      'Réseaux campus et Wi-Fi managé',
      'IoT industriel et urbain',
      'Opérations & maintenance NOC',
    ],
    highlights: [
      { label: 'Km de fibre', value: '300+' },
      { label: 'Disponibilité réseau', value: '99.9%' },
      { label: 'NOC/SOC', value: '24/7' },
    ],
    gradient: 'from-sky-500 to-indigo-500',
    accent: 'text-sky-200',
  },
  {
    slug: 'agriculture',
    title: 'Agriculture & Agro-industrie',
    tagline: 'Irrigation intelligente, agro-énergie et data terrain.',
    description:
      "Solutions agro-tech : irrigation pilotée, agro-énergie solaire, capteurs terrain et mécanisation adaptée.",
    heroImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Irrigation intelligente & capteurs',
      'Agro-énergie solaire',
      'Mécanisation adaptée',
      'Chaînes de valeur et traçabilité',
      'Stockage et transformation',
    ],
    highlights: [
      { label: 'Sites agro', value: '25+' },
      { label: 'Économie d\'eau', value: '-30% à -50%' },
      { label: 'Énergie verte', value: 'Autonomie + solaire' },
    ],
    gradient: 'from-green-500 to-lime-500',
    accent: 'text-lime-200',
  },
  {
    slug: 'immobilier',
    title: 'Immobilier & Développement Urbain',
    tagline: 'Smart buildings, éco-quartiers et gestion d’actifs.',
    description:
      "Promotion, aménagement urbain, smart buildings et gestion d'actifs avec approche énergétique et numérique.",
    heroImage: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Programmation & masterplans',
      'Smart buildings & GTB',
      'Éco-quartiers & mobilité',
      'Gestion d\'actifs et FM digitalisé',
      'Audit énergétique des bâtiments',
    ],
    highlights: [
      { label: 'Portefeuille suivi', value: '100k m²' },
      { label: 'Réduction conso', value: '-25% à -40%' },
      { label: 'Projets urbains', value: '10+' },
    ],
    gradient: 'from-rose-500 to-amber-500',
    accent: 'text-rose-200',
  },
  {
    slug: 'formation',
    title: 'Formation & Recherche',
    tagline: 'Académie technique, certifications et R&D appliquée.',
    description:
      "Programmes de formation ingénierie, IT, sécurité, énergie et R&D appliquée pour renforcer les équipes.",
    heroImage: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Académie technique & labs',
      'Certifications IT/sécurité/cloud',
      'Formations énergie & HSE',
      'R&D appliquée et prototypes',
      'Transfert de compétences projets',
    ],
    highlights: [
      { label: 'Apprenants formés', value: '800+' },
      { label: 'Certifications délivrées', value: '300+' },
      { label: 'Workshops/an', value: '40+' },
    ],
    gradient: 'from-purple-500 to-fuchsia-500',
    accent: 'text-fuchsia-200',
  },
  {
    slug: 'securite',
    title: 'Sécurité & Défense Technologique',
    tagline: 'Protection des infrastructures critiques et SOC.',
    description:
      "Cybersécurité avancée, SOC, IAM, détection et protection d'infrastructures critiques industrielles et publiques.",
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
    services: [
      'SOC, SIEM, détection avancée',
      'IAM, PAM, gestion des accès',
      'Pentest, audit et durcissement',
      'Sécurité OT/ICS et réseaux',
      'Plan de continuité & reprise',
    ],
    highlights: [
      { label: 'Audits/an', value: '30+' },
      { label: 'Temps de réponse', value: '<30 min (SOC)' },
      { label: 'Couverture', value: 'IT + OT' },
    ],
    gradient: 'from-slate-600 to-emerald-500',
    accent: 'text-emerald-200',
  },
  {
    slug: 'environnement',
    title: 'Environnement & Développement Durable',
    tagline: 'Eau, déchets, carbone et solutions vertes.',
    description:
      "Études environnementales, gestion des déchets, traitement de l'eau, audits carbone et solutions bas carbone.",
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    services: [
      'Études d\'impact et conformité',
      'Gestion des déchets et valorisation',
      'Traitement de l\'eau et assainissement',
      'Audit carbone & plans de réduction',
      'Solutions vertes et sensibilisation',
    ],
    highlights: [
      { label: 'Projets verts', value: '35+' },
      { label: 'Réduction carbone', value: '-20% à -45%' },
      { label: 'Sites audités', value: '50+' },
    ],
    gradient: 'from-emerald-500 to-teal-500',
    accent: 'text-teal-200',
  },
];
