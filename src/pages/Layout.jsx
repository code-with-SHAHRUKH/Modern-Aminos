import { LucideShoppingCart, ShoppingBasket } from "lucide-react";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
// import { Mail } from "lucide-react";
import { Send } from "lucide-react";
import { Phone, Mail, MapPin, Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const faviconUrl = "";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  useEffect(() => {
    const title = "Modern Aminos";
    const description = " Modern Aminos";
    const keywords = "car transport, boat shipping, yacht hauling, equipment transport, freight logistics, air cargo, oversized loads, LTL shipping, heavy hauling";

    document.title = title;

    const setMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
  }, [currentPageName]);

  const services = [
    { name: "Auto Transport", path: "AutoTransport" },
    { name: "Marine Transport", path: "MarineTransport" },
    { name: "Heavy Equipment", path: "HeavyEquipment" },
    { name: "Freight & Logistics", path: "FreightLogistics" },
    { name: "Air Cargo", path: "AirCargo" },
    { name: "Specialized Transport", path: "SpecializedTransport" },
  ];

  const navigationItems = [
    { name: "Home", path: "Homepage" },
    // { name: "About Us", path: "About" },
    // { name: "Services", isDropdown: true },
    // { name: "Our Equipment", path: "OurEquipment" },
    // { name: "Track Shipment", path: "TrackShipment" },
    // { name: "Blog", path: "Blog" },
     { name: "Contact Us", path: "Contact" },
    { name: "", path: "FAQ" },
   
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-gray-200 font-sans">
      <ScrollToTop />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          
          :root {
            --primary-dark: #0a0f1f;
            --secondary-dark: #1a2035;
            --accent-cyan: #00f5d4;
            --accent-magenta: #ff00f0;
            --accent-yellow: #f1c40f;
            --light-gray: #e5e7eb;
            --dark-gray: #374151;
          }
          body {
            font-family: 'Inter', sans-serif;
            background-color: var(--primary-dark);
          }
          .glass-effect {
            background-color: var(--secondary-dark);
            border-bottom: 1px solid var(--dark-gray);
          }
          .text-shadow-glow {
            text-shadow: 0 0 8px rgba(0, 245, 212, 0.5), 0 0 16px rgba(0, 245, 212, 0.3);
          }
          .nav-link {
            position: relative;
            transition: color 0.3s ease;
          }
          .nav-link:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--accent-cyan);
            transition: width 0.3s ease;
            box-shadow: 0 0 5px var(--accent-cyan);
          }
          .nav-link:hover:after, .nav-link-active:after {
            width: 100%;
          }
           @keyframes pulse-yellow {
            0% {
              box-shadow: 0 0 0 0 rgba(241, 196, 15, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(241, 196, 15, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(241, 196, 15, 0);
            }
          }
          .cta-button-animated {
            animation: pulse-yellow 2s infinite;
            background-color: var(--accent-yellow);
            color: #111;
            font-weight: bold;
            transition: all 0.3s ease;
          }
          .cta-button-animated:hover {
             background-color: #ffdd57;
             transform: scale(1.05);
          }
          .call-button:hover {
            background-color: var(--accent-cyan) !important;
            color: var(--primary-dark) !important;
            border-color: var(--accent-cyan) !important;
          }
          .header-logo, .footer-logo {
            transition: transform 0.3s ease, filter 0.3s ease;
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
          }
          .header-logo:hover, .footer-logo:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.7));
          }
          .hero-pattern {
            position: relative;
            background-size: cover;
            background-position: center;
          }
          .hero-pattern::before {
              content: '';
              position: absolute;
              top: 0; right: 0; bottom: 0; left: 0;
              background-color: rgba(10, 15, 31, 0.7);
              z-index: 1;
          }
          .hero-pattern > * {
              position: relative;
              z-index: 2;
          }
        `}
      </style>

      {/* Header */}
      <header className=" bg-white z-50 font-sans">
        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to={createPageUrl("Homepage")} className="flex items-center space-x-2">
              <img 
                src="/logo-svg.svg" 
                alt="Everything Transport Logo" 
                className="h-15 w-auto header-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-4 flex-1 ml-6">
           {navigationItems.map((item) =>
  item.isDropdown ? (
    <DropdownMenu key="services-dropdown">
      
      {/* Dropdown Trigger */}
      <DropdownMenuTrigger
        className={`px-4 py-2 rounded-full flex items-center space-x-1 font-medium outline-none transition-all duration-200
        ${
          location.pathname.includes("Transport") ||
          location.pathname.includes("Logistics")
            ? "bg-gray-200 text-[#2c4a63]"
            : "text-gray-300 hover:text-white"
        }`}
      >
        <span>Services</span>
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent className="w-56 bg-[#1a2035] border-2 border-accent-cyan/50 text-gray-200 p-2 shadow-2xl shadow-accent-cyan/20">
        {services.map((service) => (
          <DropdownMenuItem key={service.name} asChild className="p-0">
            <Link
              to={createPageUrl(service.path)}
              className={`block w-full px-4 py-2 text-sm rounded-md cursor-pointer transition-colors
                ${
                  location.pathname === createPageUrl(service.path)
                    ? "bg-gray-200 text-[#2c4a63]"
                    : "hover:bg-white hover:text-primary-dark"
                }
              `}
            >
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    
    /* Normal Links */
    <Link
      key={item.name}
      to={createPageUrl(item.path)}
      className={`px-4 py-1.5 rounded-full font-medium transition-all duration-200
        ${
          location.pathname === createPageUrl(item.path)
            ? "bg-gray-200 text-[#12608E]"   // ✅ Active (image jaisa)
            : "text-gray-700 hover:text-[#12608E]"
        }
      `}
    >
      {item.name}
    </Link>
  )
)}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
       <div className="inline-flex items-center justify-center">
  <a 
    href="/my-account" 
    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
  >
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  className="w-6 h-6 text-[#116190]"
  fill="none"
  stroke="#116190"
  strokeWidth="1"
>
  <path 
    d="M12 11.6C9.20002 11.6 6.90002 9.30002 6.90002 6.50002C6.90002 3.70002 9.20002 1.40002 12 1.40002C14.8 1.40002 17.1 3.70002 17.1 6.50002C17.1 9.30002 14.8 11.6 12 11.6Z"
    fill="none"
  />
  <path 
    d="M19 22.6H5.00002C3.60002 22.6 2.40002 21.4 2.40002 20C2.40002 16.4 5.40002 13.4 9.00002 13.4H15C18.6 13.4 21.6 16.4 21.6 20C21.6 21.4 20.4 22.6 19 22.6Z"
    fill="none"
  />
</svg>
  </a>
</div>
            </div>
            
            {/* Mobile Menu */}
            {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-secondary-dark border-gray-700 text-gray-200">
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="py-6">
                  <nav className="flex flex-col space-y-6">
                    {navigationItems.map((item) =>
                      item.isDropdown ? null : ( 
                      <Link
                        key={item.name}
                        to={createPageUrl(item.path)}
                        className="text-gray-200 hover:text-accent-cyan font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-700 pt-4">
                      <h3 className="font-semibold mb-3 text-white">Services</h3>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={createPageUrl(service.path)}
                          className="block py-2 text-gray-300 hover:text-accent-cyan"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <Link to={createPageUrl("Quote")} onClick={() => setIsOpen(false)}>
                      <Button className="w-full cta-button-animated">
                        GET A QUOTE
                      </Button>
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Floating CTA */}
     <div className="fixed bottom-6 right-6 z-50">

  {/* Cart Button */}
  <div className="relative">
    
    {/* Badge */}
    <span className="absolute -top-2 -left-2 bg-black text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
      0
    </span>

    {/* Button */}
    <button className="bg-[#296d94] w-16 h-16 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition duration-300">
      <svg data-icon="cart-4" width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
    <path d="M23.25 17.35V11.2h-6.2v-3h6.2V2.05h3V8.2h6.15v3h-6.15v6.15ZM14.5 44q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55Q13 36.8 14.5 36.8q1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q16 44 14.5 44Zm20.2 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q36.2 44 34.7 44ZM14.5 33.65q-2.1 0-3.075-1.7-.975-1.7.025-3.45l3.05-5.55L7 7H3.1V4h5.8l8.5 18.2H32l7.8-14 2.6 1.4-7.65 13.85q-.45.85-1.225 1.3-.775.45-1.825.45h-15l-3.1 5.45h24.7v3Z"></path>
</svg>
    </button>

  </div>

</div>

      {/* Footer */}
  <footer class="bg-[#0b3a56] text-white">
  <div class="max-w-7xl mx-auto px-6 py-8 pt-14">

    {/* <!-- Top Grid --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">

      {/* <!-- Logo + Text --> */}
      <div className="mb-8">
      <Link to={createPageUrl("Homepage")} className="flex items-center space-x-4 mb-4">
              <img 
                src="/icons/Gemini_Generated_Logo.png" 
                alt="Everything Transport Logo" 
                className="h-14 w-auto "
              />
            </Link>
        <p class="text-md md:text-sm text-white font-medium leading-7 p-1 pr-1 md:pr-4">
          Quality products and exceptional service are very important to us
        </p>
      </div>

 {/* Contact + Quick Links (same column) */}
<div className="flex flex-col gap-8">

  {/* Contact */}
  <div>
    <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
      <a 
      href="mailto:cs@modernaminos.com" 
      className="flex items-center gap-2 text-gray-100 hover:text-white transition"
    >
      <Mail size={16} />
      cs@modernaminos.com
    </a>

  </div>

  {/* Quick Links */}
  <div>
    <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
    <ul className="space-y-2 text-gray-100">
      <li><a href="https://modernaminos.com" className="hover:text-white">Home</a></li>
      <li><a href="https://modernaminos.com/contact-us/" className="hover:text-white">Contact us</a></li>
    </ul>
  </div>

</div>

      {/* <!-- Subscribe --> */}
<div className="rounded-md max-w-sm w-full px-0 sm:px-10 pt-6 sm:pt-0 text-left mx-0 sm:mx-auto">
  
  <h5 className="text-white text-lg font-semibold mb-2">
    Subscribe now to save 15%
  </h5>

  <p className="text-gray-200 text-sm mb-5 leading-relaxed">
    Subscribe and Get Exclusive Updates <br />
    Straight to your Inbox for Free
  </p>

  {/* Input + Button */}
  <form className="flex items-center bg-[#1e576b00] rounded-full overflow-hidden border border-gray-50">
    
    <input
      type="email"
      placeholder="Email"
      className="flex-1 text-sm bg-transparent px-4 py-2 text-white placeholder-gray-300 focus:outline-none"
      required
    />

    <button
      type="submit"
      className="flex items-center gap-2 bg-white text-black  px-3 py-3 rounded-r-full hover:bg-gray-200 transition"
    >
      <Send size={16} />
      <span className="text-sm font-medium">Send</span>
    </button>

  </form>

</div>

    </div>

    {/* <!-- Disclaimer --> */}
    <div class="mt-6 text-xs md:text-sm p-1 text-white text-left md:text-center leading-6 md:leading-8 px-1 md:px-16">
      Please be advised: All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
    </div>

    {/* <!-- Bottom Bar --> */}
 <div className="mt-6 md:mt-8 flex flex-col-reverse md:flex-row justify-between items-center text-sm text-gray-100 gap-4">
  
  <div className="mt-14 md:mt-0 text-center md:text-left">
    Copyright 2026, All Rights Reserved.
  </div>

  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 text-center">
    <a href="https://modernaminos.com/privacy-policy/" className="hover:text-white">
      Privacy Policy
    </a>
    <a href="https://modernaminos.com/refund-policy/" className="hover:text-white">
      Refund Policy
    </a>
    <a href="/terms-and-conditions" className="hover:text-white">
      Terms & Conditions
    </a>
    <a href="https://modernaminos.com/terms-of-service/" className="hover:text-white">
      Terms of Service
    </a>
  </div>

</div>
  </div>
</footer>
    </div>
  );
}
