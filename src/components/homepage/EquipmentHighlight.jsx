
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Truck, Ship } from 'lucide-react';

export default function EquipmentHighlight() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 bg-secondary-dark/50 p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Right Tools for Every Job, Globally</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our massive global network is supported by an investment in modern, state-of-the-art equipment. From custom hydraulic boat trailers to versatile flatbeds for heavy machinery, we have the specialized tools to ensure every shipment is handled with precision, safety, and efficiency.
          </p>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Truck className="w-6 h-6 text-accent-cyan" />
              <span className="font-semibold text-gray-200">Heavy Haul Rigs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Ship className="w-6 h-6 text-accent-cyan" />
              <span className="font-semibold text-gray-200">Marine Trailers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wrench className="w-6 h-6 text-accent-cyan" />
              <span className="font-semibold text-gray-200">Custom Solutions</span>
            </div>
          </div>
          <div className="pt-4">
            <Link to={createPageUrl("OurEquipment")}>
              <Button size="lg" className="bg-accent-cyan text-primary-dark font-bold hover:bg-cyan-300">
                Explore Our Equipment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-96">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c0f05dc97_IMG_20230927_121222_02.jpg" alt="Specialized boat trailer for marine transport" className="absolute top-0 left-0 w-2/3 h-2/3 rounded-lg object-cover shadow-2xl transition-transform hover:scale-105"/>
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/daf20c569_5d05ffb4-11ca-47cb-8ad2-98e8a79ed228.jpg" alt="Heavy equipment trailer for construction hauling" className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-lg object-cover shadow-2xl border-4 border-secondary-dark transition-transform hover:scale-105"/>
        </div>
      </div>
    </section>
  );
}
