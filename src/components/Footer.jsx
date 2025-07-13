import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  const contactDetails = [
    { icon: <MapPin size={18} className="mr-3 flex-shrink-0 mt-1" />, text: "Musterstrasse 1, 12345 Berlin, Germany" },
    { icon: <Mail size={18} className="mr-3 flex-shrink-0 mt-1" />, text: "info@nmc.ai", href: "mailto:info@nmc.ai" },
    { icon: <Phone size={18} className="mr-3 flex-shrink-0 mt-1" />, text: "+49 123 456789", href: "tel:+49123456789" },
  ];

  return (
    <footer className="bg-dark-base text-nmv-text-light pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/nmv_logo.svg" alt="NMV Logo" className="h-10 w-10" />
              <span className="font-orbitron text-2xl font-bold text-nmv-accent-green">NMC</span>
            </div>
            <p className="text-sm text-nmv-text-muted mb-4">
              NMC provides advanced AI solutions for businesses, enhancing processes through automation and generative technologies.
            </p>
          </div>

          <div>
            <h3 className="font-orbitron text-lg font-semibold mb-4 text-nmv-accent-green">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-nmv-accent-green transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="hover:text-nmv-accent-green transition-colors text-sm">Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-nmv-accent-green transition-colors text-sm">Why Us?</a></li>
              <li><a href="#contact" className="hover:text-nmv-accent-green transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-lg font-semibold mb-4 text-nmv-accent-green">Contact Us</h3>
            <ul className="space-y-3">
              {contactDetails.map((item, index) => (
                <li key={index} className="flex items-start text-sm">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="hover:text-nmv-accent-green transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron text-lg font-semibold mb-4 text-nmv-accent-green">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 rounded-full bg-nmv-accent-green/10 text-nmv-accent-green hover:bg-nmv-accent-green hover:text-nmv-dark-base transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-nmv-accent-green/20 pt-8 text-center">
          <p className="text-sm text-nmv-text-muted">
            &copy; {currentYear} NMC. All rights reserved. German Company.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
