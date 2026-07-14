import Link from "next/link";

const industries = [
  {
    title: "Oil & Gas",
    image: "/industries/oil-gas.jpg",
  },
  {
    title: "Aviation",
    image: "/industries/aviation.jpg",
  },
  {
    title: "Marine",
    image: "/industries/marine.jpg",
  },
  {
    title: "Manufacturing",
    image: "/industries/manufacturing.jpg",
  },
];

export default function IndustriesPreview() {
  return (
    <section className="bg-[#050505] py-28 px-6 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-14">

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 mb-4">
              INDUSTRIES
            </p>

            <h2 className="text-5xl font-bold">
              Industries We Serve
            </h2>

          </div>

          <Link
            href="/industries"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Explore All →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((industry) => (

            <Link
              key={industry.title}
              href="/industries"
              className="group relative overflow-hidden rounded-3xl h-96"
            >

              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-8 left-8">

                <h3 className="text-3xl font-bold">
                  {industry.title}
                </h3>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}