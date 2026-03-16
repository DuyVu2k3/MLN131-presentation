import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ImageCardProps {
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  gradient?: string;
  index?: number;
}

export function ImageCard({ 
  title, 
  description, 
  image, 
  icon: Icon, 
  gradient = "from-red-500 to-yellow-500",
  index = 0 
}: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          {Icon && (
            <div className={`absolute top-4 right-4 bg-gradient-to-br ${gradient} p-3 rounded-full group-hover:scale-110 transition-transform`}>
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-white/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
