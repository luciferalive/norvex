"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">

        <div
          className={`flex h-20 w-full max-w-[1550px] items-center justify-between rounded-2xl border px-8 transition-all duration-300 ${
            scrolled
              ? "border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl"
              : "border-white/20 bg-white/70 backdrop-blur-xl"
          }`}
        >

          {/* Logo */}

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="NORVEX"
              width={72}
              height={72}
              priority
            />

            <div>

              <h1 className="text-3xl font-black tracking-widest text-[#123E63]">
                NORVEX
              </h1>

              <p className="hidden text-xs text-slate-500 lg:block">
                Network Of Resources, Ventures & Exports
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navItems.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                className={`relative font-medium transition ${
                  pathname === item.href
                    ? "text-[#0E8F66]"
                    : "text-slate-700 hover:text-[#0E8F66]"
                }`}
              >

                {item.title}

                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#0E8F66]" />
                )}

              </Link>

            ))}

            <Link
              href="/contact"
              className="rounded-full bg-[#123E63] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0E8F66]"
            >
              Request Quote
            </Link>

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 lg:hidden"
          >
            {open ? (
              <X size={28} className="text-[#123E63]" />
            ) : (
              <Menu size={28} className="text-[#123E63]" />
            )}
          </button>

        </div>

      </header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-28"
          >

            <div className="mx-auto flex max-w-md flex-col gap-4 px-6">

              {navItems.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className={`rounded-2xl px-6 py-4 text-lg transition ${
                    pathname === item.href
                      ? "bg-[#123E63] font-semibold text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.title}
                </Link>

              ))}

              <Link
                href="/contact"
                className="mt-4 rounded-2xl bg-[#0E8F66] py-4 text-center text-lg font-bold text-white"
              >
                Request Quote
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}