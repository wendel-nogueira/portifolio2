import React from "react";
import Page from "@/components/Page/page";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/Icons/icons";

export default function Contact() {
  return (
    <Page title="contact" subtitle="Let's keep in touch.">
      <div className="w-full flex flex-col items-center mt-4">
        <Link href="mailto:wendelnogueira@unifei.edu.br">
          wendelnogueira@unifei.edu.br
        </Link>

        <div className="flex gap-6 text-white text-sm font-light [&>a>*]:transition-colors [&>a>*]:duration-300 mt-8">
          <Link
            href="https://github.com/wendel-nogueira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              width={40}
              height={40}
              props={{ className: "hover:text-orange-500" }}
            />
          </Link>
          <Link
            href="https://linkedin.com/in/wendelnogueira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon
              width={40}
              height={40}
              props={{ className: "hover:text-orange-500" }}
            />
          </Link>
        </div>
      </div>
    </Page>
  );
}
