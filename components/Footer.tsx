import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-yellow-500/20 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Company */}

        <div>

          <Image
            src="/logo.png"
            alt="NORVEX"
            width={70}
            height={70}
          />

          <h2 className="text-2xl font-bold mt-4">
            NORVEX
          </h2>

          <p className="text-gray-400 mt-4 leading-8">
            Global Procurement, OEM Sourcing,
            Industrial Supply and Project
            Procurement Solutions.
          </p>

        </div>

        {/* Company */}

        <div>

          <h3 className="font-bold text-xl mb-6">
            Company
          </h3>

          <div className="space-y-4">

            <Link href="/">Home</Link><br/>

            <Link href="/about">About</Link><br/>

            <Link href="/services">Services</Link><br/>

            <Link href="/industries">Industries</Link>

          </div>

        </div>

        {/* Resources */}

        <div>

          <h3 className="font-bold text-xl mb-6">
            Resources
          </h3>

          <div className="space-y-4">

            <Link href="/blog">Blog</Link><br/>

            <Link href="/rfq">Request Quote</Link><br/>

            <Link href="/contact">Contact</Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="font-bold text-xl mb-6">
            Contact
          </h3>

          <p className="text-gray-400">
            sales@norvex.com
          </p>

          <p className="text-gray-400 mt-3">
            +91 97400 78445
          </p>

          <p className="text-gray-400 mt-3">
            India
          </p>

        </div>

      </div>

      <div className="border-t border-yellow-500/20 py-6 text-center text-gray-500">

        © {new Date().getFullYear()} NORVEX. All Rights Reserved.

      </div>

    </footer>
  );
}