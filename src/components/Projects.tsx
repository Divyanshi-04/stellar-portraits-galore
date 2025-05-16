
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "3D Product Visualizer",
    description: "An interactive 3D product configurator built with Three.js and React, allowing users to customize products in real-time.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1470&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Immersive VR Experience",
    description: "A virtual reality application designed for architecture visualization using WebXR and Three.js.",
    category: "VR Development",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1632&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "3D Data Visualization",
    description: "Interactive 3D charts and graphs bringing complex data to life through visual storytelling.",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1470&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "WebGL Animation Library",
    description: "A lightweight JavaScript library for creating performant WebGL animations and transitions.",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1374&auto=format&fit=crop",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore my latest work showcasing creative 3D experiences and interactive web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
