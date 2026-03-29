import { motion } from "framer-motion";
import { ArrowRight, Cpu, ShieldCheck, Zap, Briefcase } from "lucide-react";

const Hero = ({ scrollTo }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-red-50/40 to-transparent dark:from-red-950/10 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center min-h-[80vh]">
        {/* LEFT */}
        <div className="lg:w-1/2 text-center lg:text-left z-10 mb-0 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex px-4 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold tracking-widest mb-6">
              NEXT-GEN COMPLIANCE
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900 dark:text-white mb-8">
              Your Business <span className="text-red-800">Sarthi</span> — From
              Compliance to Growth
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              We help businesses stay legally compliant while scaling through
              digital solutions and modern technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-red-800 text-white rounded-2xl font-bold shadow-2xl hover:bg-red-900 transition-all flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:border-red-800 transition-all"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square">
            {/* MAIN CARD */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="w-full h-full bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-[80px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/50 dark:border-slate-700/30 flex flex-col items-center justify-center p-12 overflow-hidden relative"
            >
              {/* Chart */}
              <div className="w-full h-1/2 flex items-end justify-center space-x-4">
                {[40, 70, 100, 60, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className={`w-10 rounded-t-2xl ${
                      i === 2
                        ? "bg-red-800"
                        : i === 4
                          ? "bg-yellow-500"
                          : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-3xl font-black">SCALE INDEX</h3>
                <p className="text-xs text-slate-400 tracking-widest">
                  CORPORATE STABILITY DATA
                </p>
              </div>
            </motion.div>

            {/* AI CARD */}
            <div className="absolute -top-6 -right-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-3">
              <Cpu className="text-red-800" />
              <div>
                <p className="text-xs font-bold text-red-800">ACTIVE NOW</p>
                <p className="text-sm font-semibold">AI Audit & Insights</p>
              </div>
            </div>

            {/* GST CARD */}
            <div className="absolute top-[40%] -right-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
              <ShieldCheck className="text-green-600" />
              <span className="text-sm font-medium">GST Compliance</span>
            </div>

            {/* WEB CARD */}
            <div className="absolute -bottom-6 right-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
              <Zap className="text-yellow-500" />
              <span className="text-sm font-medium">Web Dev + AI</span>
            </div>

            {/* Background icon */}
            <div className="absolute top-[20%] left-[-10%] opacity-20">
              <Briefcase size={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
