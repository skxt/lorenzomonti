"use client";

import Link from "next/link";

export const Logo = () => {
    return (
      <Link href="/" className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          <span className="text-slate-400 font-light">Dr. Lorenzo </span><span className="text-primary font-bold">Monti</span>
        </h2>
      </Link>
    );
};