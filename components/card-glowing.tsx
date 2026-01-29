"use client";
import React from "react";
import Image from "next/image";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "./icons";

export const CardGlowing = () => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = divRef?.current?.getBoundingClientRect();
    if (!bounds) return;
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="relative w-90 h-110 p-px bg-slate-100 backdrop-blur-md text-gray-800 overflow-hidden"
      >
        <div
          className={`pointer-events-none blur-3xl bg-linear-to-r from-primary via-primary/50 to-primary/10 size-60 absolute z-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ top: position.y - 120, left: position.x - 120 }}
        />

        <div className="relative z-10 bg-slate-100 p-6 h-full w-full flex flex-col gap-3 items-center justify-center text-center">
          <Image
            width={200}
            height={200}
            src="/avatar.webp"
            alt="Profile Avatar"
            className="w-36 h-36 rounded-full shadow-md my-4 object-cover"
          />
          <h2 className="text-2xl font-base text-slate-600 mb-1">
            Dr. Lorenzo Monti
          </h2>
          {/* <p className="text-sm text-primary font-medium mb-4">
            Chirurgo Ortopedico e Traumatologo
          </p> */}
          <p className="text-sm text-slate-400 mb-4 px-4">
            Specialista in Chirurgia Protesica Mininvasiva e Robotica di Anca e Ginocchio.
          </p>
          <div className="flex space-x-6 mb-4 text-xl text-slate-400">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              className="hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <a
              href="tel:+390000000000"
              className="hover:text-primary transition-colors"
              aria-label="Telefono"
            >
              <PhoneIcon className="size-5" />
            </a>
            <a
              href="mailto:info@lorenzomonti.it"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <MailIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
