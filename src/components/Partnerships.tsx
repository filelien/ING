import { motion } from 'framer-motion';
import { Building2, Handshake, ShieldCheck, Globe2, ArrowUpRight, Network, Layers, Shield, Rocket, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const groups = [
  {
    icon: Handshake,
    title: 'Institutions publiques',
    items: ['Ministères & agences nationales', 'Collectivités territoriales', 'Programmes publics infrastructure/énergie'],
    tone: 'from-emerald-500/30 to-blue-500/30',
    volume: '18+ partenariats actifs',
  },
  {
    icon: Building2,
    title: 'Entreprises privées',
    items: ['Grands comptes industriels', 'PME en transformation', 'Acteurs télécom, finance et services'],
    tone: 'from-slate-500/30 to-slate-300/20',
    volume: '40+ collaborations projets',
  },
  {
    icon: ShieldCheck,
    title: 'ONG & organisations internationales',
    items: ['Programmes de développement', 'Partenariats à impact local', 'Initiatives énergie, eau, santé et inclusion'],
    tone: 'from-amber-500/25 to-emerald-400/25',
    volume: '12+ programmes co-portés',
  },
  {
    icon: Globe2,
    title: 'Fournisseurs techniques',
    items: ['Cloud providers & éditeurs', 'Équipementiers énergie/industrie', 'Partenaires cybersécurité spécialisés'],
    tone: 'from-cyan-500/30 to-emerald-500/20',
    volume: '30+ accords techniques',
  },
];

const collaborationModels = [
  {
    icon: Layers,
    title: 'Co-construction stratégique',
    detail: 'Alignement des objectifs, gouvernance conjointe et feuille de route partagée.',
    value: 'Cadre projet 360°',
  },
  {
    icon: Shield,
    title: 'Consortium d’exécution',
    detail: 'Répartition claire des rôles, garanties de conformité et pilotage des risques.',
    value: 'PMO + SLA contractuels',
  },
  {
    icon: Rocket,
    title: 'Innovation & pilotes terrain',
    detail: 'POC rapides, validation terrain et industrialisation progressive des solutions.',
    value: 'Cycle test-to-scale',
  },
  {
    icon: RefreshCcw,
    title: 'Transfert de compétences',
    detail: 'Formation des équipes locales, documentation et autonomie opérationnelle.',
    value: 'Montée en compétence durable',
  },
];

const Partnerships = () => {
  return (
    <section id="partnerships" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/30" />
      <div className="absolute -top-24 right-0 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Partenariats & <span className="text-emerald-400">Alliances</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-5">
            Un écosystème de partenaires institutionnels, industriels et techniques pour accélérer l’exécution des programmes à fort impact.
          </p>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-300 border border-emerald-500/30 rounded-full px-3 sm:px-4 py-2 bg-emerald-500/10">
            <Network size={16} />
            Cadre de gouvernance partenariale
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.tone} opacity-30`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <group.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{group.title}</h3>
                <p className="text-xs text-emerald-300 mb-3">{group.volume}</p>
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-5 sm:p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-5">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Modèles de collaboration</h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              Devenir partenaire
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {collaborationModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-950/60 text-sm text-gray-300 break-words"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                  <model.icon className="text-emerald-300" size={20} />
                </div>
                <h4 className="text-white font-semibold mb-2">{model.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-3">{model.detail}</p>
                <div className="text-xs text-emerald-300">{model.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
