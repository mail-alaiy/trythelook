
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        brandName: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-brand-purple-dark text-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Custom Campaign</h2>
            <p className="text-white/80 mb-6 text-lg">
              Let's bring your next drop to life. Schedule a quick demo to see how Try The Look can transform your customers' shopping experience.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="font-medium">Why brands choose us:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-brand-green h-5 w-5 flex items-center justify-center mt-0.5">
                    <span className="text-brand-purple-dark text-xs font-bold">✓</span>
                  </span>
                  <span>Setup in less than a day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-brand-green h-5 w-5 flex items-center justify-center mt-0.5">
                    <span className="text-brand-purple-dark text-xs font-bold">✓</span>
                  </span>
                  <span>No-code integration with your store</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-brand-green h-5 w-5 flex items-center justify-center mt-0.5">
                    <span className="text-brand-purple-dark text-xs font-bold">✓</span>
                  </span>
                  <span>Full analytics dashboard included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-brand-green h-5 w-5 flex items-center justify-center mt-0.5">
                    <span className="text-brand-purple-dark text-xs font-bold">✓</span>
                  </span>
                  <span>Dedicated campaign manager</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@yourbrand.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="brandName">Brand Name</Label>
                <Input
                  id="brandName"
                  name="brandName"
                  placeholder="Your fashion brand"
                  value={formData.brandName}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your brand and your upcoming collection..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full cta-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Your Campaign Demo"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
