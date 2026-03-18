import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Ship, Building, Warehouse, Plane, Star, Loader2 } from "lucide-react";

export default function QuickQuoteForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

const services = [
  { 
    name: "Third party tested", 
    image: "/icons/assurance.webp", 
    value: "auto_transport",
    description: "Third Party Multi Vial Batch Tested: Our products undergo rigorous third-party, multi-vial batch testing to ensure exceptional safety, purity, and quality. Batch testing also allows you to easily match each peptide to its corresponding Certificate of Analysis (COA)" 
  },
  { 
    name: "Fast Shipping", 
    image: "/icons/fast-delivery.webp", 
    value: "marine_transport",
    description: "Same-Day Shipping Monday through Friday when you order before 12 PM CST! At Modern Aminos, we take pride in our fast, reliable shipping to ensure your order arrives without delay." 
  },
  { 
    name: "24/7 Customer Support (Monday–Friday)", 
    image: "/icons/support.png",
    value: "heavy_equipment",
    description: "Our dedicated customer service team is available Monday through Friday, and for most of the day on weekends, to ensure your needs are handled quickly and efficiently." 
  },
];

  const handleServiceSelect = (serviceValue) => {
    setIsLoading(true);
    setSelectedService(serviceValue);
    // Navigate directly to the quote page with the service type as a URL parameter
    navigate(createPageUrl(`Quote?service_type=${serviceValue}`));
  };

  return (
<Card className="max-w-8xl mx-auto text-white bg-[#f6f4ff] shadow-none border-none">
  <CardContent className="p-4 sm:p-8">
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {services.map((service, index) => (
        <button
          key={service.value}
          onClick={() => handleServiceSelect(service.value)}
          disabled={isLoading}
          className={`
            group flex rounded-xl flex-col items-center justify-center 
            p-5 sm:p-8 bg-[#0b2333fb] border-[2.5px] border-[#12608E] 
            hover:border-accent-cyan hover:bg-secondary-dark hover:scale-105 
            hover:shadow-2xl hover:shadow-accent-cyan/20 
            transition-all duration-300 space-y-2 sm:space-y-3
            disabled:opacity-50 disabled:cursor-not-allowed

            ${index === 2 ? "col-span-2 md:col-span-1" : ""}
          `}
        >
          
          {/* Icon / Loader */}
          {isLoading && selectedService === service.value ? (
            <Loader2 className="w-10 h-10 sm:w-12 sm:h-12 text-accent-cyan animate-spin" />
          ) : (
            <img 
              src={service.image} 
              alt={service.name} 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
            />
          )}

          {/* Heading */}
          <span className="font-bold text-center px-2 sm:px-4 text-xs sm:text-2xl text-gray-200 group-hover:text-white transition-colors">
            {service.name}
          </span>

          {/* Description (hidden on mobile) */}
          <span className="hidden sm:block text-center px-4 text-white text-md group-hover:text-gray-200 transition-colors">
            {service.description}
          </span>

        </button>
      ))}
    </div>

  </CardContent>
</Card>
  );
}