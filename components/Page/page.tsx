import React from "react";

export interface PageProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function Page({ children, title = "", subtitle }: PageProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-[40px] text-center text-white font-semibold mb-12 uppercase">
        {title}
      </h1>
      {subtitle && subtitle !== "" && (
        <h2 className="font-serif text-4xl text-center text-white font-bold w-full max-w-6xl mx-auto">
          {subtitle}
        </h2>
      )}

      {children}
    </div>
  );
}
