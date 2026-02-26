import { motion } from 'framer-motion';
import { Building2, Handshake, ShieldCheck, Globe2 } from 'lucide-react';

const groups = [
  {
    icon: Handshake,
    title: 'Institutions & bailleurs',
    items: ['Ministères & agences publiques', 'Partenaires financiers régionaux', 'Programmes d\'infrastructure et énergie'],
    tone: 'from-emerald-500/30 to-blue-500/30',
  },
  {
    icon: Building2,
    title: 'Grands comptes & industriels',
    items: ['Énergie, industrie, transport', 'Santé & infrastructures critiques', 'Télécom & services financiers'],
    tone: 'from-slate-500/30 to-slate-300/20',
  },
  {
    icon: ShieldCheck,
    title: 'Certifications & alliances',
    items: ['Oracle · AWS · Azure', 'ISO 27001 · CISSP', 'CKA · Partenaires cybersécurité'],
    tone: 'from-amber-500/25 to-emerald-400/25',
  },
  {
    icon: Globe2,
    title: 'Réseau & présence',
    items: ['Base opérationnelle : Togo', 'Afrique de l\'Ouest en priorité', 'Présence et partenaires dans 180+ pays'],
    tone: 'from-cyan-500/30 to-emerald-500/20',
  },
];

const Partnerships = () => {
  return (
    <section id="partnerships" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partenariats & <span className="text-emerald-400">Alliances</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Un réseau institutionnel et industriel pour sécuriser l\'exécution des projets et la confiance des parties prenantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className="relative overflow-hidden bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.tone} opacity-30`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <group.icon className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{group.title}</h3>
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
