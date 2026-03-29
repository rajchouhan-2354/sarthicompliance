import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Compliance Plan",
      price: "2,999",
      period: "Starter / One-time",
      features: [
        "GST Registration (₹1999)",
        "UDYAM Registration (₹899)",
        "PAN Services",
        "Basic Consultation",
      ],
    },
    {
      name: "Business Growth Plan",
      price: "6,999",
      period: "per month",
      popular: true,
      features: [
        "GST Filing (Monthly)",
        "Accounting Services (₹3000/month)",
        "TAN Registration",
        "BRN Registration",
        "Compliance Monitoring",
        "WhatsApp + Email Support",
      ],
    },
    {
      name: "Complete Digital Plan",
      price: "10,999",
      period: "per month",
      features: [
        "Everything in Growth Plan",
        "Social Media Marketing",
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
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest bg-red-100 text-red-800 rounded-full mb-4">
            FLEXIBLE PLANS
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Choose Your Sarthi Package
          </h2>

          <p className="text-slate-500 mt-4">
            Choose a plan that fits your business stage — from compliance to
            digital growth.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-10 rounded-[40px] border flex flex-col transition-all duration-500
              ${
                plan.popular
                  ? "bg-white dark:bg-slate-900 border-red-800/20 shadow-2xl scale-105 z-10 ring-1 ring-red-800/20"
                  : "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800"
              }`}
            >
              {/* BADGE */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase text-white bg-red-800 px-6 py-2 rounded-full shadow-lg">
                  Most Recommended
                </span>
              )}

              {/* NAME */}
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                {plan.name}
              </h3>

              {/* PRICE */}
              <div className="mb-6">
                <span className="text-4xl font-black text-red-800">
                  ₹{plan.price}
                </span>
                <span className="text-slate-400 text-sm ml-2">
                  / {plan.period}
                </span>
              </div>

              {/* FEATURES */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2 size={16} className="text-red-800 mr-3" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`w-full py-4 rounded-2xl font-bold uppercase text-sm transition-all
                ${
                  plan.popular
                    ? "bg-red-800 text-white hover:bg-red-900"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-red-800 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* ADDITIONAL SERVICES */}
        <div className="mt-24 text-center">
          <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white">
            Additional Services
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              ["GST Registration", "₹1999"],
              ["UDYAM", "₹899"],
              ["BRN", "₹899"],
              ["TAN", "₹899"],
              ["PAN Services", "₹200"],
              ["Accounting", "₹3000/month"],
              ["Social Media Marketing", "₹7999/month"],
            ].map(([name, price], i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <span className="text-sm font-medium">{name}</span>
                <span className="text-red-800 font-bold text-sm">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
