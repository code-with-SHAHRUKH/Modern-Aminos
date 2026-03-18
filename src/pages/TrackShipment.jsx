import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Search, Loader2, MapPin, Flag, Ship, Truck, Plane, Calendar, Info } from 'lucide-react';

const serviceIcons = {
    "Auto Transport": <Truck className="w-5 h-5 mr-2" />,
    "Marine Transport": <Ship className="w-5 h-5 mr-2" />,
    "Heavy Equipment": <Truck className="w-5 h-5 mr-2" />,
    "Freight & Logistics": <Truck className="w-5 h-5 mr-2" />,
    "Air Cargo": <Plane className="w-5 h-5 mr-2" />,
    "Specialized Transport": <Truck className="w-5 h-5 mr-2" />,
    "default": <Truck className="w-5 h-5 mr-2" />
};

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackShipment = async () => {
    if (!trackingNumber) {
      setError('Please enter a tracking number.');
      return;
    }
    setIsLoading(true);
    setError('');
    setShipment(null);

    try {
      const results = await ShipmentTracking.filter({ tracking_number: trackingNumber });
      if (results.length > 0) {
        setShipment(results[0]);
      } else {
        setError('No shipment found with that tracking number. Please check the number and try again.');
      }
    } catch (err) {
      setError('An error occurred while trying to track the shipment. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Track Your Shipment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                type="text"
                placeholder="Enter Your Tracking Number (e.g., ET123456)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleTrackShipment()}
                className="flex-grow"
              />
              <Button onClick={handleTrackShipment} disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                <span className="ml-2 hidden sm:inline">Track</span>
              </Button>
            </div>

            {error && (
              <Alert variant="destructive">
                <Info className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {shipment && (
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle>Shipment Details for #{shipment.tracking_number}</CardTitle>
              <p className="text-gray-600">Current Status: <span className="font-bold text-blue-600">{shipment.status}</span></p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">{serviceIcons[shipment.service_type] || serviceIcons.default} Service Type</h3>
                  <p>{shipment.service_type}</p>
                </div>
                 <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center"><Calendar className="w-5 h-5 mr-2" /> Estimated Delivery</h3>
                  <p>{new Date(shipment.estimated_delivery_date).toLocaleDateString()}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center"><MapPin className="w-5 h-5 mr-2 text-red-500" /> Origin</h3>
                  <p>{shipment.origin}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center"><Flag className="w-5 h-5 mr-2 text-green-500" /> Destination</h3>
                  <p>{shipment.destination}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Shipment History</h3>
                <div className="relative border-l-2 border-blue-200 pl-6">
                  {shipment.timeline_events.sort((a,b) => new Date(b.date) - new Date(a.date)).map((event, index) => (
                    <div key={index} className="mb-8">
                      <span className="absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full ring-4 ring-white">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      </span>
                      <p className="font-semibold text-gray-800">{event.status}</p>
                      <p className="text-sm text-gray-500">{new Date(event.date).toLocaleString()}</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}