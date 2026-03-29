import { ShieldCheck, Calculator, Globe, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Legal & Compliance",
      icon: <ShieldCheck size={28} />,
      items: [
        "GST Registration & Filing",
        "Income Tax (ITR) Services",
        "Business Licenses",
        "UDYAM / MSME Registration",
        "TAN / PAN / DSC Services",
      ],
    },
    {
      title: "Accounting & Audit",
      icon: <Calculator size={28} />,
      items: [
        "Elite Bookkeeping",
        "Financial Reports",
        "Data Audit",
        "Risk & Error Detection",
        "Bank Reconcilation",
        "e/waybill Management",
        "Ai Assitant Integration",
      ],
    },
    {
      title: "Digital Growth",
      icon: <Globe size={28} />,
      items: [
        "E-commerce Platforms",
        "Social Media Branding",
        "8 Reels / Month",
        "6–8 Posters (Event + Marketing)",
        "4 Informational Posts",
        "Story Content (3–4 per week)",
        "Caption Writing (conversion-focused)",
        "Google Listing Setup & Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest bg-red-100 text-red-800 rounded-full mb-4">
            CORE CAPABILITIES
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Our Modern Approach
          </h2>

          <p className="text-slate-500 font-medium">
            We combine legislative expertise with software engineering to
            provide a 360° growth platform for Indian entrepreneurs.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-10 rounded-[30px] backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-white/40 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(139,0,0,0.08)] transition hover:scale-[1.02]"
            >
              {/* ICON */}
              <div className="w-14 h-14 bg-red-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                {service.title}
              </h3>

              {/* LIST */}
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start text-sm text-slate-500 font-medium"
                  >
                    <span className="w-2 h-2 bg-red-800 rounded-full mt-2 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
