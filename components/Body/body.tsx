import React from "react";

export interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function Body({ children, className }: BodyProps) {
  return (
    <main
      className={
        "w-full max-w-[1440px] h-full px-6 text-white mt-32 " + className
      }
    >
      {children}
    </main>
  );
}
