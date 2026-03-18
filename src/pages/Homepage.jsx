
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Ship,
  Plane,
  Building,
  Shield,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import HeroSection from "../components/homepage/HeroSection";
import QuickQuoteForm from "../components/homepage/QuickQuoteForm";
import ServicesGrid from "../components/homepage/ServicesGrid";
import TrustSignals from "../components/homepage/TrustSignals";
import CallToAction from "../components/homepage/CallToAction";
import Slideshow from "../components/homepage/Slideshow";
import TestimonialSlideshow from "../components/homepage/TestimonialSlideshow";
import EquipmentHighlight from "../components/homepage/EquipmentHighlight";
import ThirdParty from "@/components/homepage/ThirdParty";
import CustomerService from "@/components/homepage/CustomerService";
import FeatureSection from "@/components/homepage/GuaranteeSection";
import GuaranteeSection from "@/components/homepage/GuaranteeSection";
import FAQSection from "@/components/homepage/faqs";

export default function Homepage() {
  const services = [
    {
      icon: Truck,
      title: "Auto Transport",
      description: "Safe and reliable car shipping nationwide with open and enclosed carrier options",
      features: ["Door-to-door service", "Enclosed transport available", "Fully insured"],
      link: "AutoTransport"
    },
    {
      icon: Ship,
      title: "Marine Transport",
      description: "Yacht and boat shipping services from marina to marina, including international routes",
      features: ["Marina-to-marina service", "International shipping", "Specialized handling"],
      link: "MarineTransport"
    },
    {
      icon: Building,
      title: "Heavy Equipment",
      description: "Construction machinery and oversized load transport with expert handling",
      features: ["Oversized permits", "Construction equipment", "Certified operators"],
      link: "HeavyEquipment"
    },
    {
      icon: Truck,
      title: "Freight & Logistics",
      description: "Full truckload, LTL, refrigerated, and specialized freight solutions",
      features: ["LTL & FTL options", "Refrigerated transport", "HAZMAT certified"],
      link: "FreightLogistics"
    },
    {
      icon: Plane,
      title: "Air Cargo",
      description: "Expedited air freight for time-sensitive shipments worldwide",
      features: ["Same-day delivery", "International air freight", "Express handling"],
      link: "AirCargo"
    },
    {
      icon: Shield,
      title: "Specialized Transport",
      description: "Luxury vehicles, fine art, military equipment, and trade show logistics",
      features: ["White-glove service", "Climate controlled", "High-value cargo"],
      link: "SpecializedTransport"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      industry: "Construction Manager",
      rating: 5,
      text: "Everything Transport handled our heavy equipment move flawlessly. Professional, on-time, and excellent communication throughout the entire process. They are our go-to for all heavy hauling, domestic or international."
    },
    {
      name: "Michael Chen",
      industry: "Classic Car Collector",
      rating: 5,
      text: "My vintage Porsche arrived in perfect condition. The enclosed carrier provided excellent protection, and the driver was meticulous. Worth every penny for the peace of mind."
    },
    {
      name: "Jennifer Martinez",
      industry: "Marina Operations",
      rating: 5,
      text: "They've become our trusted partner for yacht transport. Reliable, professional, and they handle all the complex international logistics perfectly. Highly recommended for any marine transport."
    },
    {
        name: "David Lee",
        industry: "Fleet Manager",
        rating: 5,
        text: "We use them for all our corporate vehicle relocations across North America. They are efficient, reliable, and always deliver on schedule. Their team makes the entire process incredibly easy."
    },
    {
        name: "Amanda Rodriguez",
        industry: "Boat Owner",
        rating: 5,
        text: "Transporting my boat from Florida to the Mediterranean felt like a huge task, but they made it so simple and stress-free. The communication was fantastic from start to finish."
    }
  ];

  const galleryImages = [
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/135f5a2d2_Loadinga116footSunseekerfromUKtoFlorida-April52021.jpg", alt: "Marine transport specialists loading a 116ft Sunseeker yacht" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/892604439_oversizeload.jpg", alt: "Oversize load truck transport for heavy equipment hauling" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d55819099_IMG-1820.jpg", alt: "Luxury auto transport of a Black BMW M3 on a transport truck" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/acb51d98c_PHOTO-2023-08-18-16-55-18.jpg", alt: "Yacht loaded on cargo ship for international marine shipping" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f351e881e_2Ecoontrailer.jpg", alt: "Heavy construction equipment loaded on a specialized trailer" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c246e3c1d_IMG_2194.jpg", alt: "Boat being lifted by crane at a marina for transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ea6f5f577_IMG_4703.jpeg", alt: "Wakeboarding boat being prepped for transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/19c7a2183_b03c4f5c-5ec4-4ecf-a829-6cdf8e61f798.jpg", alt: "Classic car being transported in an enclosed carrier" },
    { src: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop", alt: "Air cargo being loaded onto a plane" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/70846d431_f7ffcd6d-4810-4089-9868-b69de8edf142.jpg", alt: "Sailboat transport overland on a custom trailer" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ca2ca37a9_dtmtransportationllcgmailcom.jpg", alt: "Super Air Nautique boat on a trailer ready for shipping" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2077b677d_6.jpg", alt: "Freightliner truck on highway for freight and logistics services" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/eff53f3af_image0000013.jpg", alt: "Custom boat transport for a 'Diamond Girl' vessel" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5ac6cffca_Loadinga116footSunseekerfromUKtoFlorida-April52021photo2.jpg", alt: "Detailed view of a Sunseeker yacht loading process" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0ceabadfe_5Phoenix3axle.jpg", alt: "Phoenix multi-axle trailer for heavy hauling" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/95a7068a9_81122552-bec7-49be-853d-5490b032f0d4.jpg", alt: "Car secured on a flatbed transport trailer" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b6fe36a71_0d4e365e-dbe3-4fc4-ac36-ff43df8950a4.jpg", alt: "Specialized transport for a competitive rowing boat" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c7f10677a_9E4D0416-90D3-4E12-AFDF-76B46285AA6A.jpg", alt: "Crane lifting a boat from the water for transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/011f42952_endurance35totransport.jpg", alt: "Endurance 35 boat ready for transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/792c3fdb4_Image1.jpg", alt: "Large sailboat being transported by truck" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a13325bbf_IMG_01261.jpg", alt: "Pamlica model sailboat on a trailer" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/645f6fda2_IMG_6170.jpg", alt: "Blue and white motorboat on the water" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0c13e7731_IMG_9183.jpg", alt: "Large yacht at a marina dock" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3ed4f5ecd_Resized_20240907_135931.jpg", alt: "Large boat being lifted by a heavy-duty crane" }
  ];

  return (
    <div className="bg-primary-dark">
      {/* Hero Section */}
      <HeroSection />
      <GuaranteeSection />
      <ThirdParty />
      <CustomerService />
      {/* Quick Quote Section */}
      <section id="quick-quote" className="py-2 bg-[#f6f4ff]">
        <div className="max-w-8xl mx-auto px-0">
        
          <QuickQuoteForm />
        </div>
      </section>

      {/* Services Grid */}
      {/* <section className="py-20 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Global Transport Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From coast to coast and around the world, we handle all your shipping needs with precision and care.
            </p>
          </div>
          <ServicesGrid services={services} />
        </div>
      </section> */}

      {/* Trust Signals */}
      {/* <TrustSignals /> */}

      {/* Equipment Highlight */}
      {/* <EquipmentHighlight /> */}

      {/* Image Gallery (now Slideshow) */}
      {/* <Slideshow images={galleryImages} /> */}

      {/* Testimonials */}
      {/* <TestimonialSlideshow testimonials={testimonials} /> */}

      {/* Call to Action */}
      {/* <CallToAction /> */}
      <FAQSection />
    </div>
  );
}
