const stats = [
  {
    number: "50+",
    title: "Countries Served",
    description: "Global sourcing network across international markets",
  },

  {
    number: "500+",
    title: "Supplier Network",
    description: "Trusted manufacturers and supplier partnerships",
  },

  {
    number: "1000+",
    title: "Products Sourced",
    description: "Industrial products and technical solutions",
  },

  {
    number: "24/7",
    title: "Procurement Support",
    description: "Dedicated assistance for urgent requirements",
  },
];


export default function Stats() {
  return (

    <section
      className="
      bg-black
      text-white
      py-20
      px-6
      "
    >

      <div className="max-w-7xl mx-auto">


        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          "
        >


          {stats.map((stat,index)=>(

            <div
              key={index}
              className="
              text-center
              bg-[#111]
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              hover:border-yellow-400
              transition
              duration-300
              "
            >


              <h3
                className="
                text-5xl
                font-bold
                text-yellow-400
                mb-3
                "
              >
                {stat.number}
              </h3>


              <h4
                className="
                text-xl
                font-semibold
                mb-3
                "
              >
                {stat.title}
              </h4>


              <p
                className="
                text-gray-400
                text-sm
                "
              >
                {stat.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}