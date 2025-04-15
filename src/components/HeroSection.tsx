
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                See the look. <br />
                <span className="main-gradient text-transparent bg-clip-text">Try the look.</span> <br />
                Buy the look.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                Launch a try-on campaign for your next collection with cutting-edge AI.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="cta-button text-lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try the Live Demo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-brand-purple/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Try The Look Preview" 
                className="w-full h-auto relative z-10 rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-green rounded-full p-6 shadow-lg z-20">
                <span className="text-brand-purple-dark font-bold text-xl">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
