import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    x: [0, 5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#fdfbff] via-white to-[#f3f2ff] relative">
      <motion.div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="container mx-auto container-padding relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE TEXT */}
          <motion.div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
              variants={fadeUpVariant}
            >
              See the look. <br />
              <span className="main-gradient text-transparent bg-clip-text">Try the look.</span> <br />
              Buy the look.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-xl"
              variants={fadeUpVariant}
            >
              Launch a virtual try-on campaign for your brand’s next collection with our AI.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={fadeUpVariant}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="cta-button text-lg shadow-lg"
                  onClick={() =>
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Try the Live Demo
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group shadow-md"
                  onClick={() =>
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Learn More
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="relative lg:h-[500px] flex items-center justify-center"
            variants={fadeUpVariant}
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              variants={floatAnimation}
              animate="animate"
            >
              <div className="absolute inset-0 bg-brand-purple/30 rounded-3xl blur-3xl" />
              <motion.img
                src="/placeholder.svg"
                alt="Try The Look Preview"
                className="w-full h-auto relative z-10 rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-brand-green rounded-full p-6 shadow-lg z-20"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-brand-purple-dark font-bold text-xl">AI</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
