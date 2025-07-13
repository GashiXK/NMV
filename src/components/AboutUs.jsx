import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="section-padding section-bg">
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
            About <span className="text-nmv-accent-green">NMV</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            NMV is a European company providing advanced artificial intelligence (AI) solutions for businesses seeking to improve their processes through automation and generative technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={itemVariants} className="p-6 rounded-lg bg-background dark:bg-nmv-dark-base/30 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-nmv-accent-green/10 rounded-full inline-block">
                <Target size={40} className="text-nmv-accent-green" />
              </div>
            </div>
            <h3 className="font-orbitron text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower organizations with impactful, custom AI solutions, helping them achieve maximum efficiency and sustainable innovation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 rounded-lg bg-background dark:bg-nmv-dark-base/30 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-nmv-accent-green/10 rounded-full inline-block">
                <Lightbulb size={40} className="text-nmv-accent-green" />
              </div>
            </div>
            <h3 className="font-orbitron text-xl font-semibold mb-2">Our Approach</h3>
            <p className="text-muted-foreground">
              We believe in a personalized approach, working closely with clients to understand their unique needs and deliver AI solutions that yield measurable results.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 rounded-lg bg-background dark:bg-nmv-dark-base/30 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-nmv-accent-green/10 rounded-full inline-block">
                <Users size={40} className="text-nmv-accent-green" />
              </div>
            </div>
            <h3 className="font-orbitron text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-muted-foreground">
              A group of AI-passionate experts dedicated to delivering innovative solutions and continuous support for our clients.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
