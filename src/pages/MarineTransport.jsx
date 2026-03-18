import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ServicePageLayout from '../components/services/ServicePageLayout';

export default function MarineTransport() {
  const pageData = {
    title: "Marine & Boat Transport",
    heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/135f5a2d2_Loadinga116footSunseekerfromUKtoFlorida-April52021.jpg",
    description: "Expert transport for yachts, boats, jet skis, and all marine watercraft. We offer marina-to-marina, overland, and international marine shipping with specialized equipment and experienced crews to ensure your vessel arrives safely and on schedule.",
    services: [
      {
        title: "Yacht & Large Boat Shipping",
        description: "Custom logistics for large yachts, including lift-on/lift-off services and coordination with ports worldwide."
      },
      {
        title: "Powerboat & Sailboat Transport",
        description: "Secure overland transport using custom trailers and cradles designed to protect your boat's hull and structure."
      },
      {
        title: "Jet Ski & Personal Watercraft",
        description: "Safe and efficient transport for one or multiple jet skis, ensuring they arrive ready for the water."
      },
      {
        title: "International Marine Shipping",
        description: "Comprehensive freight forwarding for boats of all sizes, handling customs, documentation, and all international logistics."
      }
    ],
    galleryImages: [
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ac6cffca_Loadinga116footSunseekerfromUKtoFlorida-April52021photo2.jpg", alt: "Sunseeker yacht being loaded" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4a8a7e560_Loadingan82footSunseekeryachtfromFortLauderdaleFloridatoIstanbulTurkey-December2020photo1.jpg", alt: "82ft Sunseeker yacht" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b6fe36a71_0d4e365e-dbe3-4fc4-ac36-ff43df8950a4.jpg", alt: "Specialized rowing boat transport" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/acb51d98c_PHOTO-2023-08-18-16-55-18.jpg", alt: "Yacht loaded on cargo ship" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/eff53f3af_image0000013.jpg", alt: "Diamond Girl boat transport" },
      { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c7f10677a_9E4D0416-90D3-4E12-AFDF-76B46285AA6A.jpg", alt: "Boat being lifted by crane" }
    ],
    extraContent: (
      <div className="text-center bg-blue-50 py-12 px-4 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Yacht Transport Services</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Shipping a large yacht requires a higher level of expertise. We offer dedicated services for high-value marine vessels.
        </p>
        <Link to={createPageUrl("YachtTransport")}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Learn More About Yacht Shipping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    )
  };

  return <ServicePageLayout {...pageData} />;
}