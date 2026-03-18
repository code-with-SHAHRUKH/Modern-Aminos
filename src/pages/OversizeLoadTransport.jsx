import React from 'react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function OversizeLoadTransport() {
  const pageData = {
    title: "Oversize & Over-Dimensional Load Transport",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/00d0cdf15_image.png",
    description: "Expert logistics for loads that exceed standard legal size and weight limits. We are specialists in planning and executing complex shipments, managing everything from route surveys and permits to pilot cars and escorts for safe, compliant delivery.",
    services: [
      {
        title: "Route Planning & Surveys",
        description: "We conduct detailed route surveys to ensure clearance from bridges, power lines, and other potential obstructions for your oversized load."
      },
      {
        title: "Nationwide Permitting Services",
        description: "Our team handles all necessary state, county, and federal permits required for over-dimensional transport, saving you time and hassle."
      },
      {
        title: "Pilot Car & Escort Coordination",
        description: "We arrange for certified pilot cars and police escorts when required to ensure maximum safety on the road."
      },
      {
        title: "Specialized Trailers",
        description: "Access to a diverse fleet of specialized trailers, including step-decks, RGNs (Removable Gooseneck), and multi-axle trailers to handle any load."
      }
    ],
    galleryImages: [
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7ce707149_KIMG1250.jpg", alt: "Oversize load banner on a transport vehicle" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2cb7ccdfe_KIMG1252.jpg", alt: "Oversize load escort vehicle" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d2b286e70_PHOTO-2023-03-01-12-32-54.jpg", alt: "Large boat requiring an oversize load permit" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ca2ca37a9_dtmtransportationllcgmailcom.jpg", alt: "Heavy duty truck with oversize load signage" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/21e47c535_oversizeload.jpg", alt: "Wide load transport truck on the highway" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a80404341_Resized_Photo_6553714_DJI_114_jpg_4404314_0_202192810532_photo_original.jpg", alt: "Truck hauling a boat as an oversize load" }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}