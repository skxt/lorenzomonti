"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#" },
    { name: "Services", href: "/#" },
  ];

  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-blue-100">
      <Logo />
      <ul className="max-md:hidden flex items-center gap-8 text-base">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:opacity-70 py-1">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="max-md:hidden border border-slate-950 hover:bg-slate-950 text-slate-950 transition duration-300 px-6 py-2.5 flex items-center gap-2 text-base">
        <ArrowDownRight height={24} width={24} /> Contattami
      </button>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="size-6" />
      </button>
      <div
        className={`flex flex-col items-center justify-center gap-6 text-base fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
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
