
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const LiveDemo = () => {
  return (
    <section id="demo" className="section-padding bg-gradient-to-br from-brand-purple/90 to-brand-purple-dark text-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience It Yourself</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            See how seamless and impressive the try-on experience can be for your customers
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-1">
          <div className="aspect-video w-full bg-black/30 rounded-lg">
            <iframe 
              src="https://ilikeit-demo.vercel.app" 
              title="Try The Look Demo" 
              className="w-full h-full rounded-lg"
              allow="camera; microphone"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            size="lg" 
            className="cta-button text-lg"
            onClick={() => window.open('https://ilikeit-demo.vercel.app', '_blank')}
          >
            Try the Live Demo
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
