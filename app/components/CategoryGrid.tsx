"use client";

import { motion } from "framer-motion";
import { GraduationCap, Book, School, Trophy, History, Layers } from "lucide-react";

const categories = [
  { name: "School Books", icon: School, color: "bg-blue-100 text-blue-600" },
  { name: "College & Uni", icon: GraduationCap, color: "bg-purple-100 text-purple-600" },
  { name: "Competitive Exams", icon: Trophy, color: "bg-orange-100 text-orange-600" },
  { name: "Novels", icon: Book, color: "bg-green-100 text-green-600" },
  { name: "Old / Rare", icon: History, color: "bg-amber-100 text-amber-600" },
  { name: "Others", icon: Layers, color: "bg-slate-100 text-slate-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CategoryGrid() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Categories</h2>
          <p className="text-slate-500">Find exactly what you need for your studies</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer border border-slate-100"
            >
              <div className={`p-4 rounded-full ${cat.color} mb-2`}>
                <cat.icon size={28} />
              </div>
              <h3 className="font-semibold text-slate-700 text-center">{cat.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}