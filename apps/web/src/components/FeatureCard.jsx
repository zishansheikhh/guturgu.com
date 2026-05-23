import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
    >
      {/* Vibrant hover glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-secondary/20 to-tertiary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/25">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-balance group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
