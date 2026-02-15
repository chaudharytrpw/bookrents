'use client';

import { Menu, Bell, Search } from "lucide-react";

interface Props {
  setSidebarOpen: (val: boolean) => void;
}

export default function AdminNavbar({ setSidebarOpen }: Props) {
  return (
    <header className="sticky ml-2 top-0 bg-[#1d606e] border-b border-slate-200 z-30">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu />
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Admin Dashboard
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search (hidden on small screens) */}
          <div className="hidden md:flex items-center bg-slate-100 px-3 py-2 rounded-lg">
            <Search size={16} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-black outline-none ml-2 text-sm"
            />
          </div>

          <button className="relative p-2 rounded-lg hover:bg-slate-100 text-white">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
            A
          </div>

        </div>
      </div>
    </header>
  );
}
