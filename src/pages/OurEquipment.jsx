
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import CallToAction from '../components/homepage/CallToAction';

export default function OurEquipment() {
  const equipment = [
    {
      category: "Specialized Boat & Yacht Trailers",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c0f05dc97_IMG_20230927_121222_02.jpg",
      description: "Transporting marine vessels is an art form that demands precision equipment. We utilize a fleet of custom-built, hydraulic, and multi-axle trailers engineered to cradle any vessel securely. Our state-of-the-art Waltron and Hostar hydraulic trailers feature air-ride suspension to minimize road vibration and adjustable bunks and pads to provide perfect support for any hull shape—power or sail. This meticulous approach ensures your boat's structural integrity is protected and the weight is perfectly distributed, preventing any stress during overland transport, from small center consoles to massive, 120-foot ocean-going yachts.",
      features: ["Hydraulic Lift & Air-Ride Suspension", "Custom-Fit Bunks & Supports", "Multi-Axle for Heavy Loads", "For Vessels up to 120ft"]
    },
    {
      category: "Versatile Flatbed & Gooseneck Trailers",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d2b286e70_PHOTO-2023-03-01-12-32-54.jpg",
      description: "For heavy equipment, construction materials, and oversized freight, our versatile flatbed, step-deck, and gooseneck trailers are the backbone of our operations. Maintained to the highest federal standards, they are ready to handle the most demanding construction, agricultural, and industrial transport jobs. Our lowboy and RGN (Removable Gooseneck) trailers allow for easy roll-on/roll-off loading of drivable machinery, while our extendable flatbeds can accommodate extra-long items, providing a flexible and robust solution for virtually any load.",
      features: ["Step-Deck & Lowboy Designs", "Extendable for Oversized Loads", "High Weight Capacity", "Secure Tie-Down Systems"]
    },
    {
      category: "Heavy-Duty Trucks & Pilot Vehicles",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2cb7ccdfe_KIMG1252.jpg",
      description: "A trailer is only as good as the truck pulling it. Our fleet is powered by modern, meticulously maintained heavy-duty trucks from leading manufacturers like Peterbilt and Kenworth. These high-horsepower rigs provide the torque and reliability needed for the toughest hauls. For all oversized loads, we coordinate professional pilot/escort vehicles (P/EV) to ensure every shipment is powerful, efficient, and fully compliant with all state and federal road safety regulations, guaranteeing a safe journey for your cargo and the public.",
      features: ["Modern, High-Horsepower Fleet", "Professional Pilot/Escort Vehicles", "GPS & Live Monitoring", "Regularly Inspected & Maintained"]
    },
    {
      category: "Enclosed & Auto Carriers",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f27bb12f1_6.jpg",
      description: "For maximum protection against the elements and road debris, our enclosed auto carriers are the ultimate solution. Ideal for classic cars, luxury vehicles, race cars, and motorcycles, these carriers provide a secure, private, and pristine transport environment. Our hard-sided and soft-sided options come equipped with advanced hydraulic lift gates for low-clearance vehicles and sophisticated E-track and soft-strap systems to ensure your vehicle is anchored securely without any chassis contact, delivering true white-glove service from start to finish.",
      features: ["Hard-Sided & Soft-Sided Options", "Lift Gates for Low-Clearance Vehicles", "Climate Control Available", "White-Glove Service"]
    }
  ];

  const additionalFeatures = [
    {
      title: "State-of-the-Art Loading Systems",
      description: "Our advanced hydraulic systems and custom-built loading ramps ensure safe and efficient loading of all types of vehicles and equipment, minimizing handling time and maximizing protection.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ca2ca37a9_dtmtransportationllcgmailcom.jpg"
    },
    {
      title: "Advanced Tracking & Communication",
      description: "Every vehicle in our fleet is equipped with GPS tracking systems and satellite communication, allowing real-time monitoring and constant communication with our drivers and dispatch team.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7ce707149_KIMG1250.jpg"
    },
    {
      title: "Comprehensive Safety Systems",
      description: "Our commitment to safety extends beyond regulatory compliance. Each trailer features advanced braking systems, stability control, and redundant safety mechanisms to protect your cargo and other road users.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/21e47c535_oversizeload.jpg"
    }
  ];

  const specifications = [
    { spec: "Maximum Load Capacity", value: "150,000 lbs" },
    { spec: "Maximum Trailer Length", value: "120 feet" },
    { spec: "Maximum Width Capability", value: "16 feet" },
    { spec: "Fleet Size", value: "50+ specialized trailers" },
    { spec: "Coverage Area", value: "48 States + International" },
    { spec: "Average Transit Time", value: "3-7 days domestic" }
  ];

  return (
    <div className="bg-primary-dark text-white">
      {/* Hero Section */}
      <div className="relative hero-pattern" style={{backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/56fce40b6_IMG_0106.jpg')"}}>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow-glow">
            State-of-the-Art Transport Equipment
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto text-shadow-md">
            The right tools for the job, every time. Our investment in modern, specialized equipment ensures your property is transported with maximum safety, efficiency, and care.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to={createPageUrl("Quote")}
              className="cta-button-animated inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Equipment Grid */}
      <div className="py-20 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {equipment.map((item, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-row-dense lg:grid-cols-2 lg:[&>*:last-child]:col-start-1' : ''}`}>
              <div className="rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10">
                <img src={item.image} alt={`${item.category} by Everything Transport`} className="w-full h-full object-cover"/>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-accent-cyan">{item.category}</h2>
                <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Features & Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence extends beyond just having the right equipment—we continuously invest in the latest technology and safety features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="bg-secondary-dark/90 border-gray-700 text-white shadow-xl">
                <CardContent className="p-0">
                  <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-accent-cyan mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-20 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fleet Specifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse fleet capabilities ensure we can handle any transport challenge, regardless of size or complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specifications.map((item, index) => (
              <div key={index} className="text-center bg-primary-dark/60 p-8 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-accent-cyan mb-2">{item.value}</div>
                <div className="text-gray-300">{item.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Commitment Section */}
      <div className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Commitment to Quality & Safety</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">Using the right equipment is just the start. Our commitment is to a culture of safety, compliance, and professionalism that protects your assets and everyone on the road.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary-dark p-8 rounded-lg border border-gray-700">
              <ShieldCheck className="w-12 h-12 text-accent-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Impeccable Maintenance</h3>
              <p className="text-gray-400">Our entire fleet undergoes rigorous, proactive maintenance schedules that exceed DOT regulations. This ensures optimal performance and minimizes the risk of mechanical delays, keeping your shipment on schedule.</p>
            </div>
            <div className="bg-secondary-dark p-8 rounded-lg border border-gray-700">
              <ShieldCheck className="w-12 h-12 text-accent-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Regulatory Compliance</h3>
              <p className="text-gray-400">We are fully licensed, insured, and bonded. We handle all necessary permits, escorts, and route planning for oversized loads, ensuring full compliance with all state and federal transportation laws.</p>
            </div>
            <div className="bg-secondary-dark p-8 rounded-lg border border-gray-700 md:col-span-2 lg:col-span-1">
              <ShieldCheck className="w-12 h-12 text-accent-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Experienced Operators</h3>
              <p className="text-gray-400">Our drivers and transport specialists are seasoned professionals with years of experience in handling high-value, oversized, and complex loads. Their expertise is your guarantee of a safe and successful delivery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Certifications */}
      <div className="py-20 bg-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Industry Certifications & Compliance</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-cyan rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary-dark" />
              </div>
              <h3 className="font-bold text-white mb-2">DOT Certified</h3>
              <p className="text-gray-400 text-sm">Department of Transportation certified for interstate commerce</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-cyan rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary-dark" />
              </div>
              <h3 className="font-bold text-white mb-2">MC Authority</h3>
              <p className="text-gray-400 text-sm">Motor Carrier Authority for regulated transportation services</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-cyan rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary-dark" />
              </div>
              <h3 className="font-bold text-white mb-2">Fully Insured</h3>
              <p className="text-gray-400 text-sm">Comprehensive cargo and liability insurance coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-cyan rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary-dark" />
              </div>
              <h3 className="font-bold text-white mb-2">HAZMAT Certified</h3>
              <p className="text-gray-400 text-sm">Certified for hazardous materials transport when required</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
}
