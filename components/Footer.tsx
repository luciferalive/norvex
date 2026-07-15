import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123E63] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Image
              src="/logo.png"
              alt="NORVEX"
              width={80}
              height={80}
            />

            <h2 className="mt-5 text-3xl font-black">
              NORVEX
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Network Of Resources, Ventures & Exports provides
              global procurement, OEM sourcing and industrial
              supply solutions for businesses across the world.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Company
            </h3>

            <div className="space-y-4">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Industries", "/industries"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (

                <Link
                  key={name}
                  href={href}
                  className="flex items-center gap-2 text-slate-300 transition hover:text-white"
                >

                  <ArrowRight size={16} />

                  {name}

                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:sales.norvex@outlook.com"
                className="flex items-start gap-3 text-slate-300 hover:text-white"
              >

                <Mail size={18} />

                <span>sales.norvex@outlook.com</span>

              </a>

              <a
                href="mailto:norvex.in@outlook.com"
                className="flex items-start gap-3 text-slate-300 hover:text-white"
              >

                <Mail size={18} />

                <span>norvex.in@outlook.com</span>

              </a>

              <a
                href="tel:+919740078445"
                className="flex items-center gap-3 text-slate-300 hover:text-white"
              >

                <Phone size={18} />

                <span>+91 97400 78445</span>

              </a>

              <div className="flex items-center gap-3 text-slate-300">

                <MapPin size={18} />

                <span>India • Serving Worldwide</span>

              </div>

            </div>

          </div>

          {/* CTA */}

          <div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-bold">
                Ready to Source Globally?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Send us your RFQ and our procurement specialists will
                identify the best sourcing solution for your project.
              </p>

              <Link
                href="/rfq"
                className="mt-8 inline-flex rounded-xl bg-[#0E8F66] px-6 py-3 font-semibold transition hover:bg-emerald-500"
              >
                Request Quote
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">

          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} NORVEX. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 transition hover:bg-white hover:text-[#123E63]"
          >

            <ArrowUp size={18} />

            Back to Top

          </a>

        </div>

      </div>

    </footer>
  );
}