import { motion } from 'framer-motion';
import { Globe2, Cpu, Zap, Building2, TrendingUp, Cog } from 'lucide-react';
import InovTechLogo from '../../logo/INOV_TECHNOLOGY_250x250-C4SJNkeH.png';

const entities = [
  {
    title: 'INOV TECHNOLOGY',
    subtitle: 'Innovation & Transformation Digitale',
    url: 'https://inovtechnology.netlify.app/',
    gradient: 'from-blue-500/25 via-cyan-500/20 to-emerald-500/15',
    icon: Cpu,
    logo: InovTechLogo,
  },
  {
    title: 'INOV ENERGY',
    subtitle: 'Solutions Énergétiques Durables',
    url: 'https://energy.inovafrik.com',
    gradient: 'from-emerald-500/25 via-green-500/20 to-teal-500/15',
    icon: Zap,
  },
  {
    title: 'INOV CIVIL',
    subtitle: 'Ingénierie & Infrastructures',
    url: 'https://civil.inovafrik.com',
    gradient: 'from-slate-500/30 via-gray-500/20 to-emerald-400/10',
    icon: Building2,
  },
  {
    title: 'INOV ECO',
    subtitle: 'Stratégie & Intelligence Économique',
    url: 'https://eco.inovafrik.com',
    gradient: 'from-amber-500/25 via-orange-500/20 to-emerald-400/10',
    icon: TrendingUp,
  },
  {
    title: 'INOV MECH',
    subtitle: 'Ingénierie Mécanique & Industrielle',
    url: 'https://mech.inovafrik.com',
    gradient: 'from-indigo-500/25 via-purple-500/20 to-emerald-400/10',
    icon: Cog,
  },
];

const Entities = () => {
  return (
    <section id="entities" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(52, 211, 153, 0.08) 1px, transparent 0)',
        backgroundSize: '36px 36px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Nos Entités</h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Une holding unique, cinq pôles spécialisés. Identité cohérente, couleurs différenciées, redirections claires vers chaque entité.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-emerald-300">
            <Globe2 size={18} />
            <span>Structure groupe · Sous-domaines dédiés</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entities.map((entity, index) => (
            <motion.a
              key={entity.title}
              href={entity.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-lg p-6 shadow-lg transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${entity.gradient} blur-3xl`} />
              <div className="absolute inset-0 bg-white/3 rounded-2xl opacity-5" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {entity.logo ? (
                    <img src={entity.logo} alt={entity.title} className="w-10 h-10 object-contain" />
                  ) : (
                    <entity.icon className="text-white" size={24} />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{entity.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{entity.subtitle}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                    Accéder au site
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entities;
