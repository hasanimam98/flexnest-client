"use client";

import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "All Classes",
    href: "/classes",
  },
  {
    name: "Community Forum",
    href: "/forum",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Dumbbell
            className="text-green-600"
            size={30}
          />

          <span className="text-2xl font-bold">
            FlexNest
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-green-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="btn btn-success"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col p-5 gap-4">

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Link
              href="/login"
              className="btn btn-success w-full"
            >
              Login
            </Link>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;