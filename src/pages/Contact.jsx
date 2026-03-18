
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
          {/* <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto text-shadow-md">
            We're here to help with all your transport needs. Reach out today for a quote or any questions you may have.
          </p> */}
        </div>
      </div>

      <div className="py-16">
       
      </div>
    </div>
  );
}
