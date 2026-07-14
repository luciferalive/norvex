"use client";

import { Send, User, Building2, Mail, Phone, FileText } from "lucide-react";

export default function RFQ() {
  return (
    <section
      id="rfq"
      className="bg-black py-24 px-5 sm:px-8 lg:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div
          className="
            rounded-3xl
            border
            border-yellow-500/20
            bg-[#111]
            p-8
            md:p-14
            shadow-[0_25px_70px_rgba(250,204,21,0.08)]
          "
        >

          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
              START YOUR PROJECT
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Request A Quote
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
              Share your procurement requirements and our sourcing specialists
              will get back to you with the best solution.
            </p>

          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid md:grid-cols-2 gap-7"
          >

            <input
              type="hidden"
              name="access_key"
              value="27f6095f-9d7e-46ab-acd2-d739955ddf27"
            />

            <input
              type="hidden"
              name="subject"
              value="New NORVEX Website RFQ"
            />

            <input
              type="hidden"
              name="from_name"
              value="NORVEX Website"
            />

            {/* Name */}

            <div className="relative">

              <User
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-500/20
                  bg-black
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            {/* Company */}

            <div className="relative">

              <Building2
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-500/20
                  bg-black
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            {/* Email */}

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-500/20
                  bg-black
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            {/* Phone */}

            <div className="relative">

              <Phone
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-500/20
                  bg-black
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            {/* Message */}

            <div className="relative md:col-span-2">

              <FileText
                size={18}
                className="absolute left-5 top-6 text-yellow-400"
              />

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Describe your procurement requirement..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-yellow-500/20
                  bg-black
                  py-4
                  pl-14
                  pr-5
                  outline-none
                  transition
                  resize-none
                  focus:border-yellow-400
                "
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              className="
                group
                md:col-span-2
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-yellow-400
                py-4
                text-lg
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-yellow-300
              "
            >

              Submit Request

              <Send
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}