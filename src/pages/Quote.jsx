
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calculator, 
  CheckCircle, 
  CreditCard, 
  ArrowRight,
  MapPin,
  Calendar,
  Package,
  DollarSign,
  Info,
  Truck,
  Shield,
  Loader2
} from "lucide-react";

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service_type: "",
    customer_name: "",
    email: "",
    phone: "",
    origin_city: "",
    origin_state: "",
    origin_zip: "",
    destination_city: "",
    destination_state: "",
    destination_zip: "",
    item_description: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
      weight: ""
    },
    pickup_date: "",
    delivery_date: "",
    urgency: "standard",
    special_requirements: ""
  });
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [finalQuotedPrice, setFinalQuotedPrice] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [distanceMiles, setDistanceMiles] = useState(0);
  const [fuelSurcharge, setFuelSurcharge] = useState(0);
  const [insuranceCost, setInsuranceCost] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteId, setQuoteId] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    // Check if there's a quote ID or payment status in URL params
    const urlParams = new URLSearchParams(window.location.search);
    const existingQuoteId = urlParams.get('quote_id');
    const paymentStatus = urlParams.get('payment');
    const serviceTypeFromUrl = urlParams.get('service_type');

    if (existingQuoteId) {
      if (paymentStatus === 'success') {
        loadAndConfirm(existingQuoteId);
      } else {
        loadExistingQuote(existingQuoteId);
      }
      // Clean up URL
      window.history.replaceState({}, document.title, "/Quote");
    } else if (serviceTypeFromUrl) {
      // Pre-fill service type from homepage selection
      setFormData(prev => ({ ...prev, service_type: serviceTypeFromUrl }));
       // Clean up URL
      window.history.replaceState({}, document.title, "/Quote");
    }
  }, []);

  const loadAndConfirm = async (id) => {
    await loadExistingQuote(id);
    setStep(4);
  };

  const loadExistingQuote = async (id) => {
    try {
      const quotes = await Quote.filter({ id: id });
      if (quotes && quotes.length > 0) {
        const existingQuote = quotes[0];
        existingQuote.dimensions = existingQuote.dimensions || { length: "", width: "", height: "", weight: "" };
        setFormData(existingQuote);
        setQuoteId(id);
        // Only go to step 2 if not coming from a successful payment (which goes to step 4)
        if (new URLSearchParams(window.location.search).get('payment') !== 'success') {
          setStep(2);
        }
      }
    } catch (error) {
      console.error("Error loading quote:", error);
    }
  };

  const handleChange = (field, value) => {
    if (field.startsWith('dimensions.')) {
      const dimensionField = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [dimensionField]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  // Advanced pricing calculation based on industry standards
  const calculateAdvancedPrice = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      // Calculate distance (simulated based on zip codes)
      const simulatedDistance = Math.random() * 2500 + 200; // 200-2700 miles
      setDistanceMiles(Math.round(simulatedDistance));
      
      // Base pricing per service type (industry standard rates)
      const basePricing = {
        auto_transport: { base: 0.60, min: 400 }, // $0.60 per mile, $400 minimum
        marine_transport: { base: 1.20, min: 800 }, // Higher for boats
        heavy_equipment: { base: 2.50, min: 1200 }, // Highest for heavy equipment
        freight_logistics: { base: 0.45, min: 300 }, // Standard freight
        air_cargo: { base: 4.00, min: 2000 }, // Premium air service
        specialized_transport: { base: 3.00, min: 1500 } // High-value items
      };
      
      const serviceRates = basePricing[formData.service_type] || basePricing.auto_transport;
      let basePrice = Math.max(simulatedDistance * serviceRates.base, serviceRates.min);
      
      // Urgency multipliers
      const urgencyMultipliers = {
        standard: 1.0,
        expedited: 1.4,
        rush: 1.8
      };
      
      // Calculate dimensions and weight factors
      const length = parseFloat(formData.dimensions.length) || 20;
      const width = parseFloat(formData.dimensions.width) || 8;
      const height = parseFloat(formData.dimensions.height) || 6;
      const weight = parseFloat(formData.dimensions.weight) || 3000;
      
      // Oversize penalties (industry standard)
      let oversizeFactor = 1.0;
      if (length > 53 || width > 8.5 || height > 13.5) {
        oversizeFactor = 1.5; // 50% oversize penalty
      }
      if (weight > 80000) {
        oversizeFactor *= 1.3; // Additional weight penalty
      }
      
      // Seasonal adjustments (simulated)
      const seasonalFactor = Math.random() * 0.2 + 0.9; // 0.9 to 1.1
      
      // Fuel surcharge calculation (industry standard ~15-25% of base)
      const calculatedFuelSurcharge = Math.round(basePrice * (0.15 + Math.random() * 0.1));
      setFuelSurcharge(calculatedFuelSurcharge);
      
      // Insurance cost (typically 1-3% of shipment value)
      const estimatedValue = Math.max(weight * 2, 5000); // Minimum $5k value
      const calculatedInsurance = Math.round(estimatedValue * 0.02);
      setInsuranceCost(calculatedInsurance);
      
      // Final price calculation
      const urgencyMultiplier = urgencyMultipliers[formData.urgency] || 1.0;
      const finalPrice = Math.round(
        (basePrice * urgencyMultiplier * oversizeFactor * seasonalFactor) + 
        calculatedFuelSurcharge + 
        calculatedInsurance
      );
      
      setEstimatedPrice(finalPrice);
      setFinalQuotedPrice(finalPrice);
      setDepositAmount(Math.round(finalPrice * 0.01)); // 1% deposit
      setIsCalculating(false);
      setStep(3);
    }, 3000); // Realistic calculation time
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const processedDimensions = {
        length: formData.dimensions.length ? parseFloat(formData.dimensions.length) : null,
        width: formData.dimensions.width ? parseFloat(formData.dimensions.width) : null,
        height: formData.dimensions.height ? parseFloat(formData.dimensions.height) : null,
        weight: formData.dimensions.weight ? parseFloat(formData.dimensions.weight) : null,
      };

      const quoteData = {
        ...formData,
        dimensions: processedDimensions,
        estimated_price: estimatedPrice,
        final_quoted_price: finalQuotedPrice,
        deposit_amount: depositAmount,
        distance_miles: distanceMiles,
        fuel_surcharge: fuelSurcharge,
        insurance_cost: insuranceCost,
        status: "pending"
      };
      
      if (quoteId) {
        await Quote.update(quoteId, quoteData);
        setStep(2);
      } else {
        const newQuote = await Quote.create(quoteData);
        setQuoteId(newQuote.id);
        setStep(2);
      }
      
    } catch (error) {
      console.error("Error saving quote:", error);
    }
  };

  const processPayment = async () => {
    setIsProcessingPayment(true);
    try {
      // First, ensure the latest quote data is saved
      const processedDimensions = {
        length: formData.dimensions.length ? parseFloat(formData.dimensions.length) : null,
        width: formData.dimensions.width ? parseFloat(formData.dimensions.width) : null,
        height: formData.dimensions.height ? parseFloat(formData.dimensions.height) : null,
        weight: formData.dimensions.weight ? parseFloat(formData.dimensions.weight) : null,
      };

      const quoteData = {
        ...formData,
        dimensions: processedDimensions,
        estimated_price: estimatedPrice,
        final_quoted_price: finalQuotedPrice,
        deposit_amount: depositAmount,
        distance_miles: distanceMiles,
        fuel_surcharge: fuelSurcharge,
        insurance_cost: insuranceCost,
        status: "pending_payment" 
      };
      
      await Quote.update(quoteId, quoteData);

      // Create Stripe checkout session
      const { data } = await createStripeCheckoutSession({
        quoteId: quoteId,
        depositAmount: depositAmount,
        customerName: formData.customer_name,
        serviceDescription: formData.item_description || formData.service_type.replace('_', ' '),
      });

      if (data && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        console.error("Failed to create Stripe checkout session:", data);
        alert("Payment processing is currently unavailable. Please contact us directly to complete your booking.");
        setIsProcessingPayment(false);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("There was an error processing your payment. Please try again or contact us.");
      setIsProcessingPayment(false);
    }
  };

  const serviceOptions = [
    { value: "auto_transport", label: "Auto Transport" },
    { value: "marine_transport", label: "Marine Transport" },
    { value: "heavy_equipment", label: "Heavy Equipment" },
    { value: "freight_logistics", label: "Freight & Logistics" },
    { value: "air_cargo", label: "Air Cargo" },
    { value: "specialized_transport", label: "Specialized Transport" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div
                key={stepNum}
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  step >= stepNum
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {stepNum}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2 text-sm text-center">
            <span className={step >= 1 ? "text-blue-600 font-semibold" : "text-gray-500"}>
              Quote Details
            </span>
            <span className={step >= 2 ? "text-blue-600 font-semibold" : "text-gray-500"}>
              Specifications
            </span>
            <span className={step >= 3 ? "text-blue-600 font-semibold" : "text-gray-500"}>
              Pricing & Payment
            </span>
            <span className={step >= 4 ? "text-blue-600 font-semibold" : "text-gray-500"}>
              Confirmation
            </span>
          </div>
        </div>

        {/* Step 1: Basic Information */}
        {step === 1 && (
          <Card className="shadow-lg border-none">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="text-2xl">
                <Calculator className="w-6 h-6 mr-2 inline" />
                Get Your Professional Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service_type">Service Type *</Label>
                    <Select value={formData.service_type} onValueChange={(value) => handleChange("service_type", value)}>
                      <SelectTrigger className="text-gray-900">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customer_name">Full Name *</Label>
                    <Input
                      id="customer_name"
                      value={formData.customer_name}
                      onChange={(e) => handleChange("customer_name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="text-gray-900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center text-gray-800">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Pickup Location
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="origin_city">City *</Label>
                        <Input
                          id="origin_city"
                          value={formData.origin_city}
                          onChange={(e) => handleChange("origin_city", e.target.value)}
                          placeholder="City"
                          required
                          className="text-gray-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="origin_state">State *</Label>
                        <Input
                          id="origin_state"
                          value={formData.origin_state}
                          onChange={(e) => handleChange("origin_state", e.target.value)}
                          placeholder="State"
                          required
                          className="text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="origin_zip">ZIP Code</Label>
                      <Input
                        id="origin_zip"
                        value={formData.origin_zip}
                        onChange={(e) => handleChange("origin_zip", e.target.value)}
                        placeholder="ZIP Code"
                        className="text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center text-gray-800">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      Delivery Location
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="destination_city">City *</Label>
                        <Input
                          id="destination_city"
                          value={formData.destination_city}
                          onChange={(e) => handleChange("destination_city", e.target.value)}
                          placeholder="City"
                          required
                          className="text-gray-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination_state">State *</Label>
                        <Input
                          id="destination_state"
                          value={formData.destination_state}
                          onChange={(e) => handleChange("destination_state", e.target.value)}
                          placeholder="State"
                          required
                          className="text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination_zip">ZIP Code</Label>
                      <Input
                        id="destination_zip"
                        value={formData.destination_zip}
                        onChange={(e) => handleChange("destination_zip", e.target.value)}
                        placeholder="ZIP Code"
                        className="text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-lg font-bold"
                >
                  Continue to Specifications
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Detailed Specifications */}
        {step === 2 && (
          <Card className="shadow-lg border-none">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="text-2xl">
                <Package className="w-6 h-6 mr-2 inline" />
                Shipment Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="item_description">Item Description *</Label>
                  <Textarea
                    id="item_description"
                    value={formData.item_description}
                    onChange={(e) => handleChange("item_description", e.target.value)}
                    placeholder="Provide detailed description (make, model, year, condition, etc.)"
                    rows={4}
                    required
                    className="text-gray-900"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Dimensions & Weight</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="length">Length (ft)</Label>
                      <Input
                        id="length"
                        type="number"
                        value={formData.dimensions.length}
                        onChange={(e) => handleChange("dimensions.length", e.target.value)}
                        placeholder="Length"
                        className="text-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (ft)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={formData.dimensions.width}
                        onChange={(e) => handleChange("dimensions.width", e.target.value)}
                        placeholder="Width"
                        className="text-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (ft)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={formData.dimensions.height}
                        onChange={(e) => handleChange("dimensions.height", e.target.value)}
                        placeholder="Height"
                        className="text-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (lbs)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={formData.dimensions.weight}
                        onChange={(e) => handleChange("dimensions.weight", e.target.value)}
                        placeholder="Weight"
                        className="text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pickup_date">Preferred Pickup Date</Label>
                    <Input
                      id="pickup_date"
                      type="date"
                      value={formData.pickup_date}
                      onChange={(e) => handleChange("pickup_date", e.target.value)}
                      className="text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery_date">Preferred Delivery Date</Label>
                    <Input
                      id="delivery_date"
                      type="date"
                      value={formData.delivery_date}
                      onChange={(e) => handleChange("delivery_date", e.target.value)}
                      className="text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Service Level</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                    <SelectTrigger className="text-gray-900">
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (5-7 days)</SelectItem>
                      <SelectItem value="expedited">Expedited (2-3 days) +40%</SelectItem>
                      <SelectItem value="rush">Rush (Next day) +80%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special_requirements">Special Requirements</Label>
                  <Textarea
                    id="special_requirements"
                    value={formData.special_requirements}
                    onChange={(e) => handleChange("special_requirements", e.target.value)}
                    placeholder="Any special handling requirements, access restrictions, etc."
                    rows={3}
                    className="text-gray-900"
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={calculateAdvancedPrice}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Calculate Professional Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Pricing & Payment */}
        {step === 3 && (
          <div className="space-y-6">
            {isCalculating ? (
              <Card className="shadow-lg border-none">
                <CardContent className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Calculating Your Professional Quote...</h3>
                  <p className="text-gray-600">Analyzing route, fuel costs, equipment requirements, and market conditions</p>
                </CardContent>
              </Card>
            ) : (
              <>
                <Card className="shadow-lg border-none">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <CardTitle className="text-2xl">
                      <DollarSign className="w-6 h-6 mr-2 inline" />
                      Professional Quote Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          ${finalQuotedPrice.toLocaleString()}
                        </div>
                        <div className="text-gray-600">Total Quoted Price</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Distance:</span>
                        <span>{distanceMiles} miles</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Service:</span>
                        <Badge variant="outline">{formData.service_type?.replace('_', ' ')}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Route:</span>
                        <span className="text-sm">{formData.origin_city}, {formData.origin_state} → {formData.destination_city}, {formData.destination_state}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Service Level:</span>
                        <Badge variant="outline">{formData.urgency}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Fuel Surcharge:</span>
                        <span>${fuelSurcharge}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Insurance:</span>
                        <span>${insuranceCost}</span>
                      </div>
                    </div>

                    <Alert className="mb-6">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        This quote is based on current market conditions and is valid for 7 days. Final pricing confirmed upon booking.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-none">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <CardTitle className="text-2xl">
                      <Shield className="w-6 h-6 mr-2 inline" />
                      Secure Your Shipment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          ${depositAmount}
                        </div>
                        <div className="text-gray-600">Deposit Required (1%)</div>
                        <div className="text-sm text-gray-500 mt-2">
                          Secure your booking with a minimal deposit
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="payment_method">Payment Method</Label>
                        <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                          <SelectTrigger className="text-gray-900">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="credit_card">Credit Card</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Secure payment processing via Stripe</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Immediate booking confirmation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>24-hour response guarantee</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" checked={termsAccepted} onCheckedChange={setTermsAccepted} className="mt-1" />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                          >
                            Agree to terms and conditions
                          </label>
                          <p className="text-sm text-gray-500">
                            I agree to the Terms of Service and acknowledge that submission of this quote waives my right to any legal claims against Everything Transport per the Terms & Conditions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setStep(2)}
                        className="flex-1"
                        disabled={isProcessingPayment}
                      >
                        Back to Edit
                      </Button>
                      <Button 
                        type="button" 
                        onClick={processPayment}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!termsAccepted || isProcessingPayment}
                      >
                        {isProcessingPayment ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Pay Deposit & Book Now
                            <CreditCard className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <div className="mt-8 text-center text-gray-600">
                      <p>Questions? Call us now for immediate assistance:</p>
                      <a href="tel:347-494-2235" className="font-bold text-blue-600 hover:text-blue-700 text-lg">
                        📞 347-494-2235
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <Card className="shadow-lg border-none">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for choosing Everything Transport. Your shipment has been successfully booked.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="text-sm text-gray-600 mb-2">Quote ID</div>
                <div className="text-2xl font-bold text-gray-900 mb-4">{quoteId}</div>
                <div className="text-sm text-gray-600 mb-2">Final Quote</div>
                <div className="text-xl font-bold text-green-600">${finalQuotedPrice.toLocaleString()}</div>
              </div>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>✅ Deposit payment processed successfully</p>
                <p>✅ Booking confirmation sent to your email</p>
                <p>✅ Quote details emailed to our team</p>
                <p>✅ We'll contact you within 24 hours</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Next Steps:</strong> Our logistics team will contact you within 24 hours to confirm pickup details and assign your dedicated transport coordinator.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
