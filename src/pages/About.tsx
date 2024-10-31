import React from 'react';
import { Target } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900">About ArcheryPro</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Archery store"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2010, ArcheryPro has been serving the archery community with premium equipment
              and expert guidance. Our passion for archery drives us to provide only the highest quality
              products and exceptional customer service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              We strive to make archery accessible to everyone while maintaining the highest standards
              of quality and safety. Whether you're a beginner or a professional archer, we're here
              to support your journey.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900">Quality Guarantee</h2>
            <p className="text-gray-600">
              Every product in our inventory is carefully selected and tested to ensure it meets our
              strict quality standards. We stand behind every item we sell with our satisfaction guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}