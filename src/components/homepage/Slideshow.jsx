
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Slideshow({ images }) {
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
      }, 2500); // Change image every 2.5 seconds
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
      className="py-16 bg-secondary-dark text-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A glimpse into the diverse and complex transport jobs we handle every day, across the country and around the world.
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
          <CarouselContent>
            {[
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/73de23d6b_Loadinga116footSunseekerfromUKtoFlorida-April52021.jpg", alt: "Marine transport specialists loading a 116ft Sunseeker yacht" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a2b758eea_f4bb84b6-3de7-4479-a2cd-11e4c8112664.jpg", alt: "Red truck hauling multiple OPUS camper trailers" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6efffe0d9_oversizeload.jpg", alt: "Oversize load truck transport for heavy equipment hauling" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ff6fb7ba0_IMG-1820.jpg", alt: "Luxury auto transport of a Black BMW M3 on a transport truck" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/78595b0df_PHOTO-2023-08-18-16-55-18.jpg", alt: "Yacht loaded on cargo ship for international marine shipping" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/88d3e35f1_2Ecoontrailer.jpg", alt: "Heavy construction equipment loaded on a specialized trailer" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f3ff62982_IMG_2194.jpg", alt: "Boat being lifted by crane at a marina for transport" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8a1bf0030_IMG_4703.jpeg", alt: "Wakeboarding boat being prepped for transport" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/663bb7969_b03c4f5c-5ec4-4ecf-a829-6cdf8e61f798.jpg", alt: "Classic car being transported in an enclosed carrier" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f43831b55_IMG_59201.jpg", alt: "Donzi performance boat on a multi-axle trailer" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/71e2aa6fd_f7ffcd6d-4810-4089-9868-b69de8edf142.jpg", alt: "Sailboat transport overland on a custom trailer" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d478c1397_dtmtransportationllcgmailcom.jpg", alt: "Super Air Nautique boat on a trailer ready for shipping" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b4260f802_image0000013.jpg", alt: "Custom boat transport for a 'Diamond Girl' vessel" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/575ff3a5e_Loadinga116footSunseekerfromUKtoFlorida-April52021photo2.jpg", alt: "Detailed view of a Sunseeker yacht loading process" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/64a36b5e6_5Phoenix3axle.jpg", alt: "Phoenix multi-axle trailer for heavy hauling" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b81be4eb0_81122552-bec7-49be-853d-5490b032f0d4.jpg", alt: "Car secured on a flatbed transport trailer" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1e3e19134_0d4e365e-dbe3-4fc4-ac36-ff43df8950a4.jpg", alt: "Specialized transport for a competitive rowing boat" },
              { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d12b76944_9E4D0416-90D3-4E12-AFDF-76B46285AA6A.jpg", alt: "Crane lifting a boat from the water for transport" }
            ].map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden bg-primary-dark border-gray-700">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
