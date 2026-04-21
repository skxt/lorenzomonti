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
    { name: "Esperienze", href: "/#experience" },
  ];

  return (
    <div className="flex fixed top-0 left-0 right-0 z-50 bg-blue-50 items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-blue-100">
      <Logo themeColor="light" />
      <ul className="max-md:hidden flex items-center gap-8 text-base">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:opacity-70 py-1">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="size-6" />
      </button>
      <div
        className={`flex flex-col items-center justify-center gap-6 text-base fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button onClick={() => setIsOpen(false)}>
          <XIcon className="size-6" />
        </button>
      </div>
    </div>
  );
};
