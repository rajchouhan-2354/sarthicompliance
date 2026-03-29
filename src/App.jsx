import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className={dark ? "dark" : ""}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-800 z-[200] origin-left"
        style={{ scaleX }}
      />
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
        <Navbar toggleDark={() => setDark(!dark)} scrollTo={scrollTo} />

        <Hero scrollTo={scrollTo} />
        <Services />
        <WhyChooseUs />
        <Pricing />
        {/* <Portfolio /> */}
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
