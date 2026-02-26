import { motion } from 'framer-motion';
import {
  Code,
  Zap,
  Building2,
  TrendingUp,
  Cog,
  Radio,
  Sprout,
  Home,
  GraduationCap,
  Shield,
  Recycle,
} from 'lucide-react';
import PoleCard from './PoleCard';
import { poles } from '../data/poles';
import { Link } from 'react-router-dom';

const iconMap = {
  technologies: Code,
  energie: Zap,
  'genie-civil': Building2,
  economie: TrendingUp,
  mecanique: Cog,
  telecoms: Radio,
  agriculture: Sprout,
  immobilier: Home,
  formation: GraduationCap,
  securite: Shield,
  environnement: Recycle,
} as const;

const Poles = () => {
  const spotlightImages = poles.slice(0, 4).map((pole) => ({ title: pole.title, image: pole.heroImage, slug: pole.slug }));

  return (
    <section id="poles" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Pôles d'<span className="text-emerald-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des pôles complémentaires pour répondre aux défis technologiques, énergétiques, industriels et territoriaux du développement africain.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {poles.map((pole) => (
              <Link
                key={pole.slug}
                to={`/poles/${pole.slug}`}
                className="px-3 py-2 rounded-full border border-slate-700 text-xs md:text-sm text-gray-300 hover:text-emerald-300 hover:border-emerald-500/60 transition-colors"
              >
                {pole.title}
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {spotlightImages.map((item) => (
              <Link
                key={item.title}
                to={`/poles/${item.slug}`}
                className="relative h-28 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/60 transition-colors block"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-left text-xs text-gray-200 line-clamp-2">{item.title}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poles.map((pole, index) => {
            const Icon = iconMap[pole.slug as keyof typeof iconMap] ?? Code;
            return (
              <PoleCard
                key={pole.slug}
                icon={Icon}
                title={pole.title}
                description={pole.description}
                color={pole.gradient}
                glowColor="rgba(52,211,153,0.28)"
                href={`/poles/${pole.slug}`}
                index={index}
                image={pole.heroImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Poles;
