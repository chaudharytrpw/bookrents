import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    // Fixed height set to 80vh for both container and background
    <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex items-center">
      
      {/* Background Image - will now automatically be 80vh because of parent */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/herobanner.png" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Added a dark overlay to make text pop since height is tighter */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start">
          
          {/* Left Content */}
          <div className="text-white space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Rent <span className="text-amber-300">Exam & Academic Books</span>
              <br />
              at <span className="text-amber-300">1/10<sup>th</sup> Price</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium">
              Buy • Rent • Earn from Your Books
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors shadow-lg">
                Rent a Book
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-3 rounded-lg text-lg transition-colors shadow-lg">
                List Your Book & Earn
              </button>
            </div>

            {/* Compact Features */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm">Deposit Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm">Condition Verified</span>
              </div>
            </div>
          </div>

          {/* Right Content - Price Tag */}
          {/* <div className="relative hidden  lg:flex mt-15">
            <div className="bg-amber-400  rounded-2xl px-8 py-6 shadow-2xl transform rotate-3">
              <p className="text-4xl font-bold text-gray-900">₹150 <span className="text-xl">/ 15 days</span></p>
              <p className="text-md text-gray-800 font-bold border-t border-black/10 mt-2">MRP ₹1200</p>
            </div>
          </div> */}
        </div>

        {/* Categories - Positioned at the bottom of the 80vh area */}
        <div className="mt-12 lg:mt-16">
          <h2 className="text-white text-xl font-bold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 mr-40 gap-2">
            {['NEET', 'JEE', 'College Books', 'Novels'].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer group text-center">
                 <h3 className="font-bold text-white text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;