import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative mt-10">
      {/* Footer Base */}
      <div className="backdrop-blur-md bg-card/80 border-t border-border/50 shadow-lg">
        <div className="container mx-auto max-w-6xl px-6 py-6 flex justify-between items-center text-sm">
          {/* Left Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-muted-foreground"
          >
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-primary">Ateeb-Malik.co</span> ·
            All rights reserved.
          </motion.p>

          {/* Right Links */}
          <div className="hidden md:flex gap-6 text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showArrow && (
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
            }}
            whileHover={{
              y: -6,
              scale: 1.08,
              boxShadow: "0 0 20px rgba(255,165,0,0.7)",
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            whileTap={{ scale: 0.93 }}
            className="fixed bottom-6 right-6 p-2.5 rounded-full bg-gradient-to-tr from-primary/80 to-primary text-primary-foreground shadow-lg"
          >
            <ArrowUp size={18} />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
};
