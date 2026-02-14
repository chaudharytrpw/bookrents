"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, SlidersHorizontal, X, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BookCard from "./components/BookCard";

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

const ALL_BOOKS: Book[] = [
  { id: 1, title: "Physics Vol. 1", author: "H.C. Verma", buyPrice: 450, rentPrice: 150, image: "/img/images.jpg", category: "Science", condition: "Good" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", buyPrice: 299, rentPrice: 80, image: "/img/images.jpg", category: "Fiction", condition: "Excellent" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin", buyPrice: 1200, rentPrice: 300, image: "/img/images.jpg", category: "Technology", condition: "Good" },
  { id: 4, title: "Biology NCERT", author: "Class 12", buyPrice: 180, rentPrice: 50, image: "/img/images.jpg", category: "Science", condition: "Fair" },
  { id: 5, title: "Chemistry Part II", author: "R.K. Sharma", buyPrice: 520, rentPrice: 160, image: "/img/images.jpg", category: "Science", condition: "Good" },
  { id: 6, title: "1984", author: "George Orwell", buyPrice: 350, rentPrice: 90, image: "/img/images.jpg", category: "Fiction", condition: "Excellent" },
  { id: 7, title: "Data Structures", author: "Cormen", buyPrice: 890, rentPrice: 250, image: "/img/images.jpg", category: "Technology", condition: "Good" },
  { id: 8, title: "Mathematics Class 12", author: "R.D. Sharma", buyPrice: 650, rentPrice: 180, image: "/img/images.jpg", category: "Mathematics", condition: "Fair" },
];

export default function AllBooksPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCondition, setSelectedCondition] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["All", "Science", "Fiction", "Technology", "Mathematics", "Self-Help", "Language"];
  const conditions = ["All", "Excellent", "Good", "Fair"];
  const priceRanges = ["All", "Under ₹200", "₹200-₹500", "₹500-₹1000", "Above ₹1000"];

  const filteredBooks = ALL_BOOKS.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesCondition = selectedCondition === "All" || book.condition === selectedCondition;
    
    let matchesPrice = true;
    if (priceRange === "Under ₹200") matchesPrice = book.buyPrice < 200;
    else if (priceRange === "₹200-₹500") matchesPrice = book.buyPrice >= 200 && book.buyPrice <= 500;
    else if (priceRange === "₹500-₹1000") matchesPrice = book.buyPrice > 500 && book.buyPrice <= 1000;
    else if (priceRange === "Above ₹1000") matchesPrice = book.buyPrice > 1000;

    return matchesSearch && matchesCategory && matchesCondition && matchesPrice;
  });

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedCondition("All");
    setPriceRange("All");
    setSearchQuery("");
  };

  const activeFiltersCount = [selectedCategory, selectedCondition, priceRange].filter(f => f !== "All").length;

  return (
    <div className="min-h-screen  mt-[50]">
      <div className="sticky top-14 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-1 py-3">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => router.back()} className="p-2 hover:bg-slate-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-slate-700" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-slate-900">All Books</h1>
              <p className="text-xs text-slate-500">{filteredBooks.length} books</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="relative px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-[10px] rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar Width Reduced */}
          <motion.aside
            initial={false}
            animate={{ width: showFilters ? "240px" : "0px", opacity: showFilters ? 1 : 0 }}
            className="hidden lg:block overflow-hidden"
          >
            <div className="sticky top-28 bg-white rounded-xl border border-slate-200 p-4">
              <FilterSection title="Category">
                {categories.map((cat) => (
                  <FilterButton key={cat} active={selectedCategory === cat} onClick={() => setSelectedCategory(cat)}>
                    {cat}
                  </FilterButton>
                ))}
              </FilterSection>
              {/* ... Other Filter Sections ... */}
            </div>
          </motion.aside>

          {/* BOOKS GRID - Column Count Increased for Smaller Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredBooks.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CHOTA BOOK CARD COMPONENT


export const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4 pb-4 border-b border-slate-100 last:border-0">
    <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-2">{title}</h4>
    <div className="space-y-1">{children}</div>
  </div>
);

export const FilterButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-2 py-1.5 rounded-md text-xs transition-all ${
      active ? "bg-indigo-600 text-white font-medium" : "text-slate-600 hover:bg-slate-50"
    }`}
  >
    {children}
  </button>
);