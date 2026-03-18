
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CallToAction from '../homepage/CallToAction';
import Slideshow from '../homepage/Slideshow';

export default function ServicePageLayout({ title, heroImage, description, services, galleryImages, extraContent }) {
  return (
    <div className="bg-primary-dark text-white">
      {/* Hero Section */}
      <div className="relative hero-pattern" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow-glow">
            {title}
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto text-shadow-md">
            {description}
          </p>
          <div className="mt-8">
            <Link to={createPageUrl("Quote")}>
              <Button size="lg" className="bg-accent-yellow hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 cta-button-animated">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our {title} Capabilities</h2>
            <p className="mt-4 text-lg text-gray-500">Comprehensive solutions for all your shipping needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Slideshow */}
      {galleryImages && galleryImages.length > 0 && (
        <Slideshow images={galleryImages} />
      )}

      {/* Extra Content Section */}
      {extraContent && (
        <div className="py-16 bg-secondary-dark">
          <div className="max-w-4xl mx-auto px-4">
            {extraContent}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
