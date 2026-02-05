"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Turn Your Old Books Into Money
        </h2>
        <p className="text-lg text-indigo-100 mb-10 max-w-xl mx-auto">
          Don't let your books gather dust. List them today and help a junior
          while making extra cash.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ["0px 0px 0px 0px rgba(255, 255, 255, 0.7)", "0px 0px 0px 10px rgba(255, 255, 255, 0)"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-full text-lg shadow-xl"
        >
          Start Selling Now
        </motion.button>
      </motion.div>
    </section>
  );
}