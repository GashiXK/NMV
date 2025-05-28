import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <CheckCircle size={28} className="text-nmv-accent-green" />,
    title: "Fully Customized Solutions",
    description: "We don't offer one-size-fits-all. Every project is tailored to your unique business needs and objectives."
  },
  {
    icon: <Brain size={28} className="text-nmv-accent-green" />,
    title: "Deep Technical Expertise",
    description: "Our team consists of AI experts with extensive experience in the latest technologies and industry best practices."
  },
  {
    icon: <Zap size={28} className="text-nmv-accent-green" />,
    title: "Strategic, Results-Driven Approach",
    description: "We focus on delivering solutions that bring measurable results, helping to increase efficiency and revenue."
  },
  {
    icon: <Users size={28} className="text-nmv-accent-green" />,
    title: "Ongoing, Hands-on Support",
    description: "We are your long-term partner, providing continuous support to ensure the success of your AI solutions."
  }
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }
    }
  };

  return (
    <section id="why-choose-us" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-orbitron text-3xl sm:text-4xl font-bold mb-4"
          >
            Why Choose <span className="text-nmv-accent-green">NMV?</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the advantages that make us the ideal partner for your AI-driven digital transformation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 bg-nmv-light-bg dark:bg-nmv-dark-base/40 rounded-lg shadow-md border border-transparent hover:border-nmv-accent-green/30 transition-all hover:shadow-xl"
              >
                <div className="flex-shrink-0 mt-1">{reason.icon}</div>
                <div>
                  <h3 className="font-orbitron text-lg font-semibold mb-1 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden lg:block relative group"
          >
            <img 
              alt="Team collaborating on AI solutions" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995" />
             <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-nmv-accent-green/10 rounded-full blur-2xl animate-pulse-glow shadow-nmv-accent-green" />
             <div className="absolute -top-8 -left-8 w-24 h-24 bg-nmv-iron-green/20 rounded-full blur-2xl animate-subtle-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;