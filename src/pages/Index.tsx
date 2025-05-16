
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero3D from "../components/Hero3D";
import Projects from "../components/Projects";
import AboutSection from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "3D Portfolio";
  }, []);

  return (
    <div className="no-scrollbar">
      <Navbar />
      <Hero3D />
      <Projects />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
