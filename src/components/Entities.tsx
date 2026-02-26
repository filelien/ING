import { motion } from 'framer-motion';
import { Globe2, Cpu, Zap, Building2, TrendingUp, Cog, ArrowUpRight, Sparkles } from 'lucide-react';
import InovTechLogo from '../../logo/INOV_TECHNOLOGY_250x250-C4SJNkeH.png';
import { useThemeMode } from '../contexts/ThemeModeContext';

const entities = [
  {
    title: 'INOV TECHNOLOGY',
    subtitle: 'Innovation & Transformation Digitale',
    url: 'https://inovtechnology.netlify.app/',
    gradient: 'from-blue-500/25 via-cyan-500/20 to-emerald-500/15',
    icon: Cpu,
    logo: InovTechLogo,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    metric: 'Plateformes critiques & cybersécurité',
  },
  {
    title: 'INOV ENERGY',
    subtitle: 'Solutions Énergétiques Durables',
    url: 'https://energy.inovafrik.com',
    gradient: 'from-emerald-500/25 via-green-500/20 to-teal-500/15',
    icon: Zap,
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
    metric: 'Micro-réseaux, solaire, monitoring 24/7',
  },
  {
    title: 'INOV CIVIL',
    subtitle: 'Ingénierie & Infrastructures',
    url: 'https://civil.inovafrik.com',
    gradient: 'from-slate-500/30 via-gray-500/20 to-emerald-400/10',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=1200&q=80',
    metric: 'Études, OPC, supervision chantiers',
  },
  {
    title: 'INOV ECO',
    subtitle: 'Stratégie & Intelligence Économique',
    url: 'https://eco.inovafrik.com',
    gradient: 'from-amber-500/25 via-orange-500/20 to-emerald-400/10',
    icon: TrendingUp,
    image:
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80',
    metric: 'Business cases, modèles, décision',
  },
  {
    title: 'INOV MECH',
    subtitle: 'Ingénierie Mécanique & Industrielle',
    url: 'https://mech.inovafrik.com',
    gradient: 'from-indigo-500/25 via-purple-500/20 to-emerald-500/15',
    icon: Cog,
    image:
      'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80',
    metric: 'Conception, fabrication, maintenance',
  },
];

const Entities = () => {
  const { mode } = useThemeMode();
  return (
    <section
      id="entities"
      className={`py-24 relative overflow-hidden ${mode === 'clear' ? 'bg-slate-50' : 'bg-slate-950'}`}
    >
      <div
        className={`absolute inset-0 ${
          mode === 'clear'
            ? 'bg-gradient-to-b from-white via-slate-100 to-slate-200'
            : 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900'
        }`}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${mode === 'clear' ? 'rgba(16, 185, 129, 0.14)' : 'rgba(52, 211, 153, 0.08)'} 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>Nos Entités</h2>
            <p className={`text-lg max-w-2xl ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>
              Une architecture de groupe claire, des entités spécialisées et des redirections directes vers chaque écosystème métier.
            </p>
          </div>
          <div
            className={`flex items-center gap-3 text-sm px-4 py-2 rounded-full border ${
              mode === 'clear'
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20'
            }`}
          >
            <Globe2 size={18} />
            <span>Holding INOV AFRIK · Présence multi-pays</span>
          </div>
        </motion.div>

        <motion.a
          href={entities[0].url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -4 }}
          className={`relative block rounded-3xl overflow-hidden mb-10 min-h-[300px] sm:min-h-[360px] border ${
            mode === 'clear' ? 'border-slate-200 bg-white shadow-sm' : 'border-slate-800 bg-slate-900/70'
          }`}
        >
          <img src={entities[0].image} alt={entities[0].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              mode === 'clear'
                ? 'from-white/35 via-white/45 to-white/20'
                : 'from-slate-950/75 via-slate-950/65 to-slate-900/50'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${entities[0].gradient} opacity-15`} />

          <div className="relative z-10 p-6 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 min-h-[300px] sm:min-h-[360px]">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 p-2 ring-2 ring-emerald-500/40 shadow-xl">
                <img src={entities[0].logo} alt={entities[0].title} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-300 mb-2">
                  <Sparkles size={14} /> Entité phare
                </div>
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>{entities[0].title}</h3>
                <p className={`text-base sm:text-lg mb-2 ${mode === 'clear' ? 'text-slate-700' : 'text-gray-300'}`}>{entities[0].subtitle}</p>
                <p className={`${mode === 'clear' ? 'text-emerald-700' : 'text-emerald-200'} text-sm sm:text-base`}>{entities[0].metric}</p>
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 text-base sm:text-lg font-medium ${mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'}`}>
              Accéder au site
              <ArrowUpRight size={18} />
            </div>
          </div>
        </motion.a>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {entities.slice(1).map((entity, index) => (
            <motion.a
              key={entity.title}
              href={entity.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-2xl p-5 sm:p-8 shadow-lg transition-all duration-300 min-h-[240px] sm:min-h-[270px] border ${
                mode === 'clear'
                  ? 'border-slate-200 bg-white'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              <img
                src={entity.image}
                alt={entity.title}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${entity.gradient} opacity-12`} />
              <div className={`absolute inset-0 ${mode === 'clear' ? 'bg-white/18' : 'bg-slate-950/20'}`} />

              <div className="relative z-10 flex items-start gap-4 sm:gap-5 h-full">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center"
                >
                  <entity.icon className={mode === 'clear' ? 'text-emerald-700' : 'text-white'} size={22} />
                </motion.div>

                <div className="flex-1">
                  <h3 className={`text-xl sm:text-2xl font-semibold ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>{entity.title}</h3>
                  <p className={`text-sm sm:text-base mt-1 ${mode === 'clear' ? 'text-slate-700' : 'text-gray-300'}`}>{entity.subtitle}</p>
                  <p className={`text-sm sm:text-base mt-3 ${mode === 'clear' ? 'text-emerald-700' : 'text-emerald-200'}`}>{entity.metric}</p>
                  <div className={`mt-4 sm:mt-6 inline-flex items-center gap-2 text-sm sm:text-base group-hover:gap-3 transition-all duration-300 ${
                    mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'
                  }`}>
                    Accéder au site
                    <ArrowUpRight size={16} />
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
