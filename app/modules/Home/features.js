import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Home, Percent, Users, DollarSign } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* First Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-violet-100 rounded-2xl overflow-hidden">
            <img 
              src="/api/placeholder/600/400" 
              alt="House exterior" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Virtual Tour Card */}
          <Card className="absolute -top-8 left-8 bg-white shadow-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-violet-100 rounded-full">
                <PlayCircle className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Virtual home tour</h3>
                <p className="text-sm text-gray-500">We provide you with virtual tour</p>
              </div>
            </CardContent>
          </Card>

          {/* Find Best Deal Card */}
          <Card className="absolute -bottom-8 right-8 bg-white shadow-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 bg-violet-100 rounded-full">
                <Home className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Find the best deal</h3>
                <p className="text-sm text-gray-500">Browse thousands of properties</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <Button className="bg-violet-100 text-violet-600 hover:bg-violet-200">
              For tenants
            </Button>
            <Button variant="outline">
              For landlords
            </Button>
          </div>

          <h2 className="text-4xl font-bold text-navy-900">
            We make it easy for<br />tenants and landlords.
          </h2>

          <p className="text-gray-600">
            Whether it's selling your current home, getting financing, or buying a new home, 
            we make it easy and efficient. The best part? you'll save a bunch of money and 
            time with our services.
          </p>

          <Button className="flex items-center gap-2">
            See more
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Second Section */}
      <Card className="bg-white p-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-navy-900">
              The new way to find<br />your new home
            </h2>

            <p className="text-gray-600">
              Find your dream place to live in with more than 10k+ properties listed.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <Percent className="h-6 w-6 text-violet-600" />
                </div>
                <div className="text-2xl font-bold">7.4%</div>
                <div className="text-sm text-gray-500">Property Return Rate</div>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-violet-600" />
                </div>
                <div className="text-2xl font-bold">3,856</div>
                <div className="text-sm text-gray-500">Property in Sell & Rent</div>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-violet-600" />
                </div>
                <div className="text-2xl font-bold">2,540</div>
                <div className="text-sm text-gray-500">Daily Completed Transactions</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-full">
              {/* Isometric House Illustration */}
              <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 50L350 150L200 250L50 150L200 50Z" fill="#818CF8" fillOpacity="0.2"/>
                <path d="M200 50L350 150V200L200 300L50 200V150L200 50Z" fill="#818CF8" fillOpacity="0.4"/>
                <path d="M150 100H250V200H150V100Z" fill="white"/>
                <path d="M180 130H220V170H180V130Z" fill="#818CF8"/>
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FeatureSection;