const Badge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-800/10 text-red-800 dark:bg-red-500/10 dark:text-red-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-red-800/20">
    {children}
  </span>
);

export default Badge;
