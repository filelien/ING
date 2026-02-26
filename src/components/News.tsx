import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    date: 'Jan 2026',
    title: 'Mise en service d\'un micro-réseau solaire 500 kW',
    summary: 'Livraison et monitoring 24/7 pour un site industriel, -38% sur les coûts énergétiques.',
    tag: 'Énergie',
  },
  {
    date: 'Déc 2025',
    title: 'Renforcement cybersécurité d\'une institution financière',
    summary: 'SOC partagé, IAM renforcé et plan de remédiation priorisé pour les accès sensibles.',
    tag: 'Cybersécurité',
  },
  {
    date: 'Nov 2025',
    title: 'Hub logistique 5 000 m² : OPC et HSE livrés',
    summary: 'Suivi de chantier et contrôle technique pour un centre logistique régional.',
    tag: 'Génie Civil',
  },
];

const News = () => {
  return (
    <section id="news" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.12) 1px, transparent 0)',
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
            <h2 className="text-4xl font-bold text-white mb-2">Actualités du Groupe</h2>
            <p className="text-gray-400">Projets en cours, nouvelles références et innovations.</p>
          </div>
          <Link
            to="/contact"
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2"
          >
            Proposer un partenariat <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <Calendar size={14} />
                <span>{article.date}</span>
                <span className="px-2 py-1 bg-emerald-500/15 text-emerald-300 rounded-full">{article.tag}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{article.summary}</p>
              <button className="mt-4 text-emerald-400 text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200">
                Lire plus
                <ArrowUpRight size={16} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
