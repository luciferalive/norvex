const contactDetails = [
  {
    icon: "📧",
    title: "Email Us",
    details: [
      "sales.norvex@outlook.com",
      "norvex.in@outlook.com",
    ],
    link: "mailto:sales.norvex@outlook.com",
    action: "Send Email →",
  },

  {
    icon: "📞",
    title: "Call / WhatsApp",
    details: [
      "+91 97400 78445",
      "Available for global inquiries",
    ],
    link: "https://wa.me/919740078445",
    action: "Chat on WhatsApp →",
  },

  {
    icon: "📍",
    title: "Our Location",
    details: [
      "India",
      "Serving clients worldwide",
    ],
    link: null,
    action: null,
  },
];


export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 scroll-mt-24"
    >

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-yellow-500 mb-10">
          Contact Us
        </h2>



        <div className="grid md:grid-cols-3 gap-8">


          {contactDetails.map((item) => (

            item.link ? (

              <a
                key={item.title}
                href={item.link}
                target={item.title.includes("WhatsApp") ? "_blank" : "_self"}
                className="
                border
                border-yellow-500/20
                rounded-xl
                p-6
                bg-black
                hover:border-yellow-400
                hover:-translate-y-2
                transition
                duration-300
                cursor-pointer
                "
              >

                <div className="text-4xl mb-4">
                  {item.icon}
                </div>


                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>


                {item.details.map((detail) => (

                  <p
                    key={detail}
                    className="text-gray-300"
                  >
                    {detail}
                  </p>

                ))}


                <p className="text-yellow-400 text-sm mt-5 font-semibold">
                  {item.action}
                </p>


              </a>

            ) : (

              <div
                key={item.title}
                className="
                border
                border-yellow-500/20
                rounded-xl
                p-6
                bg-black
                hover:border-yellow-400
                hover:-translate-y-2
                transition
                duration-300
                "
              >

                <div className="text-4xl mb-4">
                  {item.icon}
                </div>


                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>


                {item.details.map((detail) => (

                  <p
                    key={detail}
                    className="text-gray-300"
                  >
                    {detail}
                  </p>

                ))}

              </div>

            )

          ))}


        </div>


      </div>

    </section>
  );
}