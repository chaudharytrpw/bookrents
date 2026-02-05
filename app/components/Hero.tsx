"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
            #1 Student Marketplace
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
            Buy, Sell & Rent <br />
            <span className="text-indigo-600">Books Easily</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
            The smartest way for students and readers to find affordable books or
            turn old textbooks into cash.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              Explore Books <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-100 font-bold rounded-full shadow-sm hover:border-indigo-600 transition"
            >
              Sell Your Book
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Floating Illustration */}
        <div className="relative h-[400px] flex items-center justify-center z-0">
          {/* Abstract blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-200 rounded-full blur-3xl opacity-50" />
          
          {/* Main Floating Book */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-64 h-80 bg-white border-2 border-slate-100 rounded-r-xl shadow-2xl flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute inset-y-0 left-0 w-8 bg-indigo-700 rounded-l-md" />
            <BookOpen size={64} className="text-indigo-600 opacity-80" />
            <div className="absolute bottom-6 font-bold text-slate-300 tracking-widest text-sm">BOOK STORE</div>
          </motion.div>

          {/* Floating Elements (Decorations) */}
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-xl"
          >
            <span className="text-2xl">📚</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-xl"
          >
            <span className="text-2xl">🎓</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}