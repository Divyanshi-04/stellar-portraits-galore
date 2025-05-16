
import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, category, image, link }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width - 0.5) * 20;
    const yPercent = (y / rect.height - 0.5) * 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="perspective preserve-3d cursor-pointer overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative overflow-hidden group rounded-2xl"
        style={{
          transition: "transform 0.5s ease-out",
          transformStyle: "preserve-3d"
        }}
      >
        <div 
          className="h-80 bg-cover bg-center rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue/90 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"/>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-z">
          <div className="text-portfolio-purple font-medium mb-2">{category}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-2">{description}</p>
          
          <a 
            href={link}
            className="inline-flex items-center text-white font-medium hover:text-portfolio-purple transition-colors"
          >
            View Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
