import { motion } from 'framer-motion';
import { Layers, FileText, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const branches = ['INOV TECH', 'INOV ENERGY', 'INOV CIVIL', 'INOV ECO', 'INOV MECH'];

const GroupStructure = () => {
  return (
    <section id="structure" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-900/60" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-10"
        >
          <div className="lg:w-2/5 bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-emerald-400" size={22} />
              <h2 className="text-3xl font-bold text-white">Structure du groupe</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Holding INOV AFRIK avec pôles spécialisés. Gouvernance claire, identité légale publiée, et alignement stratégique sur l'Afrique.
            </p>
            <div className="space-y-3">
              {branches.map((name) => (
                <div key={name} className="flex items-center gap-3 text-sm text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-3/5 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 border border-slate-800 rounded-2xl bg-slate-900/60 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-emerald-400" size={20} />
                <h3 className="text-xl text-white font-semibold">Investisseurs & gouvernance</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Accès dédié pour investisseurs : gouvernance, organigramme, documents juridiques, rapports trimestriels.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-emerald-300 text-sm hover:text-emerald-200 transition-colors"
              >
                Demander l'espace investisseurs <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="p-6 border border-slate-800 rounded-2xl bg-slate-900/60 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileText className="text-emerald-400" size={20} />
                <h3 className="text-xl text-white font-semibold">Rapports & conformité</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Téléchargez : rapport annuel, code éthique, politique RSE, conformité RGPD, certifications clés.
              </p>
              <button className="inline-flex items-center gap-2 text-emerald-300 text-sm hover:text-emerald-200 transition-colors">
                Télécharger le kit groupe
                <ArrowUpRight size={16} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GroupStructure;
