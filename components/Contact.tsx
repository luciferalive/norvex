import Reveal from "./Reveal";

const contactDetails = [
  {
    icon: "📧",
    title: "Email Us",
    details: [
      "sales.norvex@outlook.com",
      "norvex.in@outlook.com",
    ],
    link: "mailto:sales.norvex@outlook.com",
    action: "Send Email",
  },
  {
    icon: "📞",
    title: "Call / WhatsApp",
    details: [
      "+91 97400 78445",
      "Available for global inquiries",
    ],
    link: "https://wa.me/919740078445",
    action: "Chat on WhatsApp",
  },
  {
    icon: "📍",
    title: "Our Location",
    details: [
      "India",
      "Serving Clients Worldwide",
    ],
    link: null,
    action: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-5 sm:px-8 lg:px-6 scroll-mt-24"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-14">

            <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold">
              Get In Touch
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Let's Discuss Your Requirements
            </h2>

            <p className="text-gray-400 mt-5 text-base sm:text-lg leading-8">
              Whether you need OEM sourcing, project procurement,
              industrial supplies or technical sourcing support,
              NORVEX is ready to help.
            </p>

          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {contactDetails.map((item) => {
              const card = (
                <div
                  className="
                    group
                    h-full
                    rounded-3xl
                    border
                    border-yellow-500/20
                    bg-[#111]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-yellow-400
                    hover:shadow-[0_15px_40px_rgba(250,204,21,0.12)]
                  "
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/10 text-4xl mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-2">

                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-gray-400 leading-7 break-words"
                      >
                        {detail}
                      </p>
                    ))}

                  </div>

                  {item.action && (
                    <div className="mt-8">
                      <span
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          bg-yellow-400
                          px-5
                          py-2.5
                          text-black
                          font-semibold
                          transition
                          group-hover:bg-yellow-300
                        "
                      >
                        {item.action} →
                      </span>
                    </div>
                  )}
                </div>
              );

              return item.link ? (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.title.includes("WhatsApp") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  {card}
                </a>
              ) : (
                <div key={item.title}>
                  {card}
                </div>
              );
            })}

          </div>

        </div>
      </Reveal>
    </section>
  );
}