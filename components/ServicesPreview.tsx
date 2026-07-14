import Link from "next/link";

const services = [
  {
    title: "Global Procurement",
    image: "/services/global-procurement.jpg",
  },
  {
    title: "OEM Sourcing",
    image: "/services/oem-sourcing.jpg",
  },
  {
    title: "MRO Supplies",
    image: "/services/mro.jpg",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-black py-28 px-6 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-14">

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 mb-4">
              OUR SERVICES
            </p>

            <h2 className="text-5xl font-bold">
              Procurement Solutions
            </h2>

          </div>

          <Link
            href="/services"
            className="text-yellow-400 font-semibold hover:underline"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (

            <Link
              key={service.title}
              href="/services"
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111]"
            >

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  Professional sourcing solutions tailored for industrial procurement.
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}