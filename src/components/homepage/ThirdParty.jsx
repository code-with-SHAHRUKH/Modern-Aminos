import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function ThirdParty() {
  return (
   <div className="w-full flex justify-center px-4 py-10 bg-[#f6f4ff]">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">

    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <img
        src="male-chemist.webp"
        alt="Chemist"
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 text-black space-y-6">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl text-[#002434] font-bold">
        3rd Party Multi Vial Batch Tested
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        At Modern Aminos, we prioritize the quality and authenticity of every
        product we offer. Each product undergoes third-party, multi-vial batch
        testing to verify purity, compound identity, quantity, and endotoxin
        levels. In addition to this rigorous testing process, every vial includes
        a unique batch number, allowing you to directly match your product to its
        corresponding laboratory testing report.
      </p>

      {/* Sub Heading */}
      <h2 className="text-lg text-[#002434] sm:text-xl md:text-2xl font-semibold">
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
  </div>
</div>
  );
}
