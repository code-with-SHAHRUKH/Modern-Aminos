import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    // General Questions
    {
      category: "General",
      question: "How do I get an accurate shipping quote?",
      answer: "For the most accurate quote, please use our online 'GET A QUOTE' form and provide as much detail as possible, including dimensions, weight, and specific locations (domestic or international). The more information we have, the more precise our initial estimate will be. For complex or oversized shipments, we recommend calling us at 347-494-2235 to speak with a logistics specialist."
    },
    {
      category: "General",
      question: "Is my shipment insured during transport?",
      answer: "Yes, every shipment is protected by the carrier's cargo insurance. We ensure all our transport partners, both domestic and international, are fully insured and meet all regulatory guidelines. The specific coverage amount varies by carrier and the type of item being shipped. We can provide all insurance documentation upon request and help arrange supplemental insurance for particularly high-value items."
    },
    {
      category: "General",
      question: "How far in advance should I book my transport?",
      answer: "To ensure the best availability and pricing, we recommend booking at least 2-3 weeks in advance for domestic transport and 4-6 weeks for international shipments. For specialized or oversized loads, more notice is always better. However, our vast global network allows us to often accommodate expedited and last-minute requests. Call us to check our immediate availability."
    },
    {
      category: "General",
      question: "What does 'door-to-door' service mean?",
      answer: "Door-to-door service means the carrier will pick up and deliver your vehicle as close to your specified addresses as is legally and safely possible. In some cases, low-hanging trees, narrow streets, or local restrictions may prevent a large transport truck from reaching your front door. In these instances, the driver will arrange to meet you at a nearby, accessible location like a large parking lot or commercial area."
    },
     {
      category: "General",
      question: "How can I track my shipment?",
      answer: "Once your shipment is booked, you will receive a unique tracking number. You can enter this number on our 'Track Shipment' page to see the latest status updates, current location, and estimated delivery timeline. For in-transit shipments, location is typically updated once daily."
    },
    {
      category: "General",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards for the initial deposit payment, which can be made securely on our website. The remaining balance is typically paid directly to the carrier upon delivery, often via cash, certified check, or money order. Specific payment options for the final balance may vary by carrier."
    },
    {
      category: "General",
      question: "What happens if my delivery is delayed?",
      answer: "While we and our carriers strive for on-time delivery, unforeseen circumstances like weather or traffic can cause delays. We are committed to proactive communication. Your logistics coordinator will keep you informed of any changes to your schedule and provide you with updated ETAs as soon as possible."
    },

    // Auto Transport
    {
      category: "Auto Transport",
      question: "What is the difference between open and enclosed auto transport?",
      answer: "Open transport is the industry standard and the most economical choice. Your vehicle is transported on an open-air carrier, like those used to deliver new cars to dealerships. It is safe and efficient. Enclosed transport offers maximum protection by shipping your vehicle inside a fully covered trailer, safeguarding it from weather and road debris. This is the preferred method for classic, exotic, or high-value vehicles."
    },
    {
      category: "Auto Transport",
      question: "How do I prepare my car for transport?",
      answer: "Clean your vehicle inside and out to allow for a clear inspection. Remove all personal items, as they are not insured. Leave no more than 1/4 tank of fuel. Ensure your vehicle is in good running order, with no leaks, and inform us of any operational quirks. Make sure the battery is secure and the tires are properly inflated."
    },
    {
      category: "Auto Transport",
      question: "Can you ship a non-running vehicle?",
      answer: "Yes, we can arrange transport for non-operational vehicles. Please inform us at the time of booking, as this requires a carrier with a winch, and there may be an additional fee for the specialized equipment and handling."
    },
    {
      category: "Auto Transport",
      question: "Can I put personal items in my car?",
      answer: "We strongly advise against it. Carriers are not licensed to transport household goods, and any personal items left in the vehicle are not covered by cargo insurance. Typically, up to 100 lbs. of items may be allowed in the trunk, but this is at the carrier's discretion and should be confirmed beforehand."
    },

    // Marine Transport
    {
      category: "Marine Transport",
      question: "Can you ship my boat internationally?",
      answer: "Absolutely. We are specialists in international boat and yacht shipping. This can be done via Roll-on/Roll-off (RoRo) service where the boat is towed onto the vessel, or Lift-on/Lift-off (LoLo) where it is craned on. We handle the entire process, including cradle construction, shrink-wrapping for protection, and navigating complex customs paperwork."
    },
    {
      category: "Marine Transport",
      question: "How should I prepare my boat for transport?",
      answer: "Secure all loose items above and below deck. Empty water and fuel tanks as much as possible. Disconnect batteries and secure cables away from them. Ensure all canvas covers, bimini tops, and electronics are removed or securely fastened. For international shipping, a thorough cleaning of the hull may be required."
    },
    {
      category: "Marine Transport",
      question: "What is a 'water-to-water' service?",
      answer: "Water-to-water service is a premium offering where your boat is picked up from its current body of water and delivered directly into the water at its destination. This requires specialized hydraulic trailers and coordination with marinas at both ends, providing a seamless, hassle-free experience."
    },

    // Heavy Equipment & Freight
    {
      category: "Heavy Equipment",
      question: "How do you handle oversized heavy equipment and what permits are needed?",
      answer: "We are experts in heavy and oversized transport. Our process includes meticulous route planning to avoid low bridges and other obstacles, arranging all necessary state, federal, and international permits, and coordinating any required pilot cars or escorts. We manage all the logistics to ensure your heavy equipment is transported safely and in full legal compliance."
    },
    {
      category: "Heavy Equipment",
      question: "What kind of trailers do you use for heavy equipment?",
      answer: "We have access to a full range of specialized trailers, including flatbeds, step-decks, double drops, and RGNs (Removable Gooseneck). The choice of trailer depends on the specific dimensions and weight of your equipment, and whether it can be driven on or needs to be craned."
    },
    {
      category: "Freight & Logistics",
      question: "What's the difference between LTL and FTL freight?",
      answer: "LTL (Less-Than-Truckload) is for smaller shipments that don't fill an entire truck; you share space and cost with other shippers. FTL (Full Truckload) is when your shipment is large enough to fill a whole truck, or you prefer a dedicated truck for faster, direct delivery."
    },

    // International Shipping
    {
      category: "International Shipping",
      question: "What documents are required for international shipping?",
      answer: "For international shipping, you will typically need a copy of the title (or a letter from the lienholder if financed), a bill of sale, and a copy of your passport or government-issued ID. Depending on the destination country, other specific forms may be required. Our international logistics team will guide you through the exact documentation needed for your specific shipment to ensure a smooth customs process."
    },
    {
      category: "International Shipping",
      question: "What is RoRo vs. Container shipping?",
      answer: "RoRo (Roll-on/Roll-off) is where a vehicle or boat on a trailer is driven directly onto the vessel. It is often the most cost-effective method. Container shipping involves your item being loaded and secured inside a standard 20ft or 40ft shipping container, offering greater protection. This is ideal for smaller vehicles, motorcycles, or when shipping personal effects along with a vehicle."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
    (acc[faq.category] = acc[faq.category] || []).push(faq);
    return acc;
  }, {});

  return (
    <div className="bg-primary-dark text-light-gray py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400">Your comprehensive guide to global transport logistics.</p>
        </div>

        <div className="relative mb-8">
          <Input 
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 bg-secondary-dark border-gray-700 rounded-lg text-white focus:ring-accent-cyan focus:border-accent-cyan"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        
        {Object.keys(groupedFaqs).length > 0 ? (
          Object.entries(groupedFaqs).map(([category, faqs]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-accent-cyan mb-4 pb-2 border-b-2 border-gray-700">{category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                    <AccordionTrigger className="text-lg text-left hover:no-underline hover:text-accent-cyan">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-400 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 mt-8">No questions found matching your search.</p>
        )}
      </div>
    </div>
  );
}