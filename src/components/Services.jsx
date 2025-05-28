import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Users, MessageSquare } from 'lucide-react';

const servicesData = [
  {
    icon: <Brain size={36} className="text-nmv-accent-green" />,
    title: "Strategic AI Consulting",
    description: "Helping businesses discover AI opportunities, define objectives, and build implementation strategies."
  },
  {
    icon: <Users size={36} className="text-nmv-accent-green" />,
    title: "Customized AI Solutions",
    description: "Developing tailored AI applications aligned with your specific business processes."
  },
  {
    icon: <Bot size={36} className="text-nmv-accent-green" />,
    title: "AI Agents",
    description: "Automating repetitive tasks to free up human resources for more strategic work."
  },
  {
    icon: <MessageSquare size={36} className="text-nmv-accent-green" />,
    title: "Custom AI Chatbots",
    description: "Intelligent chat systems providing 24/7 autonomous support for your customers."
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="services" className="section-padding bg-background">
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
            Our Core <span className="text-nmv-accent-green">Services</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We offer a specialized range of AI services designed to address your unique business needs and deliver transformative results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-nmv-light-bg dark:bg-nmv-dark-base/40 p-8 rounded-xl shadow-lg hover:shadow-nmv-accent-green/20 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-transparent hover:border-nmv-accent-green/30"
            >
              <div className="mb-6 p-4 bg-nmv-accent-green/10 rounded-full inline-block">
                {service.icon}
              </div>
              <h3 className="font-orbitron text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;