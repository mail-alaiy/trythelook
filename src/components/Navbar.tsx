import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 container-padding">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/628a02a1-a43c-4ee1-9bad-63971ec973cc.png" 
            alt="Try The Look Logo" 
            className="h-10"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
          <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
          <a href="#demo" className="text-foreground hover:text-primary transition-colors">Live Demo</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button 
            className="cta-button"
            onClick={() => handleNavClick('demo')}
          >
            Try The Look Now
          </Button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown with Smooth Transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-background border-t border-border px-6 py-0`}
      >
        <div className="py-4 space-y-4">
          <a 
            href="#how-it-works" 
            className="block text-foreground hover:text-primary transition-colors"
            onClick={() => handleNavClick('how-it-works')}
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="block text-foreground hover:text-primary transition-colors"
            onClick={() => handleNavClick('benefits')}
          >
            Benefits
          </a>
          <a 
            href="#demo" 
            className="block text-foreground hover:text-primary transition-colors"
            onClick={() => handleNavClick('demo')}
          >
            Live Demo
          </a>
          <a 
            href="#contact" 
            className="block text-foreground hover:text-primary transition-colors"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </a>
          <Button 
            className="w-full"
            onClick={() => handleNavClick('demo')}
          >
            Try The Look Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
