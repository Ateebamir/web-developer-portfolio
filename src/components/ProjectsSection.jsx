import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Tic tac toe Game",
    description: "A fun and interactive Tic Tac Toe game built with React.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Ateebamir/Portfolio-projects",
    demoUrl: "https://tic-tac-toe-game-virid-kappa-40.vercel.app",
  },
  {
    id: 2,
    title: "Rock paper scissors Game",
    description:
      "A fun and interactive Rock Paper Scissors game built with JavaScript.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Ateebamir/Portfolio-projects",
    demoUrl: "https://rock-paper-scissors-game-snowy-six.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    githubUrl: "https://github.com/Ateebamir/Portfolio-projects",
    demoUrl: "http://e-commerce-website-teal-three.vercel.app",
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Projects
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-4 rounded-full"></span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 
               backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] 
               transition-all duration-400 ease-out overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 16,
                delay: 0.1 * project.id,
              }}
            >
              <div className="h-48 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                />
              </div>

              <div className="p-4 mt-4 flex flex-col flex-grow">
                {/* Tags - Centered */}
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>

                {/* GitHub & Demo buttons - Centered */}
                <div className="mt-auto flex justify-center gap-3">
                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-10 h-10 rounded-full
                                bg-gray-900 text-white hover:bg-gray-700
                                transition-all duration-300 shadow-md overflow-hidden group/github"
                  >
                    <span className="absolute inset-0 bg-white/20 scale-0 group-active/github:scale-150 rounded-full transition-transform duration-500"></span>
                    <Github size={18} className="relative z-10" />
                  </a>

                  {/* Demo */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-10 h-10 rounded-full
                                bg-gradient-to-r from-orange-500 to-yellow-400 text-white
                                shadow-md transition-all duration-300 hover:scale-110
                                overflow-hidden group/demo"
                  >
                    <span className="absolute inset-0 bg-white/30 scale-0 group-active/demo:scale-150 rounded-full transition-transform duration-500"></span>
                    <ArrowUpRight size={18} className="relative z-10" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ateebamir/Portfolio-projects.git"
          >
            <Github size={18} /> Check My Github
          </a>
        </div>
      </div>
    </motion.section>
  );
};
