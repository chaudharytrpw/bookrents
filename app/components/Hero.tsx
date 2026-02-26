"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router=useRouter()

const  handalerouter=()=>{
  console.log("hello");
  
     router.push("/admindashboard/add-product")
  }
  return (
    <section className="relative z-10 w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/img/banner.png"
        alt="Background Pattern"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn Your{" "}
              <span className="text-yellow-300">Used Exam Books</span>
              <br />
              Into Monthly Income
            </h1>

            <div className="space-y-2">
              <p className="text-lg sm:text-xl opacity-90">
                Rent NEET & JEE books locally.
              </p>
              <p className="text-base sm:text-lg opacity-90">
                Students save money. Book owners earn repeatedly.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={handalerouter} className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                List Your Book & Earn
              </button>
              <button onClick={handalerouter} className="bg-white cursor-pointer text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Rent a Book
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
