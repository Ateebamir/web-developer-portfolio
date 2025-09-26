import { useState, useRef, useEffect } from "react";
import { Briefcase, Code, User, Download, Image, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSection = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.section
      id="about"
      className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Me
          </span>
          <span className="block w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side - About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Passionate{" "}
              <span className="text-primary">Web Developer</span> & Creative Tech
              Enthusiast
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Front-End Developer with{" "}
              <strong className="text-foreground">3+ months</strong> of hands-on
              experience in building modern, responsive, and user-friendly web
              applications. I specialize in crafting clean and interactive
              interfaces while continuously learning new technologies to enhance
              my skills. Driven by curiosity and dedication, I aim to turn ideas
              into sleek, functional, and scalable digital solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I thrive on turning complex ideas into sleek solutions, always
              pushing myself to learn new technologies and deliver beyond
              expectations.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <a
                href="#contact"
                className="cosmic-button text-lg px-8 py-3 cursor-pointer"
              >
                Let’s Connect 🚀
              </a>

              {/* Pro Download CV Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="px-8 py-3 rounded-full border border-primary/50 text-primary font-medium 
                  backdrop-blur-md hover:bg-primary/10 transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute mt-3 w-56 rounded-2xl shadow-2xl bg-white/90 dark:bg-gray-900/90 
                      border border-gray-200 dark:border-gray-700 backdrop-blur-lg z-50 overflow-hidden"
                    >
                      {/* PNG CV */}
                      <a
                        href="/cv.png"
                        download="Ateeb-Malik-CV.png"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 
                        hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-yellow-400/20 transition-all duration-200 cursor-pointer"
                      >
                        <Image className="h-5 w-5 text-orange-500" />
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                          Download PNG
                        </span>
                      </a>

                      {/* PDF CV */}
                      <a
                        href="/Ateeb-Malik CV.pdf"
                        download="Ateeb-Malik-CV.pdf"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 
                        hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-400/20 transition-all duration-200 cursor-pointer"
                      >
                        <FileText className="h-5 w-5 text-purple-500" />
                        <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                          Download PDF
                        </span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skill Cards */}
          <motion.div
            className="grid grid-cols-1 gap-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white shadow-md">
                  <Code className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl">Web Development</h4>
                  <p className="text-muted-foreground mt-2">
                    Designing responsive websites and building scalable
                    applications with modern frameworks and clean code.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-gradient-to-tr from-pink-500 to-red-400 text-white shadow-md">
                  <User className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl">UI / UX Design</h4>
                  <p className="text-muted-foreground mt-2">
                    Designing clean and modern interfaces that make user
                    journeys simple and smooth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-md">
                  <Briefcase className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl">Project Management</h4>
                  <p className="text-muted-foreground mt-2">
                    Leading projects with agile workflows ensuring timely
                    delivery & quality.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
