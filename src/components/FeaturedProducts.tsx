import React from 'react';
import { useCart } from '../context/CartContext';

const featuredProducts = [
  {
    id: 1,
    name: 'Professional Recurve Bow',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Competition-grade recurve bow perfect for Olympic-style archery.'
  },
  {
    id: 2,
    name: 'Carbon Fiber Arrows (12-Pack)',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Lightweight carbon fiber arrows with replaceable tips.'
  },
  {
    id: 3,
    name: 'Compound Bow Package',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1557682260-96773eb01377?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Complete compound bow set with sight, rest, and stabilizer.'
  }
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-emerald-600">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}