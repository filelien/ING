import { motion } from 'framer-motion';
import { Sparkles, Leaf, Users, GraduationCap, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../contexts/ThemeModeContext';

const impactStats = [
  { label: 'Programmes à impact', value: '35+' },
  { label: 'Emplois locaux soutenus', value: '500+' },
  { label: 'Personnes formées', value: '800+' },
  { label: 'Réduction énergétique observée', value: '-38%' },
];

const impactPillars = [
  {
    icon: Leaf,
    title: 'Développement durable',
    metric: '35+ projets verts',
    description:
      'Conception de solutions bas carbone et optimisation énergétique sur des programmes industriels et urbains.',
    focus: ['Énergie propre', 'Efficacité', 'Trajectoire carbone'],
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    icon: Users,
    title: 'Emploi local',
    metric: '500+ opportunités',
    description:
      'Création d’emplois qualifiés, sous-traitance locale et montée en compétences des équipes opérationnelles.',
    focus: ['Sous-traitance locale', 'Insertion technique', 'Ancrage territorial'],
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    icon: GraduationCap,
    title: 'Transfert de compétences',
    metric: '800+ apprenants',
    description:
      'Programmes de formation technique, accompagnement terrain et capitalisation méthodologique durable.',
    focus: ['Formations certifiantes', 'Mentorat projet', 'Knowledge base'],
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    icon: Lightbulb,
    title: 'Innovation africaine',
    metric: 'Labs & prototypes',
    description:
      'Développement de solutions adaptées aux contraintes locales, testées en conditions réelles d’exploitation.',
    focus: ['R&D appliquée', 'Prototypage', 'Industrialisation'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
  },
];

const Synergy = () => {
  const { mode } = useThemeMode();
  return (
    <section
      id="synergy"
      className={`py-24 relative overflow-hidden ${mode === 'clear' ? 'bg-slate-50' : 'bg-slate-900'}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${mode === 'clear' ? 'rgba(16, 185, 129, 0.14)' : 'rgba(52, 211, 153, 0.12)'} 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      <div className={`absolute -top-24 -right-24 w-80 h-80 blur-3xl rounded-full ${mode === 'clear' ? 'bg-emerald-300/20' : 'bg-emerald-500/10'}`} />
      <div className={`absolute -bottom-24 -left-24 w-80 h-80 blur-3xl rounded-full ${mode === 'clear' ? 'bg-cyan-300/20' : 'bg-cyan-500/10'}`} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10"
        >
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>Engagement & Impact</h2>
            <p className={`max-w-3xl ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>
              Une stratégie d’impact mesurable : durabilité, emploi local, transfert de compétences et innovation africaine.
            </p>
          </div>
          <div
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border ${
              mode === 'clear'
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30'
            }`}
          >
            <Sparkles size={18} />
            <span>Programme d’impact groupe</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {impactStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * index }}
              className={`rounded-xl p-4 border ${mode === 'clear' ? 'bg-white shadow-sm border-slate-200' : 'bg-slate-950/60 border-slate-800'}`}
            >
              <div className={`text-2xl font-bold ${mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'}`}>{item.value}</div>
              <div className={`text-sm ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {impactPillars.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 * index }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden border ${
                mode === 'clear'
                  ? 'bg-white border-slate-200 shadow-sm'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  mode === 'clear'
                    ? 'from-white/50 via-white/70 to-white/55'
                    : 'from-slate-950/85 via-slate-950/80 to-slate-900/70'
                }`}
              />

              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${mode === 'clear' ? 'bg-emerald-50' : 'bg-emerald-500/15'}`}>
                    <item.icon className={mode === 'clear' ? 'text-emerald-700' : 'text-emerald-300'} size={22} />
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      mode === 'clear'
                        ? 'text-emerald-700 border-emerald-200 bg-emerald-50'
                        : 'text-emerald-300 border-emerald-500/30'
                    }`}
                  >
                    {item.metric}
                  </span>
                </div>

                <h3 className={`text-xl font-semibold mb-2 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${mode === 'clear' ? 'text-slate-700' : 'text-gray-300'}`}>{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border ${
                        mode === 'clear'
                          ? 'bg-emerald-50 border-emerald-100 text-emerald-700'
                          : 'bg-slate-800/80 border-slate-700 text-gray-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    mode === 'clear' ? 'text-emerald-700 hover:text-emerald-600' : 'text-emerald-300 hover:text-emerald-200'
                  }`}
                >
                  Lancer un programme d’impact
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Synergy;
