
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section 
      className="py-16 gradient-bg hero-pattern" 
      style={{backgroundImage: 'url(https://images.unsplash.com/photo-1577974026372-4587c4a1c189?q=80&w=1932&auto=format&fit=crop)'}}
    >
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
          Ready to Ship? Get Started Today!
        </h2>
        <p className="text-xl mb-8 text-shadow">
          Join thousands of satisfied customers who trust Everything Transport for their global shipping needs
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={createPageUrl("Quote")}>
            <Button 
              size="lg" 
              className="bg-accent-yellow hover:bg-yellow-500 text-gray-900 text-xl px-8 py-4 rounded-lg font-bold shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 cta-button-animated"
            >
              GET FREE QUOTE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:347-494-2235">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm text-xl px-8 py-4 rounded-lg font-bold transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: 347-494-2235
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
