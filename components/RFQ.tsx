export default function RFQ() {
  return (

    <section
      id="rfq"
      className="
      bg-black
      text-white
      py-24
      px-6
      "
    >

      <div className="max-w-6xl mx-auto">

        <div
          className="
          bg-[#111]
          border
          border-yellow-500/20
          rounded-3xl
          p-8
          md:p-12
          "
        >

          <div className="text-center mb-12">

            <p className="
              text-yellow-400
              uppercase
              tracking-widest
            ">
              Start Your Project
            </p>


            <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
            ">
              Request A Quote
            </h2>


            <p className="
              text-gray-400
              mt-5
              max-w-2xl
              mx-auto
            ">
              Share your requirements and our procurement team
              will help you source the right solution.
            </p>

          </div>



          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="
            grid
            md:grid-cols-2
            gap-6
            "
          >

            {/* Web3Forms Settings */}

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


            {/* Customer Details */}


            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
              bg-black
              border
              border-yellow-500/20
              rounded-xl
              px-5
              py-4
              outline-none
              focus:border-yellow-400
              "
            />



            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="
              bg-black
              border
              border-yellow-500/20
              rounded-xl
              px-5
              py-4
              outline-none
              focus:border-yellow-400
              "
            />



            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="
              bg-black
              border
              border-yellow-500/20
              rounded-xl
              px-5
              py-4
              outline-none
              focus:border-yellow-400
              "
            />



            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="
              bg-black
              border
              border-yellow-500/20
              rounded-xl
              px-5
              py-4
              outline-none
              focus:border-yellow-400
              "
            />



            <textarea
              name="message"
              placeholder="Describe your requirement..."
              rows={5}
              required
              className="
              md:col-span-2
              bg-black
              border
              border-yellow-500/20
              rounded-xl
              px-5
              py-4
              outline-none
              focus:border-yellow-400
              "
            />



            <button
              type="submit"
              className="
              md:col-span-2
              bg-yellow-400
              text-black
              py-4
              rounded-xl
              font-bold
              text-lg
              hover:bg-yellow-300
              transition
              "
            >
              Submit Request
            </button>


          </form>


        </div>

      </div>

    </section>

  );
}