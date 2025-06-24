'use client';

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-peach-50 to-orange-100 relative overflow-hidden">
      {/* THA Crest Background */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-32 h-32 bg-orange-300 rounded-full flex items-center justify-center">
          <span className="text-orange-600 font-bold text-2xl">THA</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                Tashia Burris
                <span className="block text-orange-600 mt-2">
                  Tobago to the World
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-lg">
                Communications Specialist | Orator | Global Thinker
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Born and Bred in Tobago
                </span>
                <span className="px-4 py-2 bg-peach-100 text-peach-800 rounded-full text-sm font-medium">
                  Committed to Service
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Lover of People
                </span>
              </div>
            </div>
            
            <div className="pt-6">
              <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More About Tashia
                <svg 
                  className="ml-2 h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Column - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-delay">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/Tashia_In_Hoddie.jpg"
                  alt="Tashia Burris - Professional Portrait"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-peach-400 rounded-full"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-orange-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 