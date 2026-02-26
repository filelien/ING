import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Target, Eye, Award, Globe, Quote, UserCheck, Shield, Layers, Landmark } from 'lucide-react';
import { useEffect } from 'react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Qualité et rigueur dans chaque projet',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'Solutions créatives et technologies de pointe',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Shield,
    title: 'Rigueur technique',
    description: 'Méthodes, normes et sécurité d\'exécution',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Award,
    title: 'Intégrité',
    description: 'Transparence et éthique professionnelle',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Globe,
    title: 'Impact Durable',
    description: 'Contribution au développement africain',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80',
  },
];

const strategicBlocks = [
  {
    icon: Eye,
    title: 'Vision',
    content:
      'Contribuer au développement structurel de l\'Afrique à travers des solutions technologiques, énergétiques et industrielles durables.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Target,
    title: 'Mission',
    content:
      'Concevoir, développer et exécuter des projets à forte valeur ajoutée dans des secteurs stratégiques pour les institutions et les entreprises.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Landmark,
    title: 'Gouvernance',
    content:
      'Direction opérationnelle, pilotage par indicateurs, conformité légale publiée et gestion des risques orientée continuité d\'activité.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  },
];

const stats = [
  { value: 5, suffix: '+', label: 'Pôles d\'ingénierie' },
  { value: 120, suffix: '+', label: 'Projets livrés' },
  { value: 180, suffix: '+', label: 'Pays connectés via notre réseau' },
  { value: 6, suffix: '', label: 'Certifications majeures' },
];

const milestones = [
  {
    year: '2018',
    title: 'Création d\'INOV AFRIK',
    detail: 'Lancement à Lomé autour du pôle Technologies et premières missions IT critiques.',
  },
  {
    year: '2020',
    title: 'Diversification Énergie',
    detail: 'Ouverture du pôle Énergie avec les premiers micro-réseaux solaires industriels.',
  },
  {
    year: '2022',
    title: 'Structuration Génie Civil & Mécanique',
    detail: 'Renforcement de l\'ingénierie terrain et supervision de chantiers majeurs.',
  },
  {
    year: '2024',
    title: 'Rayonnement régional',
    detail: 'Présence consolidée dans 180+ pays via partenaires et équipes certifiées.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Le <span className="text-emerald-400">Groupe</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              <strong className="text-white">INOV AFRIK</strong> est un groupe panafricain d'ingénierie qui travaille sur des projets réels : réseaux solaires, modernisation d'infrastructures, plateformes critiques, supervision de chantiers et sécurisation de systèmes.
            </p>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Basés au Togo (Afrique de l'Ouest) et appuyés par un réseau présent dans 180+ pays, nous mobilisons cinq pôles d'excellence pour concevoir, exécuter et maintenir des solutions adaptées aux contraintes locales.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Identité légale vérifiable (RCCM, NIF, CNSS), certifications techniques (Oracle, AWS, Azure, ISO 27001, CISSP, CKA) et culture d'intégrité guident chacune de nos interventions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <AnimatedStat key={stat.label} {...stat} index={index} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 mt-4"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Vision, Mission & <span className="text-emerald-400">Gouvernance</span>
          </h3>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-8">
            Un cap stratégique clair, une mission d'exécution concrète et une gouvernance orientée performance, conformité et durabilité.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {strategicBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-28 -mx-6 -mt-6 mb-5 overflow-hidden">
                  <img src={block.image} alt={block.title} className="w-full h-full object-cover opacity-45" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <block.icon className="text-emerald-400" size={22} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{block.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{block.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Nos <span className="text-emerald-400">Valeurs</span>
          </h3>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Une culture d'entreprise orientée discipline opérationnelle, innovation utile et impact durable à l'échelle panafricaine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 overflow-hidden ${
                index === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto lg:col-start-2 lg:col-end-4' : ''
              }`}
            >
              <div className="relative h-24 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl">
                <img src={value.image} alt={value.title} className="w-full h-full object-cover opacity-35" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-emerald-400" size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
              <p className="text-sm text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Quote className="text-emerald-400" size={24} />
              <h4 className="text-xl font-bold text-white">Message du fondateur</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              "INOV AFRIK est né sur les chantiers et dans les salles serveurs, pas dans un slide deck. Notre priorité : livrer des projets fiables, mesurables et adaptés aux réalités africaines, avec une gouvernance claire et des équipes certifiées."
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <UserCheck size={18} className="text-emerald-400" />
              <span>F. K., Fondateur & Directeur Général</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-emerald-400" size={22} />
              <h4 className="text-xl font-bold text-white">Timeline du groupe</h4>
            </div>
            <div className="space-y-4">
              {milestones.map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div className="w-16 text-emerald-400 font-semibold">{item.year}</div>
                  <div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type StatProps = { value: number; suffix: string; label: string; index: number };

const AnimatedStat = ({ value, suffix, label, index }: StatProps) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 1.2, delay: 0.1 * index });
    return controls.stop;
  }, [motionValue, value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-emerald-400 mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
};

export default About;
