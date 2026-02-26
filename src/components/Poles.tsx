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
            Cinq domaines d'expertise pour répondre aux défis stratégiques du développement africain
          </p>
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Poles;
