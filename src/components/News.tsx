import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight, Clock3, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThemeMode } from '../contexts/ThemeModeContext';

const featured = {
  date: 'Fév 2026',
  title: 'INOV AFRIK lance un programme intégré énergie + digital pour infrastructures critiques',
  summary:
    'Un programme multi-sites associant supervision temps réel, cybersécurité et optimisation énergétique pour améliorer la résilience opérationnelle.',
  tag: 'Programme Groupe',
  read: '5 min',
  image:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
};

const articles = [
  {
    date: 'Jan 2026',
    title: 'Mise en service d’un micro-réseau solaire 500 kW',
    summary: 'Livraison et monitoring 24/7 pour un site industriel, avec réduction de 38% des coûts énergétiques.',
    tag: 'Énergie',
    read: '3 min',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80',
  },
  {
    date: 'Déc 2025',
    title: 'Renforcement cybersécurité d’une institution financière',
    summary: 'SOC partagé, IAM renforcé et plan de remédiation priorisé pour les accès sensibles.',
    tag: 'Cybersécurité',
    read: '4 min',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    date: 'Nov 2025',
    title: 'Hub logistique 5 000 m² : OPC et HSE livrés',
    summary: 'Supervision chantier et contrôle technique pour un centre logistique régional.',
    tag: 'Génie Civil',
    read: '3 min',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
  },
];

const News = () => {
  const { mode } = useThemeMode();
  return (
    <section
      id="news"
      className={`py-24 relative overflow-hidden ${mode === 'clear' ? 'bg-slate-50' : 'bg-slate-900'}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${mode === 'clear' ? 'rgba(16, 185, 129, 0.14)' : 'rgba(52, 211, 153, 0.12)'} 1px, transparent 0)`,
            backgroundSize: '36px 36px',
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
            <h2 className={`text-4xl font-bold mb-2 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>Actualités du Groupe</h2>
            <p className={mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}>Réalisations, annonces stratégiques et innovations terrain.</p>
          </div>
          <Link
            to="/contact"
            className={`text-sm transition-colors duration-300 flex items-center gap-2 ${
              mode === 'clear' ? 'text-emerald-700 hover:text-emerald-600' : 'text-emerald-400 hover:text-emerald-300'
            }`}
          >
            Soumettre une actualité ou partenariat
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`relative overflow-hidden rounded-3xl mb-8 border ${
            mode === 'clear'
              ? 'border-slate-200 bg-white shadow-sm'
              : 'border-slate-800 bg-slate-950/70'
          }`}
        >
            <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover opacity-95" />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              mode === 'clear'
                ? 'from-white/30 via-white/45 to-white/20'
                : 'from-slate-950/75 via-slate-950/65 to-slate-900/55'
            }`}
          />

          <div className="relative z-10 p-7 md:p-10">
            <div className={`flex flex-wrap items-center gap-3 text-xs mb-4 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-300'}`}>
              <span
                className={`px-2.5 py-1 rounded-full ${
                  mode === 'clear' ? 'bg-emerald-100 text-emerald-700' : 'bg-emerald-500/15 text-emerald-300'
                }`}
              >
                {featured.tag}
              </span>
              <span className="inline-flex items-center gap-1"><Calendar size={14} /> {featured.date}</span>
              <span className="inline-flex items-center gap-1"><Clock3 size={14} /> {featured.read}</span>
            </div>

            <h3 className={`text-2xl md:text-3xl font-bold mb-3 max-w-4xl ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>{featured.title}</h3>
            <p className={`max-w-3xl mb-5 leading-relaxed ${mode === 'clear' ? 'text-slate-700' : 'text-gray-300'}`}>{featured.summary}</p>

            <button className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors">
              Lire l’analyse complète
              <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.article>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 * index }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 border ${
                mode === 'clear'
                  ? 'border-slate-200 bg-white shadow-sm hover:border-emerald-400'
                  : 'border-slate-800 bg-slate-950/60 hover:border-emerald-500/50'
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    mode === 'clear'
                      ? 'from-white/18 via-white/30 to-transparent'
                      : 'from-slate-950/60 via-slate-950/40 to-transparent'
                  }`}
                />
                <div
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs border ${
                    mode === 'clear'
                      ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}
                >
                  {article.tag}
                </div>
              </div>

              <div className="p-5">
                <div className={`flex items-center gap-3 text-xs mb-2 ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>
                  <span className="inline-flex items-center gap-1"><Calendar size={13} /> {article.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 size={13} /> {article.read}</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>{article.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${mode === 'clear' ? 'text-slate-700' : 'text-gray-400'}`}>{article.summary}</p>
                <button
                  className={`text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200 ${
                    mode === 'clear' ? 'text-emerald-700' : 'text-emerald-400'
                  }`}
                >
                  Lire plus
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex items-center justify-center"
        >
          <Link
            to="/projets"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border transition-colors ${
              mode === 'clear'
                ? 'border-slate-300 text-slate-700 hover:text-emerald-700 hover:border-emerald-400'
                : 'border-slate-700 text-gray-200 hover:text-emerald-300 hover:border-emerald-500/50'
            }`}
          >
            <Newspaper size={16} />
            Voir toutes les réalisations & actualités
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
