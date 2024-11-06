import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="border-t py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4 text-lg">SELL A HOME</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Request an offer</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Stories</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">BUY A HOME</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Buy</li>
            <li>Finance</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">BUY, RENT AND SELL</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Buy and sell properties</li>
            <li>Rent home</li>
            <li>Builder trade-up</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">ABOUT</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Company</li>
            <li>How it works</li>
            <li>Contact</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-gray-600">©2021 House & Home. All rights reserved</p>
        <div className="flex space-x-4">
          <Facebook className="w-6 h-6 text-gray-600" />
          <Instagram className="w-6 h-6 text-gray-600" />
          <Twitter className="w-6 h-6 text-gray-600" />
          <Linkedin className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  </footer>
);


export default Footer;