
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

const skills = [
  { name: "3D Modeling", level: 90 },
  { name: "Three.js", level: 85 },
  { name: "React", level: 95 },
  { name: "WebGL", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "Animation", level: 92 },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-portfolio-dark-blue py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-white/80 mb-6">
                I'm a creative developer specializing in 3D web experiences and interactive applications.
                With a passion for combining design and technology, I create immersive digital experiences
                that push the boundaries of what's possible on the web.
              </p>
              <p className="text-white/80 mb-8">
                My expertise spans 3D modeling, WebGL, Three.js, and modern front-end technologies.
                I'm dedicated to crafting performant, accessible, and visually stunning applications
                that leave a lasting impression.
              </p>

              <div className="space-y-4 mb-8">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/90 font-medium text-sm">{skill.name}</span>
                      <span className="text-white/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-portfolio-purple"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="order-1 lg:order-2 h-80 lg:h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Canvas>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Sphere args={[2.5, 100, 200]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                  color="#8b5cf6"
                  attach="material"
                  distort={0.4}
                  speed={1.5}
                  roughness={0.2}
                />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-30 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="grain" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
              <feBlend mode="normal" in="SourceGraphic" result="blend" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#grain)" fillOpacity="0.1" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
