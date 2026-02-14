"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BookCard from "../allbooks/components/BookCard";

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
  { id: 8, title: "Mathematics Class 12", author: "R.D. Sharma", buyPrice: 650, rentPrice: 180, image: "/img/images.jpg", category: "Mathematics", condition: "Fair" },
];

export default function FeaturedBooks() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-5 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Featured Books
            </h2>
            <p className="text-slate-500 mt-2">
              Top picks from students near you
            </p>
          </div>

          <button
            onClick={() => router.push("/allbooks")}
            className="text-indigo-600 cursor-pointer font-semibold hover:underline"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 bg-slate-200 animate-pulse rounded-xl"
                />
              ))
            : ALL_BOOKS.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
}
