
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 container-padding">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/628a02a1-a43c-4ee1-9bad-63971ec973cc.png" 
            alt="Try The Look Logo" 
            className="h-10"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
          <a href="#demo" className="text-foreground hover:text-primary transition-colors">Live Demo</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <Button 
          className="cta-button"
          onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Try The Look Now
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
