import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-yellow-500/20 text-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <Image
              src="/logo.png"
              alt="NORVEX Logo"
              width={70}
              height={70}
              className="mb-5"
            />

            <h2 className="text-2xl font-bold">
              NORVEX
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              Global Procurement, OEM Sourcing,
              Industrial Supply and Project
              Procurement Solutions connecting
              industries with trusted suppliers
              worldwide.
            </p>

          </div>

          {/* Company */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/industries" className="text-gray-400 hover:text-yellow-400 transition">
                  Industries
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Resources
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/blog" className="text-gray-400 hover:text-yellow-400 transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/rfq" className="text-gray-400 hover:text-yellow-400 transition">
                  Request Quote
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:sales.norvex@outlook.com"
                className="block text-gray-400 hover:text-yellow-400 transition break-all"
              >
                sales.norvex@outlook.com
              </a>

              <a
                href="mailto:norvex.in@outlook.com"
                className="block text-gray-400 hover:text-yellow-400 transition break-all"
              >
                norvex.in@outlook.com
              </a>

              <a
                href="tel:+919740078445"
                className="block text-gray-400 hover:text-yellow-400 transition"
              >
                +91 97400 78445
              </a>

              <p className="text-gray-400">
                India
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-5 border-t border-yellow-500/20 pt-8 text-center lg:flex-row lg:items-center lg:justify-between">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NORVEX. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 px-5 py-2 text-sm text-gray-300 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}