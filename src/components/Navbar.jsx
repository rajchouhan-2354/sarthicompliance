import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import logo from "../assets/logo1.png";

const Navbar = ({ scrollTo, toggleDark }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-4"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <div
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Sarthi Compliance"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-red-800 pb-1 group"
            >
              {item.label}

              {/* UNDERLINE HOVER */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* DARK MODE */}
          <button
            onClick={() => {
              setDark(!dark);
              toggleDark();
            }}
            className="text-slate-500 hover:text-red-800"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-red-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-slate-950 shadow-xl p-6 flex flex-col space-y-6">
          {links.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollTo(item.id);
                setOpen(false);
              }}
              className="text-left text-lg font-bold"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
