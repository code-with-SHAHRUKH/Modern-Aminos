
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const images = [
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/135f5a2d2_Loadinga116footSunseekerfromUKtoFlorida-April52021.jpg", alt: "Everything Transport loading a large yacht onto a cargo ship for marine transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f27bb12f1_6.jpg", alt: "Enclosed auto transport carrier shipping a luxury vehicle with Everything Transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/892604439_oversizeload.jpg", alt: "Heavy equipment oversize load being transported on a highway by Everything Transport" },
    { src: "https://images.unsplash.com/photo-1610254549234-225917a22c45?q=80&w=2070&auto=format&fit=crop", alt: "Air cargo plane being loaded with freight for Everything Transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e652a9104_RenderedImage54.jpg", alt: "Freight and logistics containers at a port, managed by Everything Transport" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c246e3c1d_IMG_2194.jpg", alt: "Boat being carefully lifted by a marina crane for transport" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (

    <>
        <div className="w-full bg-[#12608E] text-white py-1 px-6 text-center">
    <p className="text-xs md:text-lg font-medium">
      Login for the full experience. - For laboratory research use only. Not for human consumption.
    </p>
  </div>
   <section className=" w-full min-h-screen flex items-center justify-center bg-[#f6f4ff] py-16 pt-8 px-6">

<div className="relative max-w-8xl w-full rounded-3xl shadow-xl overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/Background-Image.webp"
      className="w-full h-full object-cover"
      alt="background"
    />
    <div className="absolute inset-0 bg-black/10"></div>
  </div>

  {/* Content */}
  <div className="relative grid grid-cols-1 lg:grid-cols-2">

    {/* LEFT SIDE */}
    <div className="p-4 lg:p-6 mt-4 lg:mt-18 flex flex-col justify-center">
     
      <h2 className="text-2xl lg:text-5xl font-bold text-white lg:leading-snug mb-6 mr-2 md:pr-5">
        Thank you for Visiting Modern Aminos
      </h2>
 <div className="max-w-xl lg:max-w-xl">
      <p className="text-gray-200 text-md mb-6 leading-relaxed">
        At Modern Aminos, we are committed to maintaining a highly compliant
        and researcher-friendly experience. To support this commitment, we now
        require researchers to log in to their user account in order to view
        our full selection of research materials. If you do not have an
        existing account with us please register below.
      </p>

      <p className="text-gray-200 text-md mb-8 leading-relaxed">
        <strong>Please be advised:</strong> All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment
      </p>
</div>
<div className="flex flex-col items-start">
  <a
    href="/my-account/"
    className="inline-flex w-fit border-[1px] border-white text-white px-7 py-[9px] rounded-md font-medium transition duration-300 hover:bg-white hover:text-[#12608E]"
  >
    Register Now
  </a>
</div>
    </div>

    {/* RIGHT SIDE */}
    <div className="p-4 lg:p-10 lg:pt-20 m-4 lg:m-14 mr-5 flex flex-col justify-center border border-white rounded-xl">
    
      <h2 className="text-2xl font-bold text-white mb-6">
        Login
      </h2>

      <form className="space-y-6">

        {/* Username */}
        <div>
          <label className="block text-md font-medium text-white mb-3">
            Username or email address *
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-0 focus:ring-none outline-none bg-transparent text-white placeholder-white"
          />
        </div>

        {/* Password */}
    <div>
  <label className="block text-md font-medium text-white mb-3">
    Password *
  </label>
<input
  type="password"
  placeholder="Enter password"
  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-0 focus:ring-none outline-none bg-transparent text-white placeholder-white"
/>
</div>
        {/* Remember me */}
        <div className="flex items-center justify-between text-md font-medium">
          <label className="flex items-center gap-2 text-white">
            <input type="checkbox" className="accent-black" />
            Remember Me
          </label>

          {/* <a
            href="/my-account/lost-password/"
            className="text-gray-600 hover:text-black"
          >
            Lost your password?
          </a> */}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-fit bg-[#12608E] text-white py-2 px-6 font-medium rounded-full"
        >
          Log In
        </button>

        {/* Register */}
     <p className=" text-white text-start space-x-1">
  <a href="/my-account/lost-password/" className="text-white text-sm hover:text-pink-600">
    Lost your password?
  </a>
  <span className="text-gray-600">|</span> {/* Optional separator */}
  <a href="/my-account/" className="text-white text-md hover:text-pink-600">
    Register
  </a>
</p>
      </form>

      {/* Social Login */}
    <div className="mt-8 space-y-3 flex flex-col items-center sm:items-start">

  <button className="w-full sm:w-fit flex text-black items-center justify-center sm:justify-between gap-3 border rounded-md py-2 px-5 sm:px-7 bg-gray-50">
    <img src="/google-icon.png" className="w-5 h-5" />
    <span className="text-sm sm:text-base">Continue with Google</span>
  </button>

  <button className="w-full sm:w-fit flex items-center justify-center gap-3 bg-[#272d31] text-white rounded-md py-2 px-5">
    <img src="/micro.png" className="w-6 h-5" />
    <span className="text-sm sm:text-base">Continue with Microsoft</span>
  </button>

</div>
    </div>

  </div>

</div>
</section>
    </>

  );
}
