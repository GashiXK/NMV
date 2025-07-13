import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us?', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, delay: i * 0.1 } 
    })
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-background shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a 
            href="#home" 
            className="flex items-center space-x-2"
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <img src="/nmv_logo.svg" alt="NMC Logo" className="h-10 w-10" />
            <span className="font-orbitron text-2xl font-bold text-foreground">NMC</span>
          </motion.a>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground hover:text-nmv-accent-green transition-colors duration-300"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                custom={index + 1}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.div
              initial={{ opacity:0, scale:0.5}}
              animate={{ opacity:1, scale:1}}
              transition={{delay:0.7, duration:0.5}}
            >
              <Button asChild className="btn-primary accent-cta">
                <a href="#contact">Request Free Consultation</a>
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="text-foreground hover:text-nmv-accent-green"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-xl pb-4"
          >
            <nav className="flex flex-col items-center space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-2 px-4 font-medium text-foreground hover:bg-nmv-dark-base hover:text-nmv-accent-green transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="btn-primary accent-cta mt-4 w-11/12 mx-auto">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Request Free Consultation</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
