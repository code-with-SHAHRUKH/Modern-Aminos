
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialSlideshow({ testimonials }) {
  const [api, setApi] = useState();
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        if (api && !isHovering) {
          api.scrollNext();
        }
      }, 4000); // Change every 4 seconds
    };

    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isHovering]);

  return (
    <section 
      className="py-16 bg-primary-dark"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300">
            Trusted by thousands for reliable global transport services
          </p>
        </div>
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full bg-secondary-dark border-gray-700 text-white shadow-lg">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <Quote className="w-10 h-10 text-accent-cyan/50 mb-4" />
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic h-32 overflow-auto">"{testimonial.text}"</p>
                      <div className="mt-auto">
                        <p className="font-bold text-lg text-white">{testimonial.name}</p>
                        <p className="text-md text-gray-400">{testimonial.industry}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-secondary-dark hover:bg-gray-700 text-white" />
          <CarouselNext className="hidden sm:flex bg-secondary-dark hover:bg-gray-700 text-white" />
        </Carousel>
      </div>
    </section>
  );
}
