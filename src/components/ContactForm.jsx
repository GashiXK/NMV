import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
      variant: "default", 
      className: "bg-nmv-accent-green text-nmv-text-dark border-nmv-accent-green"
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };
  
  const inputClass = "w-full px-4 py-3 rounded-lg bg-nmv-light-bg dark:bg-nmv-dark-base/50 border border-border focus:border-nmv-accent-green focus:outline-none focus:ring-1 focus:ring-nmv-accent-green transition-colors text-foreground placeholder:text-muted-foreground";

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <section id="contact" className="section-padding section-bg">
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
            Contact <span className="text-nmv-accent-green">Us</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to explore how AI can transform your business? Fill out the form below or contact us directly.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="max-w-2xl mx-auto bg-background dark:bg-nmv-dark-base/30 p-8 sm:p-10 rounded-xl shadow-2xl border border-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your Name" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Email</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="company" className="block text-sm font-medium mb-1 text-foreground">Company (Optional)</label>
              <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your Company Name" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">Your Message</label>
              <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="How can we help you?"></textarea>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button type="submit" className="btn-primary accent-cta w-full text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;