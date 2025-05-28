import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.opacity = Math.random() * 0.3 + 0.05; // Fainter particles
        this.vx = (Math.random() - 0.5) * 0.3; // Slower movement
        this.vy = (Math.random() - 0.5) * 0.3; // Slower movement
      }

      draw() {
        ctx.fillStyle = `hsla(var(--nmv-accent-green-hsl), ${this.opacity * 100}%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary check
        if (this.x > canvas.width + this.size || this.x < -this.size) this.vx *= -1;
        if (this.y > canvas.height + this.size || this.y < -this.size) this.vy *= -1;
      }
    }

    function init() {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000; // Density adjustment
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animateParticles);
    }
    
    function connect() {
        let opacityValue = 0.1; // Fainter lines
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                             + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                if (distance < (canvas.width/10) * (canvas.height/10)) { // Adjusted connection distance
                    opacityValue = 1 - (distance/10000); // More subtle opacity change
                    ctx.strokeStyle = `hsla(var(--nmv-accent-green-hsl), ${opacityValue * 0.5}%)`; // Use HSL for accent green
                    ctx.lineWidth = 0.5; // Thinner lines
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Initialize HSL value for accent green once
    const accentGreenStyle = getComputedStyle(document.documentElement).getPropertyValue('--nmv-accent-green').trim();
    // Assuming accent is defined like `90 100% 45%`
    if (accentGreenStyle) {
        const [h, s, l] = accentGreenStyle.split(' ');
        document.documentElement.style.setProperty('--nmv-accent-green-hsl', `${h}, ${s}, ${l}`);
    }


    resizeCanvas();
    init();
    animateParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas"></canvas>;
};


const Hero = () => {
  return (
    <section id="home" className="relative bg-background text-foreground section-padding min-h-screen flex items-center overflow-hidden">
      <ParticleAnimation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
          >
            Transform Your Business with Advanced <span className="text-nmv-accent-green">AI Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            NMV empowers organizations with custom-built artificial intelligence, optimizing processes and driving growth through automation and generative technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button asChild className="btn-primary accent-cta text-lg">
              <a href="#contact">
                Request Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
       <motion.div 
        className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-nmv-iron-green/5 rounded-full blur-3xl opacity-50 dark:opacity-30"
        animate={{
            x: [-30, 30, -30],
            y: [-15, 15, -15],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
        }}
        transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-nmv-accent-green/5 rounded-full blur-3xl opacity-50 dark:opacity-30"
        animate={{
            x: [15, -15, 15],
            y: [30, -30, 30],
            scale: [1, 1.08, 1],
            rotate: [0, -5, 0],
        }}
        transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
        }}
      />
    </section>
  );
};

export default Hero;