"use client";

import { useEffect, useRef, useState } from "react";
import {
  Globe2,
  Building2,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: 50,
    suffix: "+",
    title: "Countries Reached",
    description:
      "Supporting procurement requirements across international markets.",
    icon: Globe2,
  },
  {
    value: 500,
    suffix: "+",
    title: "Global Suppliers",
    description:
      "Strong network of OEMs, manufacturers and industrial suppliers.",
    icon: Building2,
  },
  {
    value: 1000,
    suffix: "+",
    title: "Products Sourced",
    description:
      "Mechanical, electrical, safety and industrial equipment.",
    icon: PackageCheck,
  },
  {
    value: 100,
    suffix: "%",
    title: "Commitment",
    description:
      "Quality-driven sourcing with responsive customer support.",
    icon: ShieldCheck,
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
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(end / 40);

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 35);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <h3
      ref={ref}
      className="mt-5 text-5xl font-black text-[#123E63]"
    >
      {count}
      {suffix}
    </h3>
  );
}

export default function Stats() {
  return (
    <section className="relative -mt-20 z-20 px-6 pb-24">

      <div className="mx-auto max-w-7xl">

        <div className="rounded-[40px] bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,.08)] lg:p-14">

          <div className="mb-14 text-center">

            <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0E8F66]">
              NORVEX AT A GLANCE
            </span>

            <h2 className="mt-6 text-4xl font-black text-[#123E63] lg:text-5xl">
              Procurement Powered by Global Connections
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              We simplify industrial procurement through a trusted network
              of suppliers, manufacturers and sourcing partners worldwide.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#0E8F66] hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123E63]/10">

                    <Icon
                      size={30}
                      className="text-[#123E63] transition group-hover:text-[#0E8F66]"
                    />

                  </div>

                  <Counter
                    end={item.value}
                    suffix={item.suffix}
                  />

                  <h3 className="mt-4 text-xl font-bold text-[#123E63]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}