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


        <div className="
          bg-[#111]
          border
          border-yellow-500/20
          rounded-3xl
          p-8
          md:p-12
        ">


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



          <form className="
            grid
            md:grid-cols-2
            gap-6
          ">


            <input
              type="text"
              placeholder="Your Name"
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
              placeholder="Email Address"
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
              placeholder="Describe your requirement..."
              rows={5}
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