"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Book {
  id: number;
  title: string;
  author: string;
  buyPrice: number;
  rentPrice: number;
  image: string;
  category: string;
  condition: string;
}

const BookCard = ({ book, index }: { book: Book; index: number }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      onClick={() => router.push("/bookdetail")}
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 group cursor-pointer hover:shadow-lg hover:border-[#1d606e] transition-all duration-300 flex flex-col"
    >
      {/* 
        Image Section 
        1. h-56: Increased height so the full book cover looks good.
        2. object-contain: This ensures the image is NEVER cut.
        3. bg-gray-50: Adds a light background to fill empty spaces if the image is thin.
        4. p-2: Added small padding so the image doesn't touch the very edges.
      */}
      <div className="h-56 w-full relative bg-gray-50 overflow-hidden flex items-center justify-center p-2 isolate">
        <img 
          src={book.image} 
          alt={book.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

        {/* Condition Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm text-white ${
              book.condition === "Excellent"
                ? "bg-emerald-500" 
                : book.condition === "Good"
                ? "bg-[#1d606e]" 
                : "bg-orange-500"
            }`}
          >
            {book.condition}
          </span>
        </div>
      </div>

      <div className="p-3">
        {/* Category Tag */}
        <div className="mb-1">
          <span className="text-[10px] font-bold text-[#1d606e] bg-[#1d606e]/10 px-1.5 py-0.5 rounded">
            {book.category}
          </span>
        </div>

        <h3 className="font-bold text-sm text-slate-900 truncate leading-tight group-hover:text-[#1d606e] transition-colors">
          {book.title}
        </h3>
        <p className="text-[11px] text-slate-500 truncate mb-2">
          {book.author}
        </p>

        {/* Pricing Section */}
        <div className="flex justify-between items-center pt-2 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-400 uppercase">Buy</span>
            <span className="font-bold text-xs text-slate-900">
              ₹{book.buyPrice}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-slate-400 uppercase">Rent</span>
            <span className="font-bold text-xs text-[#1d606e]">
              ₹{book.rentPrice}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="w-full cursor-pointer mt-3 py-1.5 bg-[#1d606e] text-white text-xs rounded-md font-medium hover:bg-[#164a55] transition-colors shadow-sm"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default BookCard;