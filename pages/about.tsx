import React from "react";
import Page from "@/components/Page/page";

export default function About() {
  return (
    <Page
      title="about"
      subtitle="A frontend developer who loves learning new technologies. 
    GM in my spare time, RPGs and games are my everything."
    >
      <div className="w-full flex flex-wrap gap-x-20 gap-y-10 justify-between items-center text-base font-light text-white text-justify mt-24">
        <p className="max-w-xl mx-auto xl:mx-0">
          I have almost 4 years of development experience, studying Information
          Systems in the Federal University of Itajubá, on the south of Minas
          Gerais, Brasil.
        </p>
        <p className="max-w-xl mx-auto xl:mx-0">
          Currently, I&apos;m working on projects on my own and finishing my
          bachelor degree. I have a lot of experiences, such as HTML, CSS,
          JavaScript, TypeScript, Dart, Flutter, Angular, Express, NodeJs,
          MySQL, Firebase, PHP, git, Figma, Serverless and more.
        </p>
        <p className="max-w-xl mx-auto xl:mx-0">
          I have two internships, those taught me about Flutter/Dart, wich is
          one of my passions. I&apos;ve learned also JavaScript, TypeScript,
          PHP, and other technologies.
        </p>
      </div>
    </Page>
  );
}
