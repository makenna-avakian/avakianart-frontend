"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-4 border-black z-40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-black">
          Makenna Avakian
        </Link>

        {/* Links */}
        <div className="flex gap-6 font-bold text-lg">
          <Link
            href="/gallery"
            className="text-gray-700 hover:text-black transition"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black transition"
          >
            Commisions
          </Link>
          <Link
            href="/design"
            className="text-gray-700 hover:text-black transition"
          >
            Like this website?
          </Link>
        </div>
      </nav>
    </header>
  );
}
