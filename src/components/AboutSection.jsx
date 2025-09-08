import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }} // faster
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }} // faster
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
            transition={{ duration: 0.6, ease: "easeOut" }} // faster
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
              <a href="#contact" className="cosmic-button text-lg px-8 py-3">
                Let’s Connect 🚀
              </a>

              <a
                href="/cv.png"
                download="Ateeb-Malik-CV.png"
                className="px-8 py-3 rounded-full border border-primary/50 text-primary font-medium 
                backdrop-blur-sm hover:bg-primary/10 transition-colors duration-300 shadow-sm"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Side - Skill Cards */}
          <motion.div
            className="grid grid-cols-1 gap-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }} // faster
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }} // smoother + faster
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white shadow-md">
                  <Code className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl">Web Development</h4>
                  <p className="text-muted-foreground mt-2">
                    "Designing responsive websites and building scalable
                    applications with modern frameworks and clean code."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }} // smoother + faster
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-gradient-to-tr from-pink-500 to-red-400 text-white shadow-md">
                  <User className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl">UI / UX Design</h4>
                  <p className="text-muted-foreground mt-2">
                    "Designing clean and modern interfaces that make user
                    journeys simple and smooth."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }} // smoother + faster
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg"
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
