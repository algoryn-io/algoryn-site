import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  name: string;
  tagline: string;
  accentColor: string;
  description: string;
}

export function ProductCard({ name, tagline, accentColor, description }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col gap-6 rounded-3xl border border-[#1E1E35] bg-gradient-to-br from-[#0f0f18] to-[#1a1a2e] p-8 hover:border-[#2a2a45] transition-colors"
    >
      {/* Accent dot */}
      <div className="flex items-center gap-3">
        <div
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
      </div>

      {/* Tagline */}
      <p className="text-sm text-[#7A8AB0] tracking-wide">{tagline}</p>

      {/* Description */}
      <p className="text-base text-[#a0aac0] leading-relaxed flex-1">
        {description}
      </p>

      {/* Learn more link */}
      <div className="flex items-center gap-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn more</span>
        <ArrowRight className="h-4 w-4" />
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none blur-xl"
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  );
}
