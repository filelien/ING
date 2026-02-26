import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'Technologies',
    title: 'Dossier patient unifié – réseau hospitalier (Lomé, 2024)',
    context: 'Réseau hospitalier multi-sites avec SI fragmenté et incidents de disponibilité.',
    challenge: 'Assurer interopérabilité, sécurité des données de santé et continuité de service.',
    solution: 'ERP santé unifié, IAM renforcé, traçabilité et PRA testé avec hébergement souverain.',
    result: 'Disponibilité portée à 99.7%, reprise en moins de 15 minutes et pilotage centralisé.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Cloud', 'Sécurité', 'e-Santé'],
  },
  {
    category: 'Énergie',
    title: 'Micro-réseau solaire 500 kW – zone industrielle (2023)',
    context: 'Site industriel dépendant au diesel avec coûts énergétiques élevés.',
    challenge: 'Réduire la facture, sécuriser l\'alimentation et limiter les émissions carbone.',
    solution: 'Conception et déploiement d\'un micro-réseau hybride avec monitoring 24/7.',
    result: '-38% sur la facture énergétique et baisse significative des émissions.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Solaire', 'Hybride', 'Monitoring'],
  },
  {
    category: 'Génie Civil',
    title: 'Centre logistique 5 000 m² – Afrique de l\'Ouest',
    context: 'Besoin d\'une plateforme logistique pour absorber une croissance régionale rapide.',
    challenge: 'Livrer dans les délais avec conformité HSE et contraintes de flux poids lourds.',
    solution: 'Conception technique, suivi OPC, contrôle qualité et pilotage HSE renforcé.',
    result: 'Infrastructure livrée conforme, circulation optimisée et exploitation sécurisée.',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['OPC', 'HSE', 'Infrastructures'],
  },
  {
    category: 'Économie',
    title: 'Étude de faisabilité zone industrielle (2024)',
    context: 'Projet de parc multi-activité nécessitant validation économique et phasage.',
    challenge: 'Sécuriser la décision d\'investissement avec scénarios réalistes CAPEX/OPEX.',
    solution: 'Étude de marché, modélisation financière et schéma directeur opérationnel.',
    result: 'Décision d\'investissement validée avec feuille de route phasée.',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Finance', 'Supply Chain', 'Schéma directeur'],
  },
  {
    category: 'Mécanique',
    title: 'Ligne de convoyage agroalimentaire (2025)',
    context: 'Production agroalimentaire limitée par des arrêts récurrents et une manutention manuelle.',
    challenge: 'Améliorer la cadence et réduire les pannes critiques.',
    solution: 'Conception/fabrication d\'une ligne automatisée avec maintenance préventive digitalisée.',
    result: '+22% de débit et division par deux des arrêts non planifiés.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Automatisation', 'Supervision', 'Maintenance'],
  },
  {
    category: 'Cybersécurité',
    title: 'Renforcement sécurité bancaire (2024)',
    context: 'Institution financière exposée à des tentatives de fraude et risques d\'accès non maîtrisés.',
    challenge: 'Réduire l\'exposition sans interrompre les opérations critiques.',
    solution: 'Audit de sécurité, SOC partagé, durcissement IAM et plan de remédiation priorisé.',
    result: 'Baisse des incidents critiques et amélioration du niveau de conformité.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['SOC', 'IAM', 'Audit'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos <span className="text-emerald-400">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Projets d'envergure dans nos cinq pôles d'expertise, avec un impact mesurable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="space-y-2 mb-4 text-sm leading-relaxed">
                  <p className="text-gray-300"><span className="text-white font-medium">Contexte :</span> {project.context}</p>
                  <p className="text-gray-300"><span className="text-white font-medium">Problématique :</span> {project.challenge}</p>
                  <p className="text-gray-300"><span className="text-white font-medium">Solution :</span> {project.solution}</p>
                  <p className="text-emerald-300"><span className="text-emerald-200 font-medium">Résultat :</span> {project.result}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800/50 text-gray-400 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-emerald-400 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                >
                  <span>Voir détails</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
