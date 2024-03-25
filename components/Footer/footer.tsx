import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "../Icons/icons";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={"w-full max-w-7xl px-6 mt-auto " + className}>
      <div className="flex items-center justify-between py-6">
        <p className="text-white text-sm font-light">© 2024</p>

        <div className="flex gap-3 text-white text-sm font-light [&>a>*]:transition-colors [&>a>*]:duration-300">
          <Link
            href="https://github.com/wendel-nogueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon props={{ className: "hover:text-orange-500" }} />
          </Link>
          <Link
            href="https://linkedin.com/in/wendelnogueira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon props={{ className: "hover:text-orange-500" }} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
