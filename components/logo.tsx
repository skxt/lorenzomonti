"use client";

import Link from "next/link";

export const Logo = ({
  themeColor = "light",
}: {
  themeColor: "light" | "white";
}) => {
  return (
    <Link href="/" className={`flex items-center gap-2`}>
      <h2 className="text-2xl font-semibold tracking-tight">
        <span
          className={`${themeColor === "light" ? "text-slate-400" : "text-white"} font-light`}
        >
          Dr. Lorenzo{" "}
        </span>
        <span
          className={`${themeColor === "light" ? "text-primary" : "text-white"} font-bold`}
        >
          Monti
        </span>
      </h2>
    </Link>
  );
};
