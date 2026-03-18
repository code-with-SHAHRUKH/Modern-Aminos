import React from 'react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function FreightLogistics() {
  const pageData = {
    title: "Freight & Logistics",
    heroImage: "https://images.unsplash.com/photo-1577974026372-4587c4a1c189?q=80&w=1932&auto=format&fit=crop",
    description: "Comprehensive ground freight and logistics solutions for businesses of all sizes. We offer Full Truckload (FTL), Less-Than-Truckload (LTL), refrigerated, and specialized freight services to move your goods efficiently and cost-effectively.",
    services: [
      {
        title: "Full Truckload (FTL)",
        description: "Dedicated truck service for large shipments that require the entire space of a trailer, ensuring direct and faster transit."
      },
      {
        title: "Less-Than-Truckload (LTL)",
        description: "Cost-effective solution for smaller shipments that don't require a full truck, consolidated with other cargo."
      },
      {
        title: "Refrigerated & Temperature-Controlled",
        description: "Specialized 'reefer' trucks for transporting perishable goods and items that require a stable temperature."
      },
      {
        title: "Supply Chain Management",
        description: "End-to-end logistics solutions, including warehousing, distribution, and inventory management to optimize your supply chain."
      }
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1613797325363-2e88933c06b2?q=80&w=2070&auto=format&fit=crop", alt: "Fleet of semi trucks at a logistics depot" },
      { src: "https://images.unsplash.com/photo-1605711219628-66b889e6e8e8?q=80&w=2070&auto=format&fit=crop", alt: "Interior of a large logistics warehouse with stacked pallets" },
      { src: "https://images.unsplash.com/photo-1587293852726-70cdb1e8586b?q=80&w=2070&auto=format&fit=crop", alt: "Forklift moving pallets in a distribution center" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2077b677d_6.jpg", alt: "Freightliner truck on a highway representing freight services" }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}