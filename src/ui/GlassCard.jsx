import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  delay = 0,
  animate = {},
  transition,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={transition || { duration: 0.5, delay }}
    animate={animate}
    className={`backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-white/40 dark:border-slate-800/50 rounded-3xl shadow-[0_8px_32px_0_rgba(139,0,0,0.08)] transition-all ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
