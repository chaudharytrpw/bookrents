"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Calendar,
  ShoppingCart,
  Repeat,
  Star,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  Info,
  ShieldCheck,
  X
} from "lucide-react";
import { useRouter } from "next/navigation";

interface BookDetail {
  id: number;
  title: string;
  author: string;
  buyPrice: number;
  rentPrice: number;
  image: string;
  category: string;
  condition: "Excellent" | "Good" | "Fair";
  description: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    totalSales: number;
    joinedDate: string;
    location: string;
  };
  specifications: {
    isbn: string;
    publisher: string;
    edition: string;
    language: string;
    pages: number;
    publicationYear: number;
  };
  availability: {
    forSale: boolean;
    forRent: boolean;
    stock: number;
  };
}

const MOCK_BOOK_DETAIL: BookDetail = {
  id: 1,
  title: "Physics Vol. 1",
  author: "H.C. Verma",
  buyPrice: 450,
  rentPrice: 150,
  image: "/img/physics.jpg", 
  category: "Science",
  condition: "Good",
  description: "Concepts of Physics is a comprehensive textbook for Class XI and XII students preparing for JEE and other engineering entrance examinations. The book covers all topics of mechanics in great detail with hundreds of solved examples and practice problems.",
  seller: {
    name: "Rajesh Kumar",
    avatar: "bg-[#1d606e]",
    rating: 4.8,
    totalSales: 156,
    joinedDate: "Jan 2023",
    location: "Sector 14, Gurugram"
  },
  specifications: {
    isbn: "978-8177091878",
    publisher: "Bharati Bhawan",
    edition: "2020 Edition",
    language: "English",
    pages: 462,
    publicationYear: 2020
  },
  availability: {
    forSale: true,
    forRent: true,
    stock: 3
  }
};

export default function BookDetailPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<"buy" | "rent">("buy");
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const book = MOCK_BOOK_DETAIL;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-[#1d606e]/10 rounded-full transition-colors group"
          >
            <ArrowLeft className="w-6 h-6 text-slate-700 group-hover:text-[#1d606e]" />
          </button>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 hover:bg-red-50 rounded-full transition-colors"
            >
              <Heart className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-slate-600"}`} />
            </button>
            <button className="p-2 hover:bg-[#1d606e]/10 rounded-full transition-colors">
              <Share2 className="w-6 h-6 text-slate-600 hover:text-[#1d606e]" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24">
              <motion.div 
                className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200"
              >
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                   <span className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg ${
                    book.condition === "Excellent" ? "bg-emerald-500 text-white" :
                    book.condition === "Good" ? "bg-[#1d606e] text-white" :
                    "bg-orange-500 text-white"
                  }`}>
                    {book.condition} Condition
                  </span>
                </div>
              </motion.div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1d606e]" />
                  <span className="text-xs font-medium text-slate-600">Secure Payment</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3">
                  <Info className="w-5 h-5 text-[#1d606e]" />
                  <span className="text-xs font-medium text-slate-600">Verified Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#1d606e]/10 text-[#1d606e] text-sm font-bold rounded-md">
                  {book.category}
                </span>
                <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-md">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-amber-700">{book.seller.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-slate-500">by <span className="text-slate-800 font-medium">{book.author}</span></p>
            </section>

            {/* Price Selection Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <PriceOption 
                  active={selectedOption === "buy"} 
                  onClick={() => setSelectedOption("buy")}
                  type="buy"
                  price={book.buyPrice}
                  icon={<ShoppingCart className="w-5 h-5" />}
                  brandColor="#1d606e"
                />
                <PriceOption 
                  active={selectedOption === "rent"} 
                  onClick={() => setSelectedOption("rent")}
                  type="rent"
                  price={book.rentPrice}
                  icon={<Repeat className="w-5 h-5" />}
                  brandColor="#f97316" // Keeping orange for variety, or you can use a lighter teal
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  style={{ backgroundColor: selectedOption === 'buy' ? '#1d606e' : '#f97316' }}
                  className="flex-[2] py-4 rounded-2xl font-bold text-white shadow-lg transition-all active:scale-[0.98] hover:opacity-90"
                >
                  {selectedOption === "buy" ? "Add to Cart" : "Rent This Book"}
                </button>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="flex-1 py-4 border-2 border-[#1d606e] rounded-2xl font-bold text-[#1d606e] hover:bg-[#1d606e]/5 transition-colors"
                >
                  Contact Seller
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 border-t border-slate-100 pt-6">
                <Benefit text="Verified Seller" />
                <Benefit text="7-Day Return" />
                <Benefit text={`${book.availability.stock} copies left`} />
              </div>
            </div>

            <div className="space-y-6">
              <section className="bg-white rounded-3xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">About this book</h3>
                <p className="text-slate-600 leading-relaxed italic">"{book.description}"</p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white rounded-3xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Specifications</h3>
                  <div className="space-y-3">
                    <SpecRow label="ISBN-13" value={book.specifications.isbn} />
                    <SpecRow label="Edition" value={book.specifications.edition} />
                    <SpecRow label="Pages" value={book.specifications.pages} />
                    <SpecRow label="Year" value={book.specifications.publicationYear} />
                  </div>
                </section>

                <SellerCard seller={book.seller} onContact={() => setShowContactModal(true)} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showContactModal && (
          <ContactModal 
            seller={book.seller} 
            onClose={() => setShowContactModal(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const PriceOption = ({ active, onClick, type, price, icon, brandColor }: any) => (
  <button
    onClick={onClick}
    className={`flex-1 p-5 rounded-2xl border-2 text-left transition-all ${
      active 
        ? "bg-slate-50"
        : "border-slate-100 bg-white hover:border-slate-200"
    }`}
    style={{ borderColor: active ? brandColor : '' }}
  >
    <div 
      className={`mb-3 p-2 w-fit rounded-lg transition-colors ${active ? 'text-white' : 'bg-slate-100 text-slate-500'}`}
      style={{ backgroundColor: active ? brandColor : '' }}
    >
      {icon}
    </div>
    <div className="text-sm font-medium text-slate-500 capitalize">{type}</div>
    <div className={`text-2xl font-black ${active ? "text-slate-900" : "text-slate-700"}`}>
      ₹{price}
    </div>
  </button>
);

const SpecRow = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-slate-500">{label}</span>
    <span className="font-semibold text-slate-800">{value}</span>
  </div>
);

const Benefit = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-[#1d606e]" />
    <span className="text-sm font-medium text-slate-600">{text}</span>
  </div>
);

const SellerCard = ({ seller, onContact }: { seller: BookDetail["seller"]; onContact: () => void }) => (
  <section className="bg-white rounded-3xl p-6 border border-slate-200">
    <h3 className="text-lg font-bold text-slate-900 mb-4">Sold by</h3>
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-[#1d606e] flex items-center justify-center text-white font-bold">
        {seller.name.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-slate-800">{seller.name}</p>
        <div className="flex items-center gap-1 text-[#1d606e]">
          <Star className="w-3 h-3 fill-current" />
          <span className="text-xs font-bold">{seller.rating} Rating</span>
        </div>
      </div>
    </div>
    <div className="space-y-2 mb-4">
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <MapPin className="w-3.5 h-3.5 text-[#1d606e]" /> {seller.location}
      </div>
    </div>
    <button 
      onClick={onContact}
      className="w-full py-2 bg-[#1d606e]/10 hover:bg-[#1d606e]/20 text-[#1d606e] rounded-xl text-sm font-bold transition-colors"
    >
      View Profile
    </button>
  </section>
);

const ContactModal = ({ seller, onClose }: { seller: BookDetail["seller"]; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
    />
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="relative bg-white w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] p-8 shadow-2xl"
    >
      <button onClick={onClose} className="absolute right-6 top-6 p-2 hover:bg-slate-100 rounded-full">
        <X className="w-6 h-6 text-slate-400" />
      </button>

      <h2 className="text-2xl font-black text-slate-900 mb-2">Connect with {seller.name.split(' ')[0]}</h2>
      <p className="text-slate-500 mb-8">Choose your preferred way to discuss the book.</p>

      <div className="grid gap-4">
        <ContactOption 
          href="tel:+919000000000"
          icon={<Phone className="w-5 h-5" />}
          label="Call Seller"
          sub="Direct conversation"
          color="bg-[#1d606e]/10 text-[#1d606e]"
        />
        <ContactOption 
          href="#"
          icon={<MessageCircle className="w-5 h-5" />}
          label="Live Chat"
          sub="Instant messaging"
          color="bg-[#1d606e]/10 text-[#1d606e]"
        />
        <ContactOption 
          href="mailto:seller@example.com"
          icon={<Mail className="w-5 h-5" />}
          label="Email"
          sub="Official inquiries"
          color="bg-[#1d606e]/10 text-[#1d606e]"
        />
      </div>
    </motion.div>
  </div>
);

const ContactOption = ({ href, icon, label, sub, color }: any) => (
  <a 
    href={href}
    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-[#1d606e]/30 hover:bg-[#1d606e]/5 transition-all group"
  >
    <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 ${color}`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="font-bold text-slate-900">{label}</div>
      <div className="text-xs text-slate-500">{sub}</div>
    </div>
  </a>
);