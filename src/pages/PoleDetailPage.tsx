import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { poles } from '../data/poles';

const PoleDetailPage = () => {
  const { slug } = useParams();
  const pole = useMemo(() => poles.find((p) => p.slug === slug), [slug]);

  if (!pole) {
    return (
      <div className="pt-[120px] min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4">
        <p className="text-xl">Pôle introuvable.</p>
        <Link to="/poles" className="text-emerald-400 hover:text-emerald-300">Retour aux pôles</Link>
      </div>
    );
  }

  return (
    <div className="pt-[96px] bg-slate-950 min-h-screen">
      <section className="relative overflow-hidden py-16 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.75), rgba(2,6,23,0.85)), url(${pole.heroImage})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${pole.gradient} opacity-30 mix-blend-screen`} />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative z-10 container mx-auto">
          <div className="flex items-center justify-between gap-4 mb-6 text-sm text-gray-300">
            <Link to="/poles" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200">
              <ArrowLeft size={16} /> Retour aux pôles
            </Link>
            <span className="uppercase tracking-[0.2em] text-gray-400">Pôle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pole.title}</h1>
          <p className="text-xl text-gray-300 mb-4">{pole.tagline}</p>
          <p className="text-lg text-gray-200 max-w-4xl mb-6">{pole.description}</p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            {pole.highlights.map((h) => (
              <span key={h.label} className="px-3 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="font-semibold text-white mr-1">{h.value}</span>
                <span className="text-gray-300">{h.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Services phares</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {pole.services.map((service) => (
              <div key={service} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="text-emerald-400 mt-1" size={18} />
                <p className="text-gray-200">{service}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold text-white">Engager le pôle</h3>
          <p className="text-gray-400 text-sm">
            Contact direct avec un responsable de pôle. Possibilité de NDA, qualification rapide, et cadrage en 72h pour les projets critiques.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            Parler à un responsable
            <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/projets"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-700 text-gray-200 hover:border-emerald-500/60 hover:text-white transition-colors"
          >
            Voir les références
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default PoleDetailPage;
