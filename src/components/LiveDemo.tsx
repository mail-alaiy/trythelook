import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Define variants for animations
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const LiveDemo = () => {
  return (
    <section 
      id="demo" 
      className="section-padding bg-gradient-to-br from-brand-purple/90 to-brand-purple-dark text-white"
    >
      <div className="container mx-auto container-padding">
        {/* Text and Heading Section */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience It Yourself</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            See how seamless and impressive the try-on experience can be for your customers
          </p>
        </motion.div>

        {/* Demo iframe with animation */}
        <motion.div
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-1"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="aspect-video w-full bg-black/30 rounded-lg">
            <iframe 
              src="https://trythelook.vercel.app/" 
              title="Try The Look Demo" 
              className="w-full h-full rounded-lg"
              allow="camera; microphone"
            ></iframe>
          </div>
        </motion.div>

        {/* Button Section */}
        <motion.div
          className="mt-10 text-center"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button 
            size="lg" 
            className="cta-button text-lg"
            onClick={() => window.open('https://trythelook.vercel.app/', '_blank')}
          >
            Try the Live Demo
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDemo;
