import React from 'react'

const brands = [
  {
    name: 'Microsoft',
    logo: (
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 21 21"><rect width="10" height="10" fill="#F25022"/><rect x="11" width="10" height="10" fill="#7FBA00"/><rect y="11" width="10" height="10" fill="#00A4EF"/><rect x="11" y="11" width="10" height="10" fill="#FFB900"/></svg>
        <span className="text-xl font-semibold text-gray-700 dark:text-gray-300">Microsoft</span>
      </div>
    )
  },
  {
    name: 'Zoom',
    logo: <span className="text-2xl font-bold text-blue-500">zoom</span>
  },
  {
    name: 'Rakuten',
    logo: <span className="text-2xl font-bold text-red-600">Rakuten</span>
  },
  {
    name: 'Coinbase',
    logo: <span className="text-2xl font-bold text-blue-600">coinbase</span>
  },
  {
    name: 'Airbnb',
    logo: (
      <div className="flex items-center gap-1">
        <svg width="22" height="22" viewBox="0 0 34 34" fill="#FF5A5F"><path d="M29.4 22.7c-.3-1-.8-2-1.4-2.9l-9.3-15.5c-.4-.6-1-.9-1.7-.9s-1.3.3-1.7.9L6 19.8c-.6.9-1.1 1.9-1.4 2.9-.4 1.4-.3 2.8.3 4 .6 1.2 1.7 2.1 3 2.6 1.3.5 2.8.5 4.1 0 .5-.2 1-.4 1.5-.8l.5-.4c.6-.5 1.4-.8 2.2-.8s1.6.3 2.2.8l.5.4c.5.4 1 .7 1.5.8 1.3.5 2.8.5 4.1 0 1.3-.5 2.4-1.4 3-2.6.5-1.2.6-2.6.3-4z"/></svg>
        <span className="text-xl font-semibold text-[#FF5A5F]">airbnb</span>
      </div>
    )
  },
  {
    name: 'Google',
    logo: (
      <span className="text-2xl font-semibold">
        <span className="text-blue-500">G</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-400">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </span>
    )
  },
]

// Duplicate for seamless marquee
const allBrands = [...brands, ...brands]

export default function Brands() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/60 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <span className="w-5 h-5 rounded-full border-2 border-indigo-400 inline-flex items-center justify-center">
            <span className="w-2 h-2 bg-indigo-500 rounded-full" />
          </span>
          <span className="font-medium">Trusted by Leading Companies</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex overflow-hidden">
          <div className="marquee-track">
            {allBrands.map((brand, i) => (
              <div key={i} className="mx-10 flex items-center justify-center min-w-[120px]">
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-indigo-50/60 to-transparent dark:from-gray-900 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-950 pointer-events-none" />
      </div>
    </section>
  )
}
