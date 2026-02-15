'use client';

import { X, LayoutDashboard, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (val: boolean) => void;
}

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admindashboard" },
    { name: "Users", icon: Users, href: "/admindashboard/users" },
    { name: "Settings", icon: Settings, href: "/admindashboard/settings" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-[#1d606e] border-r border-slate-200 shadow-sm flex-col z-40 text-white">
        <div className="p-6 text-2xl font-bold border-b border-slate-200">
          Admin Panel
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  active
                    ? "bg-white text-black" // Active item: white bg, black text
                    : "text-white hover:bg-[#14515b]" // Inactive: white text, dark teal hover
                }`}
              >
                <Icon
                  size={18}
                  className={active ? "text-black" : "text-white"} // Icon color changes with active
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 h-full w-72 bg-[#1d606e] shadow-xl p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item, i) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                      active
                        ? "bg-white text-black" // Active item: white bg, black text
                        : "text-white hover:bg-[#14515b]" // Inactive: white text, dark teal hover
                    }`}
                  >
                    <Icon
                      size={18}
                      className={active ? "text-black" : "text-white"} // Icon color changes with active
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
