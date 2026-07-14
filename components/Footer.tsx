import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-[#050505] text-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Image
              src="/logo.png"
              alt="NORVEX Logo"
              width={75}
              height={75}
            />

            <h2 className="mt-5 text-3xl font-bold">
              NORVEX
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Network Of Resources, Ventures & Exports delivers global
              procurement, OEM sourcing and industrial supply solutions for
              businesses worldwide.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-7 text-xl font-bold">
              Company
            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Industries", "/industries"],
              ].map(([name, href]) => (

                <li key={name}>

                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-yellow-400"
                  >

                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                    {name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-7 text-xl font-bold">
              Resources
            </h3>

            <ul className="space-y-4">

              {[
                ["Blog", "/blog"],
                ["Request Quote", "/rfq"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (

                <li key={name}>

                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-yellow-400"
                  >

                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                    {name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-7 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:sales.norvex@outlook.com"
                className="group flex items-start gap-3 text-gray-400 transition hover:text-yellow-400"
              >

                <Mail size={18} className="mt-1 text-yellow-400" />

                <span>sales.norvex@outlook.com</span>

              </a>

              <a
                href="mailto:norvex.in@outlook.com"
                className="group flex items-start gap-3 text-gray-400 transition hover:text-yellow-400"
              >

                <Mail size={18} className="mt-1 text-yellow-400" />

                <span>norvex.in@outlook.com</span>

              </a>

              <a
                href="tel:+919740078445"
                className="group flex items-center gap-3 text-gray-400 transition hover:text-yellow-400"
              >

                <Phone size={18} className="text-yellow-400" />

                <span>+91 97400 78445</span>

              </a>

              <div className="flex items-center gap-3 text-gray-400">

                <MapPin size={18} className="text-yellow-400" />

                <span>India</span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col gap-6 border-t border-yellow-500/20 pt-8 lg:flex-row lg:items-center lg:justify-between">

          <p className="text-sm text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} NORVEX. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              self-center
              rounded-full
              border
              border-yellow-500/30
              px-6
              py-3
              text-sm
              transition-all
              hover:border-yellow-400
              hover:bg-yellow-400
              hover:text-black
            "
          >

            <ArrowUp size={18} />

            Back to Top

          </a>

        </div>

      </div>

    </footer>
  );
}