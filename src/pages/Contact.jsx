
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.585552554862!2d-73.6763716845952!3d40.70850297933221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c287f3c15330c9%3A0x6334e94b1509a25!2s980%20Washington%20St%2C%20Franklin%20Square%2C%20NY%2011010%2C%20USA!5e0!3m2!1sen!2s!4v1683141520626!5m2!1sen!2s";

  return (
    <div className="bg-secondary-dark text-white">
      {/* Hero Section */}
      <div className="relative hero-pattern" style={{backgroundImage: `url(https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop)`}}>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow-glow">
            Get In Touch
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto text-shadow-md">
            We're here to help with all your transport needs. Reach out today for a quote or any questions you may have.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-primary-dark/80 p-8 rounded-lg border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-secondary-dark border-gray-600 text-white placeholder:text-gray-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-secondary-dark border-gray-600 text-white placeholder:text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                <Input id="subject" placeholder="e.g., Quote for Boat Transport" className="bg-secondary-dark border-gray-600 text-white placeholder:text-gray-400" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea id="message" rows={5} placeholder="Please provide details about your shipment..." className="bg-secondary-dark border-gray-600 text-white placeholder:text-gray-400" />
              </div>
              <div>
                <Button type="submit" className="w-full cta-button-animated">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-4 text-lg">
                <a href="tel:347-494-2235" className="flex items-center space-x-4 group">
                  <Phone className="w-6 h-6 text-accent-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">347-494-2235</span>
                </a>
                <a href="mailto:WeTransportEverything@gmail.com" className="flex items-center space-x-4 group">
                  <Mail className="w-6 h-6 text-accent-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">WeTransportEverything@gmail.com</span>
                </a>
                <a href="https://www.google.com/maps/place/980+Washington+St,+Franklin+Square,+NY+11010" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                  <MapPin className="w-6 h-6 text-accent-cyan mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">980 Washington St.<br />Franklin Square, NY 11010</span>
                </a>
              </div>
            </div>
            
            <div className="h-96 w-full rounded-lg overflow-hidden border-2 border-accent-cyan/50 shadow-2xl shadow-accent-cyan/20">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
