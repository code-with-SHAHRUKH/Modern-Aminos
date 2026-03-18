import React from 'react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function SpecializedTransport() {
  const pageData = {
    title: "Specialized Transport",
    heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    description: "Premium transport services for high-value, delicate, and specialized cargo. From luxury vehicles and fine art to military equipment and trade show logistics, we provide white-glove service with the highest level of care and security.",
    services: [
      {
        title: "Luxury & Classic Vehicle Transport",
        description: "Premium enclosed transport for exotic cars, classics, and luxury vehicles with white-glove handling and climate control."
      },
      {
        title: "Fine Art & Antiques",
        description: "Museum-quality transport for artwork, sculptures, and antiques with specialized crating and climate-controlled environments."
      },
      {
        title: "Trade Show & Exhibition Logistics",
        description: "Complete logistics solutions for trade shows, including setup, transportation, and coordination of exhibition materials."
      },
      {
        title: "Military & Government Cargo",
        description: "Secure, compliant transport for military equipment and government cargo with proper clearances and security protocols."
      }
    ],
    galleryImages: [
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/21e47c535_oversizeload.jpg", alt: "Oversize load transport" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a80404341_Resized_Photo_6553714_DJI_114_jpg_4404314_0_202192810532_photo_original.jpg", alt: "Specialized transport equipment" },
      { src: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2069&auto=format&fit=crop", alt: "Luxury vehicle transport" },
      { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop", alt: "Fine art packaging" },
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", alt: "Specialized cargo handling" },
      { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop", alt: "White glove service loading" }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}