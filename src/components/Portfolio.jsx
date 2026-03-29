import { ExternalLink, Layout } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "NextGen Fintech",
      category: "Branding & Web Platform",
      color: "bg-red-800",
    },
    {
      title: "Indo-Logistics AI",
      category: "Automated Compliance Audit",
      color: "bg-slate-900",
    },
    {
      title: "Organic Bharat",
      category: "E-commerce & Marketing",
      color: "bg-yellow-600",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest bg-red-100 text-red-800 rounded-full mb-4">
              IMPACT
            </span>

            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Our Portfolio of Growth
            </h2>
          </div>

          <button className="text-sm font-bold uppercase text-red-800 flex items-center gap-2">
            View All Projects
          </button>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              {/* CARD */}
              <div
                className={`h-80 rounded-[40px] ${project.color} relative overflow-hidden flex items-center justify-center`}
              >
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

                {/* ICON CENTER */}
                <Layout className="text-white/20 w-28 h-28" />

                {/* TOP RIGHT ICON */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 text-white">
                  <ExternalLink size={18} />
                </div>
              </div>

              {/* TEXT */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
