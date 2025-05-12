import React from 'react';
import { Camera, Eye, ShoppingBag } from "lucide-react";
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Eye,
    title: "See The Look",
    description: "Customers browse your fashion website as normal."
  },
  {
    icon: Camera,
    title: "Try The Look",
    description: "Customers upload a selfie and see how the products look on them."
  },
  {
    icon: ShoppingBag,
    title: "Buy The look",
    description: " Customers can instantly share their picture or add to cart."
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/50">
      <motion.div
        className="container mx-auto container-padding"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={fadeUpVariant}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Seamless integration. Effortless experience. Instant results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-border flex flex-col items-center text-center"
              variants={fadeUpVariant}
            >
              <div className="rounded-full p-4 bg-brand-purple/10 mb-4">
                <step.icon className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>
              <div className="mt-6 text-5xl font-display font-light text-brand-purple opacity-30">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-brand-purple-dark text-white p-6 md:p-8 rounded-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl leading-relaxed">
            "Powered by a proprietary diffusion model, our virtual try-on is fast, accurate, and super fun to use. Customers just upload a selfie, and the AI does the rest."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
