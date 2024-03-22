import React from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-14 text-center">
      <p className="text-5xl font-extrabold">
        HI<span className="font-medium">! MY NAME IS</span>
      </p>
      <h1 className="text-[150px] leading-[0.7] font-bold font-serif">
        Wendel <br /> Nogueira
      </h1>
      <p className="w-full max-w-3xl font-bold text-xl mt-6">
        Always learning new technologies, fascinated by solving bugs, developing
        new softwares and creating wonderful experiences. I am a Front End
        Developer who&apos;s very enthusiast with Full Stack, with huge love for
        Flutter/Dart, NextJs, but also loves JavaScript.
      </p>
    </div>
  );
}
