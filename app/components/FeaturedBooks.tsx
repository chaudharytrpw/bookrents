"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart, Repeat } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  buyPrice: number;
  rentPrice: number;
  image: string;
}

const MOCK_BOOKS: Book[] = [
  { id: 1, title: "Physics Vol. 1", author: "H.C. Verma", buyPrice: 450, rentPrice: 150, image: "bg-blue-200" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", buyPrice: 299, rentPrice: 80, image: "bg-amber-200" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", buyPrice: 1200, rentPrice: 300, image: "bg-slate-300" },
  { id: 4, title: "Biology NCERT", author: "Class 12", buyPrice: 180, rentPrice: 50, image: "bg-green-200" },
];

export default function FeaturedBooks() {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Books</h2>
            <p className="text-slate-500 mt-2">Top picks from students near you</p>
          </div>
          <button className="text-indigo-600 font-semibold hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : MOCK_BOOKS.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  );
}

const BookCard = ({ book }: { book: Book }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 group cursor-pointer"
  >
    {/* Image Area */}
    <div className={`h-48 w-full ${book.image} flex items-center justify-center relative overflow-hidden`}>
      <motion.div
         className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <span className="text-2xl font-bold opacity-30 text-slate-700">Cover Img</span>
    </div>

    {/* Content Area */}
    <div className="p-5">
      <h3 className="font-bold text-lg text-slate-900 truncate">{book.title}</h3>
      <p className="text-sm text-slate-500 mb-4">{book.author}</p>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400">Buy</span>
          <span className="font-bold text-indigo-600">₹{book.buyPrice}</span>
        </div>
        <div className="h-8 w-[1px] bg-slate-200"></div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-400">Rent/mo</span>
          <span className="font-bold text-orange-500">₹{book.rentPrice}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-pulse">
    <div className="h-48 w-full bg-slate-200"></div>
    <div className="p-5">
      <div className="h-6 w-3/4 bg-slate-200 rounded mb-2"></div>
      <div className="h-4 w-1/2 bg-slate-200 rounded mb-4"></div>
      <div className="flex justify-between pt-4 border-t border-slate-100">
        <div className="h-8 w-12 bg-slate-200 rounded"></div>
        <div className="h-8 w-12 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
);