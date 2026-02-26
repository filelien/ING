import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PoleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  glowColor: string;
  index: number;
  href: string;
  image?: string;
}

const PoleCard = ({ icon: Icon, title, description, color, glowColor, index, href, image }: PoleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full transition-all duration-300 hover:border-emerald-500/50 overflow-hidden">
        {image && (
          <div className="absolute inset-x-0 top-0 h-32 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/50 to-slate-900" />
          </div>
        )}

        {isHovered && (
          <motion.div
            className="absolute inset-0 opacity-20 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            style={{ background: glowColor }}
          />
        )}

        <motion.div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 relative z-10 ${image ? 'mt-10' : ''}`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="text-white" size={32} />
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-4 relative z-10">{title}</h3>
        <p className="text-gray-400 leading-relaxed relative z-10">{description}</p>

        <motion.div whileHover={{ x: 4 }} className="relative z-10 mt-6 inline-flex">
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            Découvrir le pôle
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default PoleCard;
