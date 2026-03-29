import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-red-900/10">
      <div className="container mx-auto px-6">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-800 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-yellow-400" />
              </div>

              <span className="text-lg font-black">
                SARTHI <span className="text-red-800">COMPLIANCE</span>
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">
              Providing high-end legal, financial, and digital solutions for the
              next generation of Indian entrepreneurs.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-6">
              Navigation
            </h4>

            <ul className="space-y-3">
              {["Home", "Services", "Pricing", "Portfolio"].map((item, i) => (
                <li
                  key={i}
                  className="text-sm font-semibold text-slate-500 hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-6">
              Legal
            </h4>

            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Use", "Refund Policy"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="text-sm font-semibold text-slate-500 hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-6">
              Social
            </h4>

            <a
              href="https://www.instagram.com/sarthi.compliance?igsh=MWVsanBkNDdhaDIzNg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-500 hover:text-white transition"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-bold uppercase tracking-widest">
          <span>© 2026 SARTHI COMPLIANCE </span>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Designed for Growth</span>
            <div className="w-1 h-1 bg-red-800 rounded-full"></div>
            <span>Made in Bharat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
