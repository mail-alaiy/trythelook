import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Animation Variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonHoverVariant = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

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
  
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
  
    fetch("https://script.google.com/macros/s/AKfycbxXgTd1FNF6DNB4xIUx2HvytW3LZCeF5stKUUXNdDNtJYfWi0ZWfZhZGEFAR9_FHO1G/exec", {
      method: "POST",
      mode: "no-cors", // stays
      body: form // must be FormData
    })
      .then(() => {
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
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error submitting form",
          description: "Please try again later.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-padding bg-brand-purple-dark text-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div 
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
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
          </motion.div>
          
          {/* Right Section - Form */}
          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInUpVariant} initial="hidden" whileInView="show">
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
              </motion.div>
              
              <motion.div variants={fadeInUpVariant} initial="hidden" whileInView="show">
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
              </motion.div>
              
              <motion.div variants={fadeInUpVariant} initial="hidden" whileInView="show">
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
              </motion.div>
              
              <motion.div variants={fadeInUpVariant} initial="hidden" whileInView="show">
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
              </motion.div>
              
              <motion.div variants={buttonHoverVariant} whileHover="hover">
                <Button 
                  type="submit" 
                  className="w-full cta-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Your Campaign Demo"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
