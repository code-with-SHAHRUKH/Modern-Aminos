import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function HeavyEquipment() {
  const pageData = {
    title: "Heavy Equipment Transport",
    heroImage: "https://images.unsplash.com/photo-1581293757613-c1c45b97ce7b?q=80&w=2070&auto=format&fit=crop",
    description: "Specialized logistics for oversized and heavy equipment. We transport construction machinery, agricultural equipment, and industrial components with the right permits, escorts, and handling expertise.",
    services: [
      {
        title: "Construction Equipment Hauling",
        description: "Transport for excavators, bulldozers, cranes, and other heavy machinery from job site to job site."
      },
      {
        title: "Agricultural Machinery Shipping",
        description: "Safe and reliable shipping for tractors, combines, balers, and other large farm equipment."
      },
      {
        title: "Oversized & Super Loads",
        description: "A versatile fleet of lowboy, step-deck, and RGN trailers for the most demanding transport jobs."
      },
      {
        title: "Permitting & Logistics",
        description: "We handle all necessary state and federal permits to ensure your shipment is fully compliant and hassle-free."
      }
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1622552253832-355a209581a7?q=80&w=2070&auto=format&fit=crop", alt: "Oversize load truck on highway" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f351e881e_2Ecoontrailer.jpg", alt: "Heavy equipment on a large trailer" },
      { src: "https://images.unsplash.com/photo-1615881431148-3c78a169fbd3?q=80&w=1932&auto=format&fit=crop", alt: "Wind turbine blade transport" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0ceabadfe_5Phoenix3axle.jpg", alt: "Multi-axle trailer for heavy loads" }
    ],
    extraContent: (
      <div className="text-center bg-blue-50 py-12 px-4 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need to Ship an Oversize Load?</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          We specialize in the complex logistics of over-dimensional and super-heavy freight. Let our experts handle the details.
        </p>
        <Link to={createPageUrl("OversizeLoadTransport")}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Explore Oversize Load Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    )
  };

  return <ServicePageLayout {...pageData} />;
}