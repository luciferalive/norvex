const contactDetails = [
  {
    icon: "📧",
    title: "Email Us",
    details: [
      "sales@norvex.com",
      "info@norvex.com",
    ],
  },

  {
    icon: "📞",
    title: "Call Us",
    details: [
      "+91 97400 78445",
      "Available for global inquiries",
    ],
  },

  {
    icon: "📍",
    title: "Our Location",
    details: [
      "India",
      "Serving clients worldwide",
    ],
  },
];


export default function Contact() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-yellow-500 mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="border border-yellow-500/20 rounded-xl p-6"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {item.details.map((detail) => (
                <p key={detail} className="text-gray-300">
                  {detail}
                </p>
              ))}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}