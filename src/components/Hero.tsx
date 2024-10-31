import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Archer aiming with bow"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Archery Equipment
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover our collection of professional-grade bows, arrows, and accessories. 
          Whether you're a beginner or a seasoned archer, we have everything you need to hit your target.
        </p>
        <div className="mt-10">
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}