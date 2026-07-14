"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-yellow-500/20 bg-black/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="NORVEX Logo"
            width={55}
            height={55}
            priority
          />

          <div>
            <h1 className="text-white font-bold text-2xl tracking-wide">
              NORVEX
            </h1>

            <p className="text-yellow-400 text-xs">
              Network Of Resources, Ventures & Exports
            </p>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition duration-300 hover:text-yellow-400 ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-white"
              }`}
            >

              {link.name}

              {pathname === link.href && (
                <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-yellow-400 rounded-full" />
              )}

            </Link>

          ))}

          <Link
            href="/rfq"
            className="ml-4 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
          >
            Request Quote
          </Link>

        </nav>

      </div>

    </header>
  );
}