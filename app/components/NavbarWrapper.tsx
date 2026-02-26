"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Hide Navbar on /admindashboard and all its sub routes
  if (pathname.startsWith("/admindashboard")) {
    return null;
  }

  return <Navbar />;
}