"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [linkActive, setLinkActive] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== null) setLinkActive(pathname);
  }, [pathname]);

  return (
    <header
      className={
        "w-full max-w-7xl my-20 flex items-center justify-between px-6 text-2xl font-serif font-bold text-white [&>*]:transition-colors [&>*]:duration-300 " +
        className
      }
    >
      <div
        className={`hover:text-orange-500 ${
          linkActive === "/" ? "text-orange-500" : ""
        }`}
      >
        <Link href="/">home</Link>
      </div>
      <nav>
        <ul className="flex items-center gap-12 [&>*]transition-colors [&>*]:duration-300">
          <li
            className={`hover:text-orange-500 ${
              linkActive === "/about" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/about">about</Link>
          </li>
          <li
            className={`hover:text-orange-500 ${
              linkActive === "/projects" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/projects">projects</Link>
          </li>
          <li
            className={`hover:text-orange-500 ${
              linkActive === "/contact" ? "text-orange-500" : ""
            }`}
          >
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
