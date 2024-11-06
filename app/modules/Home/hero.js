import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, BedDouble, Bath, ArrowRight, Home } from "lucide-react";
import Hero1 from '@/components/assests/hero1.png';
import Hero2 from '@/components/assests/hero2.png';
import Image from 'next/image';

const PropertyCard = ({ image, price, title, address, beds, baths, area }) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image 
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-violet-600">${price}</span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-gray-500 text-sm">{address}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4 text-gray-400" />
            <span className="text-sm">{beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-gray-400" />
            <span className="text-sm">{baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4 text-gray-400" />
            <span className="text-sm">{area}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Header = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/house&home.png" width={55} height={55} alt='logo'/>
              <span className="ml-2 text-xl font-bold">House & Home</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost">Rent</Button>
              <Button variant="ghost">Buy</Button>
              <Button variant="ghost">Sell</Button>
              <Button variant="ghost">Manage Property</Button>
              <Button variant="ghost">Resources</Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Login</Button>
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-navy-900">
              Buy, rent, or sell<br />your property<br />easily
            </h1>
            <p className="text-gray-600 text-lg">
              A great platform to buy, sell, or even rent your properties without any commissions.
            </p>
            <div className="flex space-x-8">
              <div>
                <div className="text-2xl font-bold text-violet-600">50k+</div>
                <div className="text-gray-500">renters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-violet-600">10k+</div>
                <div className="text-gray-500">properties</div>
              </div>
            </div>

            {/* Search Form */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <Tabs defaultValue="rent">
                  <TabsList>
                    <TabsTrigger value="rent">Rent</TabsTrigger>
                    <TabsTrigger value="buy">Buy</TabsTrigger>
                    <TabsTrigger value="sell">Sell</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="text-sm text-gray-500">Location</label>
                    <Input placeholder="Barcelona, Spain" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">When</label>
                    <Button variant="outline" className="w-full justify-between">
                      Select Move-in Date
                      <CalendarIcon className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <Button className="w-full mt-4">Browse Properties</Button>
              </CardContent>
            </Card>
          </div>

          {/* Property Cards */}
          <div className="relative">
            <PropertyCard 
              image={Hero1}
              price="2,700"
              title="Beverly Springfield"
              address="2821 Lake Sevilla, Palm Harbor, TX"
              beds="4"
              baths="2"
              area="6x7.5m²"
            />
            <div className="absolute bottom-0 right-0">
              <PropertyCard 
                image={Hero2}  // Use a placeholder image if no other image is available
                price="1,600"
                title="Tarpon Bay"
                address="Palm Harbor, TX"
                beds="4"
                baths="2"
                area="6.8m²"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
