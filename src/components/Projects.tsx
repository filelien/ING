import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'Technologies',
    title: 'Dossier patient unifié – réseau hospitalier (Lomé, 2024)',
    description: 'Déploiement d\'un ERP santé (IAM, traçabilité, télémédecine) avec hébergement souverain et reprise d\'activité testée.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Cloud', 'Sécurité', 'e-Santé'],
  },
  {
    category: 'Énergie',
    title: 'Micro-réseau solaire 500 kW – zone industrielle (2023)',
    description: 'Ingénierie, installation et supervision d\'un micro-réseau hybride avec monitoring 24/7 et réduction de 38% de la facture énergétique.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Solaire', 'Hybride', 'Monitoring'],
  },
  {
    category: 'Génie Civil',
    title: 'Centre logistique 5 000 m² – Afrique de l\'Ouest',
    description: 'Conception, contrôle technique et suivi OPC pour un hub logistique avec normes HSE et circulation poids lourds optimisée.',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['OPC', 'HSE', 'Infrastructures'],
  },
  {
    category: 'Économie',
    title: 'Étude de faisabilité zone industrielle (2024)',
    description: 'Analyse financière, supply chain et schéma directeur pour un parc multi-activité avec scénarios CAPEX/OPEX documentés.',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Finance', 'Supply Chain', 'Schéma directeur'],
  },
  {
    category: 'Mécanique',
    title: 'Ligne de convoyage agroalimentaire (2025)',
    description: 'Études, fabrication locale et mise en service d\'une ligne automatisée avec maintenance préventive numérisée.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Automatisation', 'Supervision', 'Maintenance'],
  },
  {
    category: 'Cybersécurité',
    title: 'Renforcement sécurité bancaire (2024)',
    description: 'Audit technique, SOC partagé et durcissement des accès pour une institution financière avec plan de remédiation priorisé.',
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
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

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
