import React from 'react';
import { Target, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Target className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">ArcheryPro</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your trusted source for premium archery equipment and accessories.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-emerald-500">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-500">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@archerypro.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                123 Archer Street, Target City
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest products and archery tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 rounded-r hover:bg-emerald-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ArcheryPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}