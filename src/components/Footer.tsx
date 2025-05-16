
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark-blue text-white/70 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">Portfolio<span className="text-portfolio-purple">.</span></h3>
            <p className="max-w-xs">
              Creating immersive 3D experiences and interactive web applications that push the boundaries of digital design.
            </p>
            <div className="flex space-x-4 mt-6">
              {["twitter", "github", "dribbble", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-purple/70 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-portfolio-purple transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>contact@portfolio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, USA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {year} Portfolio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Developed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
