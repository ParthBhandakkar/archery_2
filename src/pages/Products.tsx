import React from 'react';
import ProductGrid from '../components/ProductGrid';

export default function Products() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>
        <ProductGrid />
      </div>
    </div>
  );
}