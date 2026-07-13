export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center px-6 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        <div>

          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Global Procurement Solutions
          </p>


          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Trusted Partner For
            <span className="text-yellow-400">
              {" "}Global Sourcing
            </span>
          </h1>


          <p className="text-gray-400 text-lg mt-6 max-w-xl">
            NORVEX provides complete procurement solutions,
            connecting businesses with reliable suppliers,
            OEM manufacturers, and industrial partners worldwide.
          </p>


          <div className="flex gap-5 mt-8">

            <a
              href="#rfq"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              Request Quote
            </a>


            <a
              href="#services"
              className="border border-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Explore Services
            </a>

          </div>


        </div>



        <div className="hidden md:flex justify-center relative">


  <div className="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse">
  </div>


  <div className="relative w-96 h-96 rounded-full border border-yellow-500/30 flex items-center justify-center backdrop-blur">


    <div className="absolute top-10 left-10 bg-[#151515] border border-yellow-500/30 px-5 py-3 rounded-xl text-sm">
      OEM Sourcing
    </div>


    <div className="absolute bottom-10 right-10 bg-[#151515] border border-yellow-500/30 px-5 py-3 rounded-xl text-sm">
      Global Supply
    </div>


    <div className="absolute top-1/2 left-0 bg-[#151515] border border-yellow-500/30 px-5 py-3 rounded-xl text-sm">
      Industrial Solutions
    </div>


    <div className="w-72 h-72 rounded-full bg-yellow-500/10 flex items-center justify-center">

      <span className="text-yellow-400 text-6xl font-bold">
        NORVEX
      </span>

    </div>


  </div>


</div>


      </div>


    </section>
  );
}