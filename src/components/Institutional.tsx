import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Globe2, CheckCircle2 } from 'lucide-react';

const Institutional = () => {
  const cards = [
    {
      icon: ShieldCheck,
      title: 'Identité légale',
      lines: [
        'RCCM: TG-LFW-01-2023-A10-02858',
        'NIF: 1001853268',
        'CNSS: 71430',
        'Siège: Lomé, Togo · Afrique de l\'Ouest',
      ],
    },
    {
      icon: FileText,
      title: 'Conformité & RGPD',
      lines: [
        'Politique de confidentialité appliquée',
        'Conditions d\'utilisation et Mentions légales disponibles',
        'Traitement des données conforme RGPD',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Certifications clés',
      lines: [
        'Oracle · AWS · Azure',
        'ISO 27001 · CISSP',
        'CKA (Kubernetes)',
      ],
    },
    {
      icon: Globe2,
      title: 'Portée et langues',
      lines: [
        'Présence et partenaires dans 180+ pays',
        'Afrique de l\'Ouest comme base opérationnelle',
        'Langue de travail : Français',
      ],
    },
  ];

  return (
    <section id="institutional" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Structure <span className="text-emerald-400">Institutionnelle</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Transparence, conformité et certifications pour un groupe d\'ingénierie crédible et responsable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <card.icon className="text-emerald-400" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                {card.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutional;
