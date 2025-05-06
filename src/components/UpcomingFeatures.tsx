import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Users, Shirt } from "lucide-react";

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const hoverEffectVariant = {
  hover: { scale: 1.03 },
};

const features = [
  {
    icon: ShoppingCart,
    title: "Shopify Plugin",
    description: "Seamlessly integrate Try The Look with your Shopify store. Coming soon!",
    comingSoon: true
  },
  {
    icon: Users,
    title: "I Like It .ai",
    description: "A discovery platform for fashion based on your preferences and style.",
    comingSoon: false
  },
  {
    icon: Shirt,
    title: "Full-body Try-ons",
    description: "Expand to full outfits, accessories, and jewelry virtual try-ons.",
    comingSoon: false
  }
];

const UpcomingFeatures = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What's Coming Up</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            We're constantly innovating to bring you the best virtual try-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow border border-border relative overflow-hidden group"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
              whileTap="hover"
            >
              {feature.comingSoon && (
                <div className="absolute top-3 right-3 bg-brand-green text-brand-purple-dark text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full">
                  Coming Soon
                </div>
              )}

              <div className="rounded-full p-3 sm:p-4 bg-brand-purple/10 mb-4 inline-block">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-purple" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>

              <motion.div
                className="absolute bottom-0 left-0 h-1 w-0 bg-brand-green group-hover:w-full transition-all duration-300"
                variants={hoverEffectVariant}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeatures;
