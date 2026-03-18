import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesGrid({ services }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none shadow-lg hover:scale-105">
          <CardHeader className="pb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <service.icon className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <div className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            <Link 
              to={createPageUrl(service.link)}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}