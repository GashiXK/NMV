import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import SuccessStats from '@/components/SuccessStats';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <AboutUs />
        <Services />
        <SuccessStats />
        <WhyChooseUs />
        <ContactForm />
      </motion.main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;