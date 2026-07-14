"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919740078445"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        group
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-full
          bg-[#25D366]
          px-5
          py-4
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_0_35px_rgba(37,211,102,0.5)]
        "
      >
        <MessageCircle
          size={28}
          className="text-white"
        />

        <span
          className="
            hidden
            lg:block
            text-white
            font-semibold
          "
        >
          WhatsApp
        </span>
      </div>

      {/* Ping Animation */}

      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-[#25D366]
          opacity-40
          animate-ping
          -z-10
        "
      />
    </a>
  );
}