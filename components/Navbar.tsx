import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-xl border-b border-yellow-500/20 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}
        <div className="flex items-center gap-3">

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

        </div>



        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white">

          <a
            href="#home"
            className="hover:text-yellow-400 transition"
          >
            Home
          </a>


          <a
            href="#about"
            className="hover:text-yellow-400 transition"
          >
            About
          </a>


          <a
            href="#services"
            className="hover:text-yellow-400 transition"
          >
            Services
          </a>


          <a
            href="#industries"
            className="hover:text-yellow-400 transition"
          >
            Industries
          </a>


          <a
            href="#contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </a>



          <a
            href="#rfq"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Request Quote
          </a>


        </nav>


      </div>

    </header>
  );
}