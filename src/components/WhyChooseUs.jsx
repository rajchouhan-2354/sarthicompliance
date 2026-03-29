import { Rocket, Cpu, Briefcase, TrendingUp, Star } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "One-Stop Ecosystem",
      desc: "GST, accounting, web and AI under one roof to minimize friction.",
      icon: <Rocket size={20} className="text-red-800" />,
    },
    {
      title: "Tech-First Audit",
      desc: "Our AI-driven audits catch errors that human eyes miss.",
      icon: <Cpu size={20} className="text-red-800" />,
    },
    {
      title: "Expert Support",
      desc: "Direct channel to verified CAs and Developers.",
      icon: <Briefcase size={20} className="text-red-800" />,
    },
    {
      title: "Transparent ROI",
      desc: "Affordable pricing models designed for Indian startups.",
      icon: <TrendingUp size={20} className="text-red-800" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest bg-red-100 text-red-800 rounded-full mb-6">
              WHY SARTHI
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-10 leading-tight tracking-tight">
              Unified Infrastructure For Business Growth
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((item, i) => (
                <div key={i}>
                  <div className="mb-4">{item.icon}</div>

                  <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 relative">
            {/* GRADIENT BORDER */}
            <div className="relative p-[2px] bg-gradient-to-br from-red-800 to-yellow-500 rounded-[50px]">
              <div className="bg-white dark:bg-slate-900 rounded-[48px] p-12 relative overflow-hidden">
                {/* STAR ICON */}
                <div className="absolute top-6 right-6">
                  <Star
                    className="text-yellow-500 animate-pulse"
                    fill="currentColor"
                  />
                </div>

                {/* BIG NUMBER */}
                <h3 className="text-6xl font-black text-red-800 mb-2">99.9%</h3>

                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
                  Compliance Accuracy Rate
                </p>

                {/* FAKE GRAPH LINES */}
                <div className="space-y-4">
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-full"></div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-full"></div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
