
import React from "react";
import { Shield, Users, Globe, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Globe, value: "15+", label: "Years of Experience" },
    { icon: Users, value: "10,000+", label: "Successful Shipments" },
    { icon: Shield, value: "100%", label: "Licensed & Insured" },
    { icon: Award, value: "A+", label: "BBB Rating" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4a8a7e560_Loadingan82footSunseekeryachtfromFortLauderdaleFloridatoIstanbulTurkey-December2020photo1.jpg"
            alt="Everything Transport team working on a large yacht transport job"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Everything Transport</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Your reliable partner in domestic and international transport logistics for over a decade.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              To Provide Safe, Reliable, and Efficient Global Transport Solutions
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              At Everything Transport, we are dedicated to simplifying the complexities of shipping. Whether it's a car, a boat, heavy machinery, or time-sensitive freight, our mission is to deliver your property safely, on time, and with unparalleled customer service, anywhere in the world.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-12 w-12 text-white opacity-80" />
                <div className="mt-3 text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-lg font-medium text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">The Everything Transport Difference</h2>
            <p className="mt-4 text-lg text-gray-500">
              Choosing a transport partner is a decision built on trust. We've spent years earning that trust through dedication, transparency, and a relentless focus on customer satisfaction. Our expansive network of vetted domestic and international carriers, comprehensive insurance coverage, and a team of logistics experts ensure your shipment is in the best hands.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex">
                <Shield className="flex-shrink-0 h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-500"><strong>Decades of Expertise:</strong> Our team possesses deep industry knowledge to navigate any transport challenge, domestic or international.</span>
              </li>
              <li className="flex">
                <Globe className="flex-shrink-0 h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-500"><strong>Global Carrier Network:</strong> We have the resources to move your items anywhere, from across the state to across the ocean.</span>
              </li>
              <li className="flex">
                <Users className="flex-shrink-0 h-6 w-6 text-green-500" />
                <span className="ml-3 text-gray-500"><strong>Customer-Centric Approach:</strong> We prioritize clear communication and personalized service for every client, no matter the destination.</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
            <img 
              className="rounded-lg shadow-xl"
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d5b336e3f_IMG_4274.jpg" 
              alt="Everything Transport truck hauling a boat on the highway" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
