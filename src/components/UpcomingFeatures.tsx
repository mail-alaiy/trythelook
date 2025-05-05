import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Users, Shirt } from "lucide-react";

// Define animation variants
const fadeInVariant = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const hoverEffectVariant = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
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
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Coming Up</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're constantly innovating to bring you the best virtual try-on experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-border relative overflow-hidden group"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
            >
              {feature.comingSoon && (
                <div className="absolute top-3 right-3 bg-brand-green text-brand-purple-dark text-xs font-bold px-2 py-1 rounded-full">
                  Coming Soon
                </div>
              )}
              
              <div className="rounded-full p-4 bg-brand-purple/10 mb-4 inline-block">
                <feature.icon className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
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
