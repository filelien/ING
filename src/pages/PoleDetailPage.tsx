import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { poles } from '../data/poles';
import { poleExtendedData } from '../data/poleExtendedData';
import { poleInsights } from '../data/poleInsights';

const PoleDetailPage = () => {
  const { slug } = useParams();
  const pole = useMemo(() => poles.find((p) => p.slug === slug), [slug]);
  const extended = useMemo(() => (slug ? poleExtendedData[slug] : undefined), [slug]);
  const insight = useMemo(() => (slug ? poleInsights[slug] : undefined), [slug]);
  const currentIndex = useMemo(() => poles.findIndex((p) => p.slug === slug), [slug]);
  const previousPole = currentIndex > 0 ? poles[currentIndex - 1] : poles[poles.length - 1];
  const nextPole = currentIndex >= 0 && currentIndex < poles.length - 1 ? poles[currentIndex + 1] : poles[0];
  const relatedPoles = useMemo(
    () => poles.filter((p) => p.slug !== slug).slice(0, 3),
    [slug]
  );

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
            to={`/contact?pole=${pole.slug}`}
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

          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <Link
              to={`/poles/${previousPole.slug}`}
              className="px-3 py-2 rounded-lg border border-slate-700 text-gray-300 hover:text-emerald-300 hover:border-emerald-500/60 transition-colors text-center"
            >
              ← {previousPole.title}
            </Link>
            <Link
              to={`/poles/${nextPole.slug}`}
              className="px-3 py-2 rounded-lg border border-slate-700 text-gray-300 hover:text-emerald-300 hover:border-emerald-500/60 transition-colors text-center"
            >
              {nextPole.title} →
            </Link>
          </div>
        </motion.div>
      </section>

      {extended && (
        <section className="container mx-auto px-6 pb-8 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Domaines d’intervention</h3>
            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
              {extended.domains.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Secteurs clients</h3>
            <div className="flex flex-wrap gap-2">
              {extended.clientSectors.map((sector) => (
                <span key={sector} className="px-3 py-2 rounded-full text-sm bg-slate-800/80 border border-slate-700 text-gray-200">
                  {sector}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm lg:col-span-2"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Cas d’usage de référence</h3>
            <h4 className="text-lg font-semibold text-emerald-300 mb-4">{extended.caseStudy.title}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p className="text-gray-300"><span className="text-white font-medium">Contexte :</span> {extended.caseStudy.context}</p>
              <p className="text-gray-300"><span className="text-white font-medium">Problématique :</span> {extended.caseStudy.challenge}</p>
              <p className="text-gray-300"><span className="text-white font-medium">Solution :</span> {extended.caseStudy.solution}</p>
              <p className="text-emerald-200"><span className="text-emerald-300 font-medium">Résultat :</span> {extended.caseStudy.result}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm lg:col-span-2"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Engagements opérationnels</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {extended.commitments.map((commitment) => (
                <div key={commitment} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-gray-200">
                  {commitment}
                </div>
              ))}
            </div>
          </motion.div>

          {insight && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Modèle d'exécution</h3>
                <ol className="space-y-2 text-sm text-gray-300">
                  {insight.executionModel.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="text-emerald-300 font-semibold">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85 }}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Livrables clés</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {insight.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm lg:col-span-2"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Opportunités traitées par le pôle</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {insight.opportunities.map((item) => (
                    <div key={item} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-emerald-200">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </section>
      )}

      <section className="container mx-auto px-6 pb-14">
        <h3 className="text-2xl font-semibold text-white mb-5">Explorer les autres pôles</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {relatedPoles.map((item) => (
            <Link
              key={item.slug}
              to={`/poles/${item.slug}`}
              className="group relative rounded-xl border border-slate-800 overflow-hidden h-36 hover:border-emerald-500/60 transition-colors"
            >
              <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-sm font-semibold text-white line-clamp-2">{item.title}</div>
                <div className="text-xs text-emerald-300">Accéder au pôle</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PoleDetailPage;
