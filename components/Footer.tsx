export default function Footer() {
  return (

    <footer
      className="
      bg-black
      border-t
      border-yellow-500/20
      text-white
      py-12
      px-6
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-3
      gap-10
      ">


        <div>

          <h2 className="
          text-3xl
          font-bold
          text-yellow-400
          ">
            NORVEX
          </h2>


          <p className="
          text-gray-400
          mt-4
          leading-relaxed
          ">
            Network Of Resources, Ventures & Exports.
            Providing global procurement and sourcing
            solutions for industries worldwide.
          </p>

        </div>



        <div>

          <h3 className="
          font-bold
          text-xl
          mb-4
          ">
            Quick Links
          </h3>


          <div className="
          space-y-2
          text-gray-400
          ">

            <p>Home</p>
            <p>Services</p>
            <p>Industries</p>
            <p>Request Quote</p>

          </div>


        </div>




        <div>

          <h3 className="
          font-bold
          text-xl
          mb-4
          ">
            Industries
          </h3>


          <div className="
          space-y-2
          text-gray-400
          ">

            <p>Oil & Gas</p>
            <p>Aviation</p>
            <p>Marine</p>
            <p>EPC Projects</p>

          </div>


        </div>



      </div>



      <div className="
      text-center
      border-t
      border-yellow-500/20
      mt-10
      pt-6
      text-gray-500
      text-sm
      ">

        © {new Date().getFullYear()} NORVEX. All Rights Reserved.

      </div>


    </footer>

  );
}