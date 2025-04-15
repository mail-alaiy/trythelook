
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/628a02a1-a43c-4ee1-9bad-63971ec973cc.png" 
              alt="Try The Look Logo" 
              className="h-10 mb-4"
            />
            <p className="text-white/70 max-w-md">
              AI-powered virtual try-on platform for fashion brands.
              Transform your customers' shopping experience with cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-white/70 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#demo" className="text-white/70 hover:text-white transition-colors">Live Demo</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-white/70 mb-2">Email: pradyun@alaiy.com</p>
            
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Try The Look. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
