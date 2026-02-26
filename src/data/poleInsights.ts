export type PoleInsight = {
  executionModel: string[];
  deliverables: string[];
  opportunities: string[];
};

export const poleInsights: Record<string, PoleInsight> = {
  technologies: {
    executionModel: ['Discovery & cadrage', 'Architecture cible', 'Développement sécurisé', 'Tests & conformité', 'Run et amélioration continue'],
    deliverables: ['Roadmap SI', 'Architecture technique', 'Plan de cybersécurité', 'Documentation d’exploitation'],
    opportunities: ['Modernisation SI', 'Automatisation des processus', 'Plateformes data & IA'],
  },
  energie: {
    executionModel: ['Audit énergétique', 'Dimensionnement', 'Déploiement', 'Mise en service', 'Monitoring et maintenance'],
    deliverables: ['Étude de faisabilité', 'Dossier d’ingénierie', 'Plan de maintenance', 'Rapports de performance'],
    opportunities: ['Réduction coûts énergie', 'Électrification durable', 'Résilience opérationnelle'],
  },
  'genie-civil': {
    executionModel: ['Études préliminaires', 'Conception détaillée', 'Planification OPC', 'Supervision', 'Clôture et transfert'],
    deliverables: ['Plans d’exécution', 'Rapports de contrôle', 'Tableau de bord chantier', 'Dossier de réception'],
    opportunities: ['Infrastructures logistiques', 'Réhabilitation d’ouvrages', 'Développement urbain'],
  },
  economie: {
    executionModel: ['Collecte de données', 'Modélisation', 'Scénarios de décision', 'Validation stratégique', 'Pilotage de mise en œuvre'],
    deliverables: ['Business case', 'Modèle financier', 'Tableau de bord KPI', 'Plan stratégique'],
    opportunities: ['Optimisation CAPEX/OPEX', 'Structuration d’investissement', 'Pilotage de performance'],
  },
  mecanique: {
    executionModel: ['Diagnostic technique', 'Conception', 'Fabrication/assemblage', 'Mise en service', 'Maintenance'],
    deliverables: ['Dossier technique', 'Procédures de maintenance', 'Plans de production', 'Rapport de fiabilité'],
    opportunities: ['Automatisation', 'Rétrofit industriel', 'Fiabilisation des lignes'],
  },
  telecoms: {
    executionModel: ['Étude couverture', 'Design réseau', 'Déploiement', 'Tests et bascule', 'Exploitation NOC'],
    deliverables: ['Schéma réseau', 'Plan d’adressage', 'Plan de continuité', 'SLA opérationnels'],
    opportunities: ['Connectivité critique', 'Backbone régional', 'Smart infrastructure'],
  },
  agriculture: {
    executionModel: ['Diagnostic terrain', 'Conception solution', 'Déploiement', 'Formation exploitants', 'Suivi de campagne'],
    deliverables: ['Plan agritech', 'Guide d’exploitation', 'Indicateurs parcellaire', 'Rapports de rendement'],
    opportunities: ['Irrigation intelligente', 'Agro-énergie', 'Traçabilité de filière'],
  },
  immobilier: {
    executionModel: ['Audit patrimonial', 'Plan d’amélioration', 'Déploiement GTB', 'Optimisation d’exploitation', 'Suivi KPI'],
    deliverables: ['Audit énergétique', 'Roadmap d’actifs', 'Dossier smart building', 'Reporting exploitation'],
    opportunities: ['Éco-quartiers', 'Réduction charges', 'Valorisation d’actifs'],
  },
  formation: {
    executionModel: ['Évaluation des besoins', 'Conception parcours', 'Animation pratique', 'Certification', 'Suivi post-formation'],
    deliverables: ['Référentiel de compétences', 'Supports labs', 'Attestations/certifs', 'Rapport d’impact'],
    opportunities: ['Montée en compétences', 'Employabilité technique', 'Autonomie opérationnelle'],
  },
  securite: {
    executionModel: ['Évaluation posture', 'Plan de remédiation', 'Déploiement contrôles', 'Simulation incident', 'Amélioration continue'],
    deliverables: ['Matrice de risques', 'Playbooks SOC', 'Politique IAM', 'Rapport de conformité'],
    opportunities: ['Protection infrastructures critiques', 'Conformité cyber', 'Réduction du risque opérationnel'],
  },
  environnement: {
    executionModel: ['Diagnostic environnemental', 'Plan de réduction', 'Déploiement actions', 'Mesure des impacts', 'Reporting ESG'],
    deliverables: ['Bilan environnemental', 'Plan déchets/eau', 'Trajectoire carbone', 'Tableau de bord ESG'],
    opportunities: ['Décarbonation', 'Conformité réglementaire', 'Performance durable'],
  },
};
