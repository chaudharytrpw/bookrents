import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Background Image */}
      <Image
        src="/img/banner.png"
        alt="Background Pattern"
        fill
        priority
        className="object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn Your{' '}
              <span className="text-yellow-300">Used Exam Books</span>
              <br />
              Into Monthly Income
            </h1>

            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90">
                Rent NEET & JEE books locally.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-light opacity-90">
                Students save money. Book owners earn repeatedly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg">
                List Your Book & Earn
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg">
                Rent a Book
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4">
              {[
                { label: 'Deposit Protected', color: 'bg-emerald-400', icon: 'M5 13l4 4L19 7' },
                { label: 'Condition Verified Before & After', color: 'bg-pink-400', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Local Hand-to-Hand Delivery', color: 'bg-blue-400', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full ${feature.color} flex items-center justify-center`}>
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg font-medium">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
