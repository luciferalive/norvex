"use client";

import {
  Send,
  User,
  Building2,
  Mail,
  Phone,
  FileText,
} from "lucide-react";

export default function RFQ() {
  return (
    <section
      id="rfq"
      className="bg-slate-50 py-28 px-6"
    >

      <div className="mx-auto max-w-6xl">


        <div
          className="
          rounded-[40px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-xl
          md:p-14
          "
        >


          {/* HEADER */}

          <div className="mb-14 text-center">


            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#0E8F66]">
              Start Your Project
            </span>


            <h2 className="mt-8 text-5xl font-black text-[#123E63]">

              Request A Quote

            </h2>


            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">

              Share your procurement requirements and our sourcing specialists
              will provide the best solution with reliable suppliers and
              competitive pricing.

            </p>


          </div>



          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid gap-7 md:grid-cols-2"
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



            {/* NAME */}

            <div className="relative">

              <User
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0E8F66]"
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
                border-slate-200
                bg-slate-50
                py-4
                pl-14
                pr-5
                text-slate-800
                outline-none
                transition
                focus:border-[#0E8F66]
                "
              />

            </div>



            {/* COMPANY */}

            <div className="relative">

              <Building2
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0E8F66]"
              />


              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-4
                pl-14
                pr-5
                text-slate-800
                outline-none
                transition
                focus:border-[#0E8F66]
                "
              />

            </div>




            {/* EMAIL */}

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0E8F66]"
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
                border-slate-200
                bg-slate-50
                py-4
                pl-14
                pr-5
                text-slate-800
                outline-none
                transition
                focus:border-[#0E8F66]
                "
              />

            </div>




            {/* PHONE */}

            <div className="relative">

              <Phone
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0E8F66]"
              />


              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-4
                pl-14
                pr-5
                text-slate-800
                outline-none
                transition
                focus:border-[#0E8F66]
                "
              />

            </div>




            {/* MESSAGE */}

            <div className="relative md:col-span-2">


              <FileText
                size={18}
                className="absolute left-5 top-6 text-[#0E8F66]"
              />


              <textarea
                name="message"
                rows={6}
                required
                placeholder="Describe your procurement requirement..."
                className="
                w-full
                resize-none
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-4
                pl-14
                pr-5
                text-slate-800
                outline-none
                transition
                focus:border-[#0E8F66]
                "
              />

            </div>




            {/* BUTTON */}


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
              bg-[#123E63]
              py-4
              text-lg
              font-bold
              text-white
              transition
              hover:bg-[#0E8F66]
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