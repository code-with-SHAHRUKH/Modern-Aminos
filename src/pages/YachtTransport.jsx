import React from 'react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function YachtTransport() {
  const pageData = {
    title: "Yacht Transport & Shipping",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/135f5a2d2_Loadinga116footSunseekerfromUKtoFlorida-April52021.jpg",
    description: "Specialized transport for luxury yachts and large marine vessels. We provide comprehensive logistics, including overland and international ocean freight, with meticulous planning and execution to ensure the safe and timely delivery of your prized investment.",
    services: [
      {
        title: "Lift-On/Lift-Off (LoLo)",
        description: "Utilizing powerful cranes to safely lift your yacht onto a transport vessel. Ideal for international shipping and large vessels that cannot be trailered."
      },
      {
        title: "Custom Cradles & Shrink-Wrapping",
        description: "We build custom-fit shipping cradles to secure your yacht during transit and offer professional shrink-wrapping to protect it from the elements."
      },
      {
        title: "International Yacht Shipping",
        description: "Complete management of global yacht transport, including customs clearance, documentation, and coordination with ports worldwide."
      },
      {
        title: "Experienced Loadmasters",
        description: "Our team of experienced loadmasters and crew oversee every step of the loading and unloading process for maximum safety."
      }
    ],
    galleryImages: [
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ac6cffca_Loadinga116footSunseekerfromUKtoFlorida-April52021photo2.jpg", alt: "Sunseeker yacht being loaded by crane" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4a8a7e560_Loadingan82footSunseekeryachtfromFortLauderdaleFloridatoIstanbulTurkey-December2020photo1.jpg", alt: "82ft Sunseeker yacht ready for transport" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/acb51d98c_PHOTO-2023-08-18-16-55-18.jpg", alt: "Yacht secured on the deck of a cargo ship" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c7f10677a_9E4D0416-90D3-4E12-AFDF-76B46285AA6A.jpg", alt: "Precision crane work for yacht transport" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8cd5fea29_IMG_2681.jpeg", alt: "Large yacht being lifted at a marina" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2c18ca1cd_IMG_1119.jpg", alt: "Yacht on a specialized trailer" }
    ]
  };

  return <ServicePageLayout {...pageData} />;
}