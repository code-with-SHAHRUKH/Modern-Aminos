
import React from 'react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function AutoTransport() {
  const pageData = {
    title: "Auto Transport",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f27bb12f1_6.jpg",
    description: "Secure and reliable vehicle shipping across the United States. We transport cars, trucks, SUVs, and classic vehicles with open and enclosed carrier options to suit your needs and budget.",
    services: [
      {
        title: "Open Carrier Transport",
        description: "The most cost-effective method for shipping your standard vehicle. Your car is transported on a standard open-air car carrier."
      },
      {
        title: "Enclosed Carrier Transport",
        description: "Provides maximum protection from weather and road debris. Ideal for luxury, classic, or high-value vehicles."
      },
      {
        title: "Door-to-Door Service",
        description: "We pick up and deliver your vehicle as close to your specified locations as legally and safely possible."
      },
      {
        title: "Expedited Shipping",
        description: "Need your vehicle delivered faster? We offer expedited services to meet tight deadlines."
      }
    ],
    galleryImages: [
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d55819099_IMG-1820.jpg", alt: "Black BMW M3 luxury car being loaded for auto transport" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/95a7068a9_81122552-bec7-49be-853d-5490b032f0d4.jpg", alt: "Car secured on a transport trailer for nationwide shipping" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/19c7a2183_b03c4f5c-5ec4-4ecf-a829-6cdf8e61f798.jpg", alt: "Classic car transport service with enclosed carrier" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ea6f5f577_IMG_4703.jpeg", alt: "Truck towing a wakeboarding boat, showcasing vehicle transport capabilities" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2077b677d_6.jpg", alt: "Freightliner truck on the highway, part of our auto transport fleet" }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}
