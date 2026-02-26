import { motion } from 'framer-motion';
import { Sparkles, Zap, Building2, TrendingUp, Shield, Sprout } from 'lucide-react';

const pairs = [
  {
    title: 'Smart Grid & Infrastructures critiques',
    combo: 'Tech + Énergie + Télécoms',
    detail: 'Supervision temps réel, cybersécurité, IoT terrain et optimisation énergétique pour sites critiques.',
    icon: Zap,
  },
  {
    title: 'Chantiers augmentés',
    combo: 'Tech + Génie Civil + Mécanique',
    detail: 'BIM, capteurs chantier, suivi OPC digitalisé et maintenance prédictive des équipements.',
    icon: Building2,
  },
  {
    title: 'Data & Décision',
    combo: 'Tech + Économie',
    detail: 'Tableaux de bord, BI, modèles financiers et scénarios CAPEX/OPEX pour décideurs.',
    icon: TrendingUp,
  },
  {
    title: 'Sécurité intégrée',
    combo: 'Tech + Sécurité',
    detail: 'SOC, IAM, détection avancée et protection d\'infrastructures critiques.',
    icon: Shield,
  },
  {
    title: 'Agro-énergie & Irrigation intelligente',
    combo: 'Énergie + Agriculture',
    detail: 'Micro-réseaux solaires, pompage efficient, capteurs agro et supervision terrain.',
    icon: Sprout,
  },
];

const Synergy = () => {
  return (
    <section id="synergy" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.12) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Synergie des pôles</h2>
            <p className="text-gray-400 max-w-3xl">
              Chaque pôle renforce les autres : ingénierie intégrée, décisions pilotées par la donnée et exécution sécurisée.
            </p>
          </div>
          <div className="flex items-center gap-2 text-emerald-300 text-sm">
            <Sparkles size={18} />
            <span>Approche groupe intégrée</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="border border-slate-800 rounded-2xl p-6 bg-slate-950/60 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                <item.icon className="text-emerald-400" size={20} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-300 mb-2">{item.combo}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Synergy;
