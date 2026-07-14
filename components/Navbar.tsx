"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-yellow-500/20 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="NORVEX Logo"
            width={48}
            height={48}
            priority
            className="h-11 w-11 sm:h-12 sm:w-12"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold tracking-wide text-white sm:text-2xl">
              NORVEX
            </h1>

            <p className="hidden text-xs text-yellow-400 sm:block">
              Network Of Resources, Ventures & Exports
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {link.name}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-yellow-400" />
              )}
            </Link>
          ))}

          <Link
            href="/rfq"
            className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Request Quote
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-yellow-500/20 p-2 text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="border-t border-yellow-500/20 bg-[#0c0c0c]/95 backdrop-blur-xl">
              <div className="flex flex-col gap-2 px-6 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`rounded-xl px-4 py-4 text-lg transition ${
                      pathname === link.href
                        ? "bg-yellow-400 text-black font-semibold"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/rfq"
                  className="mt-3 rounded-xl bg-yellow-400 px-4 py-4 text-center text-lg font-bold text-black"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}