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
import { useThemeMode } from '../contexts/ThemeModeContext';

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
  const { mode } = useThemeMode();
  const spotlightImages = poles.slice(0, 4).map((pole) => ({ title: pole.title, image: pole.heroImage, slug: pole.slug }));

  return (
    <section
      id="poles"
      className={`py-24 relative overflow-hidden ${mode === 'clear' ? 'bg-slate-50' : 'bg-slate-950'}`}
    >
      <div
        className={`absolute inset-0 ${
          mode === 'clear'
            ? 'bg-gradient-to-b from-white via-slate-100 to-slate-200 opacity-80'
            : 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-50'
        }`}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${mode === 'clear' ? 'text-slate-900' : 'text-white'}`}>
            Nos Pôles d'<span className={mode === 'clear' ? 'text-emerald-600' : 'text-emerald-400'}>Excellence</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${mode === 'clear' ? 'text-slate-600' : 'text-gray-400'}`}>
            Des pôles complémentaires pour répondre aux défis technologiques, énergétiques, industriels et territoriaux du développement africain.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {poles.map((pole) => (
              <Link
                key={pole.slug}
                to={`/poles/${pole.slug}`}
                className={`px-3 py-2 rounded-full border text-xs md:text-sm transition-colors ${
                  mode === 'clear'
                    ? 'border-slate-300 text-slate-700 hover:text-emerald-600 hover:border-emerald-400'
                    : 'border-slate-700 text-gray-300 hover:text-emerald-300 hover:border-emerald-500/60'
                }`}
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
                className={`relative h-28 rounded-xl overflow-hidden border transition-colors block ${
                  mode === 'clear' ? 'border-slate-300 hover:border-emerald-400' : 'border-slate-800 hover:border-emerald-500/60'
                }`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    mode === 'clear'
                      ? 'from-white via-white/60 to-transparent'
                      : 'from-slate-950 via-slate-950/30 to-transparent'
                  }`}
                />
                <div
                  className={`absolute bottom-2 left-3 right-3 text-left text-xs line-clamp-2 ${
                    mode === 'clear' ? 'text-slate-800' : 'text-gray-200'
                  }`}
                >
                  {item.title}
                </div>
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
