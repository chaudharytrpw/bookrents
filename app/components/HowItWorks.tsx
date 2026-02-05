"use client";

import { motion } from "framer-motion";
import { Upload, Search, Wallet } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "List Your Book",
    desc: "Upload photos and details of your book in under 60 seconds.",
  },
  {
    icon: Search,
    title: "Connect with Buyers",
    desc: "Chat directly with students nearby who need your book.",
  },
  {
    icon: Wallet,
    title: "Get Paid",
    desc: "Meet up or ship the book and get paid instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="text-slate-500 mt-4">Simple steps to declutter and earn</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-indigo-100 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all z-10 text-center border border-slate-100"
            >
              <div className="w-24 h-24 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                <step.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}