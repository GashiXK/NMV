import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Users } from 'lucide-react';

const statsData = [
  {
    icon: <TrendingUp size={40} className="text-nmv-accent-green" />,
    value: "80%",
    label: "Increase in Revenue"
  },
  {
    icon: <Zap size={40} className="text-nmv-accent-green" />,
    value: "90%",
    label: "Reduction in Manual Tasks"
  },
  {
    icon: <Users size={40} className="text-nmv-accent-green" />,
    value: "100+", // Placeholder, as original was in Albanian
    label: "Satisfied Clients"
  }
];

const SuccessStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="section-padding section-bg">
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
            Measurable <span className="text-nmv-accent-green">Results</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our success is measured by our clients' success. See the impact we've made.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background dark:bg-nmv-dark-base/60 p-8 rounded-xl shadow-lg text-center border border-border hover:shadow-nmv-accent-green/10 transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-nmv-accent-green/10 rounded-full inline-block">
                  {stat.icon}
                </div>
              </div>
              <p className="font-orbitron text-4xl lg:text-5xl font-bold text-nmv-accent-green mb-2">{stat.value}</p>
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStats;