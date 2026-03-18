import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function AirCargo() {
  const pageData = {
    title: "Air Cargo & Freight",
    heroImage: "https://images.unsplash.com/photo-1578554742239-59758178a543?q=80&w=1974&auto=format&fit=crop",
    description: "When time is critical, our air cargo services provide the fastest shipping solutions. We handle everything from small parcels to oversized freight, ensuring your shipment receives priority handling and meets the tightest deadlines, with global reach and end-to-end tracking.",
    services: [
      {
        title: "Next Flight Out (NFO)",
        description: "The quickest possible delivery service for your most urgent shipments, placed on the next available commercial or cargo flight."
      },
      {
        title: "Expedited Air Freight",
        description: "A balance of speed and cost, ensuring your cargo reaches its destination faster than standard shipping methods."
      },
      {
        title: "International Air Cargo",
        description: "Complete global logistics, including customs clearance, documentation, and coordination for seamless international delivery."
      },
      {
        title: "Heavy & Oversized Air Freight",
        description: "Specialized solutions for transporting large or heavy items via cargo aircraft, including machinery and vehicles."
      }
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1610254549234-225917a22c45?q=80&w=2070&auto=format&fit=crop", alt: "Cargo being loaded onto a large airplane" },
      { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop", alt: "Airport logistics with cargo containers and a plane in the background" },
      { src: "https://images.unsplash.com/photo-1606764539348-15fe444598e0?q=80&w=2070&auto=format&fit=crop", alt: "Cargo plane on the tarmac at sunset" },
      { src: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop", alt: "Aerial view of a busy airport with cargo operations" }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}