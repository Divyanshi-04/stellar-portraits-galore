
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.3;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[3, 0.4, 16, 100]} />
      <meshStandardMaterial 
        color="#e5deff" 
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        fade
        speed={1}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <AnimatedSphere />
        <AnimatedTorus />
        <Text
          position={[0, 0, 0]}
          color="#ffffff"
          fontSize={0.6}
          maxWidth={2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
        >
          PORTFOLIO
        </Text>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </>
  );
}

const Hero3D = () => {
  return (
    <div id="home" className="hero-gradient min-h-screen relative flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Canvas className="touch-none" camera={{ position: [0, 0, 10], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>
      
      <div className="z-20 container mx-auto px-4 flex flex-col items-center text-center relative">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Creative <span className="text-gradient">3D</span> Portfolio
        </motion.h1>
        <motion.p 
          className="text-white/80 text-lg md:text-xl max-w-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Showcasing my work through immersive 3D experiences and interactive designs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#projects" 
            className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white font-medium py-3 px-8 rounded-full transition-all"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          className="animate-bounce"
        >
          <a href="#projects">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero3D;
