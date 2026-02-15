"use client"; // Ye zaroori hai URL check karne ke liye

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Jin URLs par Navbar nahi dikhana unhe yahan add karein
  const hideNavbarRoutes = ["/admindashboard"];

  // Agar current path 'hideNavbarRoutes' mein hai, toh kuch mat dikhao
  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}