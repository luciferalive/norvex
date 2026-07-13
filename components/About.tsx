import Reveal from "./Reveal";
export default function About() {
  return (
        <Reveal>

    <section id="about" className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-yellow-400 mb-8">
          About NORVEX
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          NORVEX (Network Of Resources, Ventures & Exports) is a complete
          procurement and sourcing company delivering reliable supply chain
          solutions for industrial, commercial and infrastructure projects.
        </p>

        <p className="text-gray-400 mt-6 text-lg leading-8">
          We specialize in OEM sourcing, MRO supplies, engineering materials,
          industrial equipment, import & export services, and end-to-end
          procurement support. Our goal is to connect businesses with trusted
          manufacturers and suppliers across the globe while ensuring quality,
          competitive pricing, and timely delivery.
        </p>

      </div>
    </section>
    </Reveal>
  );
}