"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Chi sono", href: "/#about" },
    { name: "Competenze", href: "/#services" },
    { name: "Dove opero", href: "/#where" },
    { name: "Attività", href: "/#activity" },
  ];

  return (
    <div className="flex fixed top-0 left-0 right-0 z-50 bg-blue-50 items-center justify-between px-6 lg:px-16 xl:px-24 2xl:px-32 py-4 border-b border-blue-100">
      <Logo themeColor="light" />
      <ul className="max-lg:hidden flex items-center gap-8 text-base">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:opacity-70 py-1">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="size-6" />
      </button>
      <div
        className={`flex flex-col items-center justify-center gap-8 fixed inset-0 z-50 bg-black/95 backdrop-blur-md transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2"
          aria-label="Chiudi menu"
        >
          <XIcon className="size-8" />
        </button>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors text-2xl font-light tracking-wide py-2"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
