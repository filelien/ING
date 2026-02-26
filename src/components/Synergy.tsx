import { motion } from 'framer-motion';
import { Sparkles, Leaf, Users, GraduationCap, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <section id="synergy" className="py-24 bg-slate-900 relative overflow-hidden">
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
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Engagement & Impact</h2>
            <p className="text-gray-400 max-w-3xl">
              Une stratégie d’impact mesurable : durabilité, emploi local, transfert de compétences et innovation africaine.
            </p>
          </div>
          <div className="flex items-center gap-2 text-emerald-300 text-sm bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full">
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
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div className="text-2xl font-bold text-emerald-300">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
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
              className="group relative rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/60 backdrop-blur-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/85 to-slate-900/85" />

              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                    <item.icon className="text-emerald-300" size={22} />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-300">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.focus.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
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
