export type PoleExtendedData = {
  domains: string[];
  clientSectors: string[];
  commitments: string[];
  caseStudy: {
    title: string;
    context: string;
    challenge: string;
    solution: string;
    result: string;
  };
};

export const poleExtendedData: Record<string, PoleExtendedData> = {
  technologies: {
    domains: [
      'Développement web, mobile et plateformes métiers',
      'Data engineering, BI et IA appliquée',
      'Cloud, DevOps, observabilité et résilience',
      'Cybersécurité (SOC, IAM, durcissement, audit)',
      'Intégration ERP/CRM et interopérabilité SI',
    ],
    clientSectors: ['Banque', 'Santé', 'Administration', 'Télécoms', 'Industrie'],
    commitments: ['SLA applicatif 99.5%+', 'Mise en production sécurisée', 'Support et astreinte 24/7'],
    caseStudy: {
      title: 'Transformation digitale d’un réseau hospitalier',
      context: 'SI hospitalier fragmenté et faible continuité de service.',
      challenge: 'Unifier les données patients, renforcer la sécurité et réduire les indisponibilités.',
      solution: 'Mise en place d’un ERP santé, IAM avancé, monitoring centralisé et PRA testé.',
      result: 'Disponibilité portée à 99.7% et temps de reprise réduit à moins de 15 minutes.',
    },
  },
  energie: {
    domains: [
      'Études énergétiques et audits de performance',
      'Conception et déploiement solaire/hybride',
      'Installation MT/BT et protections électriques',
      'Supervision et maintenance 24/7',
      'Programmes d’électrification territoriale',
    ],
    clientSectors: ['Industrie', 'Agro-industrie', 'Collectivités', 'Immobilier', 'Santé'],
    commitments: ['Réduction mesurable des coûts', 'Plan de maintenance préventive', 'Disponibilité réseau cible ≥99%'],
    caseStudy: {
      title: 'Micro-réseau hybride pour zone industrielle',
      context: 'Dépendance élevée au diesel et coûts énergétiques croissants.',
      challenge: 'Sécuriser l’alimentation électrique tout en réduisant le coût total.',
      solution: 'Déploiement d’un micro-réseau solaire hybride avec supervision continue.',
      result: 'Baisse de 38% de la facture énergétique et stabilité d’alimentation améliorée.',
    },
  },
  'genie-civil': {
    domains: [
      'Études techniques et dimensionnement d’ouvrages',
      'Pilotage OPC et supervision de chantier',
      'Contrôle qualité, sécurité et conformité HSE',
      'Réhabilitation et renforcement structurel',
      'Infrastructures urbaines et logistiques',
    ],
    clientSectors: ['Logistique', 'BTP', 'Collectivités', 'Immobilier', 'Éducation'],
    commitments: ['Respect des jalons chantier', 'Pilotage qualité documenté', 'Conformité HSE stricte'],
    caseStudy: {
      title: 'Hub logistique régional 5 000 m²',
      context: 'Besoin d’infrastructure logistique pour soutenir la croissance régionale.',
      challenge: 'Livrer dans les délais avec contraintes opérationnelles fortes.',
      solution: 'Conception, OPC, contrôle technique et coordination des intervenants.',
      result: 'Infrastructure livrée avec conformité qualité et exploitation immédiate.',
    },
  },
  economie: {
    domains: [
      'Études de faisabilité sectorielle',
      'Modélisation financière CAPEX/OPEX',
      'Audit stratégique et plans de croissance',
      'Business intelligence et reporting direction',
      'Accompagnement décisionnel d’investissement',
    ],
    clientSectors: ['PME', 'Groupes industriels', 'Institutions publiques', 'Investisseurs', 'ONG'],
    commitments: ['Livrables orientés décision', 'Hypothèses transparentes', 'Scénarios de risques documentés'],
    caseStudy: {
      title: 'Schéma directeur économique d’un parc multi-activités',
      context: 'Projet de parc industriel nécessitant cadrage stratégique et financier.',
      challenge: 'Valider la viabilité économique avec plusieurs scénarios de marché.',
      solution: 'Études de marché, modèle financier et feuille de route opérationnelle.',
      result: 'Décision d’investissement validée avec plan de déploiement phasé.',
    },
  },
  mecanique: {
    domains: [
      'Conception de systèmes mécaniques',
      'Fabrication, assemblage et mise en service',
      'Maintenance préventive et corrective',
      'Automatisation de lignes industrielles',
      'Prototypage et rétrofit d’équipements',
    ],
    clientSectors: ['Agro-industrie', 'Manufacturing', 'Énergie', 'Logistique', 'Mines'],
    commitments: ['Disponibilité équipements ≥98%', 'Plan de maintenance digitalisé', 'Réduction des arrêts non planifiés'],
    caseStudy: {
      title: 'Automatisation d’une ligne agroalimentaire',
      context: 'Production ralentie par la manutention manuelle et pannes récurrentes.',
      challenge: 'Augmenter le débit sans augmenter les risques opérationnels.',
      solution: 'Conception/fabrication d’une ligne automatisée avec monitoring.',
      result: 'Hausse de cadence de 22% et réduction significative des interruptions.',
    },
  },
  telecoms: {
    domains: [
      'Déploiement de réseaux fibre et backbone',
      'Design et exploitation de datacenters',
      'Couverture campus et réseaux managés',
      'IoT industriel et supervision réseau',
      'NOC/SOC et continuité de service',
    ],
    clientSectors: ['Télécoms', 'État', 'Industrie', 'Éducation', 'Services financiers'],
    commitments: ['Disponibilité réseau 99.9%', 'Supervision proactive', 'Escalade d’incident structurée'],
    caseStudy: {
      title: 'Backbone régional haute disponibilité',
      context: 'Faible résilience réseau sur zones multi-sites.',
      challenge: 'Réduire la latence et éviter les coupures majeures.',
      solution: 'Déploiement backbone redondé et supervision NOC centralisée.',
      result: 'Stabilité réseau renforcée et baisse des incidents critiques.',
    },
  },
  agriculture: {
    domains: [
      'Irrigation intelligente et capteurs terrain',
      'Agro-énergie solaire pour exploitations',
      'Mécanisation adaptée au contexte local',
      'Traçabilité et digitalisation de filières',
      'Optimisation post-récolte',
    ],
    clientSectors: ['Coopératives', 'Exploitations privées', 'Agro-industrie', 'ONG', 'Collectivités'],
    commitments: ['Réduction de la consommation d’eau', 'Amélioration de la productivité', 'Formation des équipes locales'],
    caseStudy: {
      title: 'Programme irrigation + solaire en zone agro',
      context: 'Stress hydrique et coûts énergétiques élevés en période sèche.',
      challenge: 'Sécuriser l’irrigation tout en maîtrisant les coûts d’exploitation.',
      solution: 'Irrigation pilotée et pompage solaire avec capteurs d’humidité.',
      result: 'Consommation d’eau réduite de 35% et meilleure continuité de production.',
    },
  },
  immobilier: {
    domains: [
      'Programmation urbaine et masterplans',
      'Smart buildings et GTB',
      'Optimisation énergétique du patrimoine',
      'Gestion technique d’actifs immobiliers',
      'Développement d’éco-quartiers',
    ],
    clientSectors: ['Promoteurs', 'Foncières', 'Collectivités', 'Gestionnaires d’actifs', 'Hôtellerie'],
    commitments: ['Réduction des charges énergétiques', 'Suivi d’exploitation structuré', 'Confort et performance des bâtiments'],
    caseStudy: {
      title: 'Optimisation énergétique d’un portefeuille tertiaire',
      context: 'Parc immobilier avec charges d’exploitation élevées.',
      challenge: 'Réduire les coûts et améliorer les performances environnementales.',
      solution: 'Audit énergétique, GTB et plan de modernisation des équipements.',
      result: 'Baisse des coûts énergétiques et amélioration du confort usager.',
    },
  },
  formation: {
    domains: [
      'Académie technique ingénierie et IT',
      'Parcours certifiants cloud/cyber',
      'Formations énergie, sécurité et HSE',
      'Bootcamps projets et laboratoires pratiques',
      'Transfert de compétences en mission',
    ],
    clientSectors: ['Entreprises', 'Administrations', 'Universités', 'Centres techniques', 'ONG'],
    commitments: ['Parcours orientés emploi', 'Évaluation des compétences', 'Suivi post-formation'],
    caseStudy: {
      title: 'Programme de montée en compétences cloud/cyber',
      context: 'Besoin urgent de compétences locales sur projets numériques critiques.',
      challenge: 'Former rapidement des équipes opérationnelles certifiables.',
      solution: 'Parcours intensifs avec labs, mentorat et examens de certification.',
      result: 'Taux de réussite certif élevé et employabilité renforcée.',
    },
  },
  securite: {
    domains: [
      'SOC/SIEM et détection avancée',
      'IAM/PAM et gouvernance des accès',
      'Pentest et audits de sécurité',
      'Protection OT/ICS et infrastructures critiques',
      'Plans de continuité et reprise',
    ],
    clientSectors: ['Banque', 'Énergie', 'Administration', 'Télécoms', 'Industrie'],
    commitments: ['Temps de réponse SOC <30 min', 'Plans de remédiation priorisés', 'Contrôles réguliers de conformité'],
    caseStudy: {
      title: 'Renforcement sécurité d’une institution financière',
      context: 'Augmentation des menaces cyber ciblant les transactions sensibles.',
      challenge: 'Améliorer la posture sécurité sans impacter l’activité métier.',
      solution: 'SOC partagé, durcissement IAM et protocoles de réponse incident.',
      result: 'Baisse des incidents critiques et meilleure maturité cyber.',
    },
  },
  environnement: {
    domains: [
      'Études d’impact environnemental',
      'Gestion et valorisation des déchets',
      'Traitement de l’eau et assainissement',
      'Bilans carbone et trajectoires de réduction',
      'Programmes de durabilité et sensibilisation',
    ],
    clientSectors: ['Collectivités', 'Industrie', 'ONG', 'Immobilier', 'Agro-industrie'],
    commitments: ['Conformité environnementale', 'Indicateurs de performance suivis', 'Approche bas carbone pragmatique'],
    caseStudy: {
      title: 'Plan de performance environnementale pour site industriel',
      context: 'Site soumis à des exigences environnementales croissantes.',
      challenge: 'Réduire les impacts et structurer la conformité long terme.',
      solution: 'Audit, plan d’action eau/déchets/carbone et suivi des KPIs.',
      result: 'Conformité améliorée et réduction progressive de l’empreinte carbone.',
    },
  },
};
