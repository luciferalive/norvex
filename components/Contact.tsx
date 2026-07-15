import Reveal from "./Reveal";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "sales.norvex@outlook.com",
      "norvex.in@outlook.com",
    ],
    link: "mailto:sales.norvex@outlook.com",
    button: "Send Email",
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    details: [
      "+91 97400 78445",
      "Available Worldwide",
    ],
    link: "https://wa.me/919740078445",
    button: "Chat Now",
  },
  {
    icon: MapPin,
    title: "Location",
    details: [
      "India",
      "Serving Clients Worldwide",
    ],
    link: "",
    button: "",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-28 px-6 scroll-mt-24"
    >
      <Reveal>

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E8F66]">
              Contact NORVEX
            </span>

            <h2 className="mt-6 text-5xl font-black text-[#123E63]">
              Let's Build Your Supply Chain
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Looking for a reliable procurement partner? Our team is
              ready to assist with sourcing, OEM procurement, industrial
              supplies and project requirements.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {contactDetails.map((item) => {
              const Icon = item.icon;

              const Card = (
                <div className="group rounded-[30px] border border-slate-200 bg-slate-50 p-10 transition duration-300 hover:-translate-y-3 hover:border-[#0E8F66] hover:bg-white hover:shadow-2xl">

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#123E63]/10">

                    <Icon
                      size={34}
                      className="text-[#123E63] transition group-hover:text-[#0E8F66]"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#123E63]">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-3">

                    {item.details.map((text) => (
                      <p
                        key={text}
                        className="leading-7 text-slate-600"
                      >
                        {text}
                      </p>
                    ))}

                  </div>

                  {item.button && (

                    <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0E8F66]">

                      {item.button}

                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-2"
                      />

                    </div>

                  )}

                </div>
              );

              return item.link ? (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </a>
              ) : (
                <div key={item.title}>{Card}</div>
              );
            })}

          </div>

        </div>

      </Reveal>

    </section>
  );
}