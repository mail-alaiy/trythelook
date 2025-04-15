
import React from 'react';
import { Camera, Eye, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Browse your site",
    description: "Customers browse your fashion collection as normal."
  },
  {
    icon: Camera,
    title: "Click your pic",
    description: "Upload a selfie or choose from gallery to get started."
  },
  {
    icon: ShoppingBag,
    title: "Try the look",
    description: "Instantly see how your products look on them."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seamless integration. Effortless experience. Instant results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-border flex flex-col items-center text-center"
            >
              <div className="rounded-full p-4 bg-brand-purple/10 mb-4">
                <step.icon className="h-8 w-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="mt-6 text-5xl font-display font-light text-brand-purple opacity-30">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-brand-purple-dark text-white p-6 md:p-8 rounded-xl max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            "Powered by a proprietary diffusion model, our virtual try-on is fast, accurate, and cool as hell. 
            Customers just upload a selfie, and the AI does the rest."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
