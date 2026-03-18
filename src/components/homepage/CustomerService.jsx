import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CustomerService() {
  return (
   <div className="w-full flex justify-center px-4 py-10 bg-[#f6f4ff]">
  <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-10">


  

    {/* Content Section */}
    <div className="w-full md:w-1/2 text-black space-y-6">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl text-[#002434] font-bold">
        Customer Service and Experience Always Comes First
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
      We understand that even though high quality research materials allows for the best most reliable results in labratory settinsg, things like slow shipping, and poor customer service can make already tedious research more of a headache. That is why here at Modern Aminos our customer service and shipping teams work around the clock to ensure that you are getting your material fast, and any shipping related inquries handled
      </p>

      {/* Sub Heading */}
      <h2 className="text-lg text-[#002434] sm:text-xl md:text-2xl  font-semibold">
        Login for the full experience.
      </h2>

      {/* Button */}
      <a
        href="/my-account/"
        className="inline-block bg-[#12608E] hover:bg-[#0e4e74] text-white font-semibold px-8 py-1.5 rounded-full transition duration-300"
      >
        Login
      </a>

    </div>
      <div className="w-full md:w-1/2">
      <img
        src="/ind13.webp"
        alt="Chemist"
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  </div>
</div>
  );
}
