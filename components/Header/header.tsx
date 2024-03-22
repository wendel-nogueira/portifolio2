import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-7xl my-20 flex items-center justify-between px-6">
      <div className="text-2xl font-serif font-bold text-white hover:text-blue-500 transition-colors duration-300">
        <Link href="/">home</Link>
      </div>
      <nav>
        <ul className="flex items-center gap-12 text-2xl font-serif font-bold text-white">
          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link href="/about">about</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link href="/projects">projects</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors duration-300">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
