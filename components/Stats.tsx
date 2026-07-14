"use client";

import { useEffect, useRef, useState } from "react";
import {
  Globe2,
  Building2,
  PackageCheck,
  Headset,
} from "lucide-react";

const stats = [
  {
    value: 50,
    suffix: "+",
    title: "Countries Served",
    description: "Global sourcing network across international markets",
    icon: Globe2,
  },
  {
    value: 500,
    suffix: "+",
    title: "Supplier Network",
    description: "Trusted manufacturers and supplier partnerships",
    icon: Building2,
  },
  {
    value: 1000,
    suffix: "+",
    title: "Products Sourced",
    description: "Industrial products and technical solutions",
    icon: PackageCheck,
  },
  {
    value: 24,
    suffix: "/7",
    title: "Procurement Support",
    description: "Dedicated assistance for urgent requirements",
    icon: Headset,
  },
];

function Counter({
  end,
  suffix,
}: {
  end: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;

    const duration = 1800;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <h3
      ref={ref}
      className="text-4xl md:text-5xl font-extrabold text-yellow-400"
    >
      {count}
      {suffix}
    </h3>
  );
}

export default function Stats() {
  return (
    <section className="bg-black py-24 px-5 sm:px-8 lg:px-6 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold">
            NORVEX IN NUMBERS
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Trusted Across Industries
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-yellow-500/20
                  bg-[#111]
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400
                  hover:shadow-[0_20px_50px_rgba(250,204,21,0.12)]
                "
              >

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10">

                  <Icon
                    size={34}
                    className="text-yellow-400 transition group-hover:scale-110"
                  />

                </div>

                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                />

                <h4 className="mt-4 text-xl font-bold">
                  {stat.title}
                </h4>

                <p className="mt-3 text-gray-400 leading-7">
                  {stat.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}