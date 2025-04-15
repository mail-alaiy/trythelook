
import React from 'react';
import { Clock, RefreshCw, TrendingUp, Users, Share2 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Increases engagement time",
    description: "Customers spend 4.2x longer on your site while trying on different looks."
  },
  {
    icon: RefreshCw,
    title: "Reduces returns",
    description: "Cut return rates by up to 28% as customers know exactly how products will look."
  },
  {
    icon: TrendingUp,
    title: "Boosts conversions",
    description: "Achieve 37% higher conversion rates with try-before-you-buy confidence."
  },
  {
    icon: Users,
    title: "Enhances loyalty",
    description: "Build stronger customer relationships through innovative experiences."
  },
  {
    icon: Share2,
    title: "Drives organic traffic",
    description: "Create shareable moments as customers show off their virtual try-ons."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Try The Look</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlock powerful benefits for your fashion brand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow hover:shadow-md transition-shadow border border-border group hover:border-brand-purple/30"
            >
              <div className="rounded-full p-3 bg-brand-purple/10 mb-4 inline-block group-hover:bg-brand-purple/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
