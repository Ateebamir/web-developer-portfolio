import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>

          {/* Animated Underline */}
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="block h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto mt-3 rounded-full shadow-md"
          />
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-200 capitalize shadow-md cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          key={activeCategory}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-card p-6 rounded-xl shadow-md transition-shadow duration-200 group relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 70, damping: 18 },
                },
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 bg-gradient-to-br from-primary/30 to-secondary/30" />

              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  key={skill.name + "-bar"}
                  className="bg-primary h-2 rounded-full origin-left"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + "%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
