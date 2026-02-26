import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            L'Ingénierie au service du développement durable africain
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-4 font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            INOV AFRIK est un groupe panafricain spécialisé dans l'ingénierie technologique, énergétique et infrastructurelle, avec une approche intégrée orientée performance et innovation.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Structure de groupe solide, expertise technique maîtrisée, capacité d'exécution terrain et ambition continentale au service des institutions et des industriels.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projets"
                className="px-8 py-4 inline-flex bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300 font-medium"
              >
                Découvrir nos expertises
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-8 py-4 inline-flex border-2 border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 font-medium"
              >
                Parler à un ingénieur
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="text-emerald-400" size={32} />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;
