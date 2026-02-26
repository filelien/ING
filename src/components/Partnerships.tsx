import { motion } from 'framer-motion';
import { Building2, Handshake, ShieldCheck, Globe2, ArrowUpRight, Network, Layers, Shield, Rocket, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../contexts/ThemeModeContext';

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
  const { mode } = useThemeMode();
  return (
    <section
      id="partnerships"
      className={`py-24 relative overflow-hidden ${mode === 'clear' ? 'bg-slate-50' : 'bg-slate-950'}`}
    >
      <div
        className={`absolute inset-0 ${
          mode === 'clear'
            ? 'bg-gradient-to-b from-white via-slate-100 to-slate-200'
            : 'bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/30'
        }`}
      />
      <div className={`absolute -top-24 right-0 w-72 h-72 blur-3xl rounded-full ${mode === 'clear' ? 'bg-emerald-300/20' : 'bg-emerald-500/10'}`} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
            Partenariats & <span className={mode === 'clear' ? 'text-emerald-600' : 'text-emerald-400'}>Alliances</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto mb-5 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>
            Un écosystème de partenaires institutionnels, industriels et techniques pour accélérer l’exécution des programmes à fort impact.
          </p>
          <div
            className={`inline-flex items-center gap-2 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-2 border ${
              mode === 'clear'
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30'
            }`}
          >
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
              className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 border ${
                mode === 'clear'
                  ? 'bg-white border-slate-200 hover:border-emerald-400 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.tone} opacity-30`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${mode === 'clear' ? 'bg-emerald-50' : 'bg-emerald-500/10'}`}>
                  <group.icon className={mode === 'clear' ? 'text-emerald-700' : 'text-emerald-400'} size={24} />
                </div>
                <h3 className={`text-xl font-semibold mb-1 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>{group.title}</h3>
                <p className={`text-xs mb-3 ${mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'}`}>{group.volume}</p>
                <ul className={`space-y-2 text-sm leading-relaxed ${mode === 'clear' ? 'text-slate-700' : 'text-gray-300'}`}>
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
          className={`rounded-2xl p-5 sm:p-6 md:p-8 border ${
            mode === 'clear'
              ? 'bg-white border-slate-200 shadow-sm'
              : 'bg-slate-900/60 border-slate-800'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-5">
            <h3 className={`text-xl sm:text-2xl font-semibold ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>Modèles de collaboration</h3>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 text-sm transition-colors ${
                mode === 'clear' ? 'text-emerald-700 hover:text-emerald-600' : 'text-emerald-300 hover:text-emerald-200'
              }`}
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
                className={`p-4 sm:p-5 rounded-xl text-sm break-words border ${
                  mode === 'clear'
                    ? 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 text-gray-300'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                  <model.icon className={mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'} size={20} />
                </div>
                <h4 className={`font-semibold mb-2 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>{model.title}</h4>
                <p className={`leading-relaxed mb-3 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>{model.detail}</p>
                <div className={`text-xs ${mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'}`}>{model.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
