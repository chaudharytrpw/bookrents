"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="w-full -mt-10 relative z-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-slate-100"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by Title, Author, or ISBN..."
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div className="md:w-48">
            <select className="w-full h-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-600">
              <option>Buy & Rent</option>
              <option>Buy Only</option>
              <option>Rent Only</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            Search
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}