
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, MapPin, Star, Users, Award } from "lucide-react";

export default function TrustSignals() {
  const trustSignals = [
    {
      icon: Shield,
      title: "Fully Insured & Secure",
      description: "Your cargo is protected with comprehensive insurance, providing complete peace of mind from pickup to final delivery, anywhere in the world.",
      highlight: "Up to $1M Coverage"
    },
    {
      icon: Clock,
      title: "24/7 Logistics Support",
      description: "Our dedicated logistics team is available around-the-clock, offering live tracking updates and expert support for every shipment.",
      highlight: "Always Available"
    },
    {
      icon: MapPin,
      title: "Extensive Global Network",
      description: "We utilize an extensive network of vetted carriers, ensuring reliable and efficient transport solutions across all continents.",
      highlight: "Worldwide Reach"
    },
    {
      icon: Star,
      title: "Top-Rated Customer Service",
      description: "Our commitment to excellence is reflected in our industry-leading service and outstanding five-star customer reviews across the board.",
      highlight: "5-Star Experience"
    },
    {
      icon: Users,
      title: "Decades of Experience",
      description: "With a track record of thousands of successful international and domestic deliveries, we have the expertise for any challenge.",
      highlight: "Proven Track Record"
    },
    {
      icon: Award,
      title: "Licensed & Compliant",
      description: "As a fully licensed transport management company, we adhere to the strictest international and domestic standards for your protection.",
      highlight: "Fully Compliant"
    }
  ];

  return (
    <section className="py-20 bg-secondary-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Everything Transport?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Decades of experience and a commitment to excellence have built our reputation as a globally trusted transport partner.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trustSignals.map((signal, index) => (
            <Card 
              key={index} 
              className="bg-primary-dark/90 rounded-xl shadow-2xl shadow-accent-cyan/10 hover:shadow-accent-cyan/20 transition-all duration-300 transform hover:-translate-y-2 border border-accent-cyan/30"
            >
              <CardContent className="p-8 text-center">
                <div 
                  className="w-16 h-16 bg-accent-cyan rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/50"
                >
                  <signal.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{signal.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{signal.description}</p>
                <div 
                  className="inline-block bg-accent-cyan text-white px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {signal.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
