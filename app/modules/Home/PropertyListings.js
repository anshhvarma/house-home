import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Bed, Bath, Maximize } from 'lucide-react';
import Home1 from '@/components/assests/home1.png'
import Home2 from '@/components/assests/home2.png'
import Home3 from '@/components/assests/home3.png'
import Home4 from '@/components/assests/home4.png'
import Home5 from '@/components/assests/home5.png'
import Home6 from '@/components/assests/home6.png'
import Image from 'next/image';

const PropertyCard = ({ 
  image, 
  price, 
  name, 
  location, 
  beds, 
  baths, 
  area, 
  isPopular 
}) => (
  <Card className="overflow-hidden">
    <div className="relative">
  {image ? (
    <Image
      src={image} 
      alt={name} 
      className="w-full h-48 object-cover"
    />
  ) : (
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
      No Image Available
    </div>
  )}
  {isPopular && (
    <Badge className="absolute top-3 left-3 bg-indigo-500">
      <span className="mr-1">✦</span> POPULAR
    </Badge>
  )}
  <Button 
    variant="ghost" 
    size="icon" 
    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
  >
    <Heart className="w-5 h-5" />
  </Button>
</div>

    <CardContent className="p-4">
      <div className="mb-4">
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-2xl font-semibold text-indigo-500">${price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-2" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-2" />
            <span>{baths} Bathrooms</span>
          </div>
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-2" />
            <span>{area} m²</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const PropertyListings = () => {
  const properties = [
    {
      image: Home1,
      price: "2,095",
      name: "Palm Harbor",
      location: "2699 Green Valley, Highland Lake, FL",
      beds: "3",
      baths: "2",
      area: "5x7",
      isPopular: true
    },
    {
      image: Home2,
      price: "2,700",
      name: "Beverly Springfield",
      location: "2821 Lake Sevilla, Palm Harbor, TX",
      beds: "4",
      baths: "2",
      area: "6x7.5",
      isPopular: true
    },
    {
      image: Home3,
      price: "4,550",
      name: "Faulkner Ave",
      location: "909 Woodland St, Michigan, IN",
      beds: "4",
      baths: "3",
      area: "8x10",
      isPopular: true
    },
    {
      image: Home4,
      price: "2,400",
      name: "St. Crystal",
      location: "210 US Highway, Highland Lake, FL",
      beds: "4",
      baths: "2",
      area: "6x8",
      isPopular: false
    },
    {
      image: Home5,
      price: "1,500",
      name: "Cove Red",
      location: "243 Curlew Road, Palm Harbor, TX",
      beds: "2",
      baths: "1",
      area: "5x7.5",
      isPopular: false
    },
    {
      image: Home6,
      price: "1,600",
      name: "Tarpon Bay",
      location: "103 Lake Shores, Michigan, IN",
      beds: "3",
      baths: "1",
      area: "5x7",
      isPopular: false
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Based on your location</h2>
            <p className="text-gray-600">Some of our picked properties near your location.</p>
          </div>
          <Button className="bg-indigo-500 hover:bg-indigo-600">
            Browse more properties
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;