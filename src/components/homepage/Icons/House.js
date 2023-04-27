import React from "react";
import Image from "next/image";

export default function House() {
  return (
    <div className="relative w-[119px] h-[119px] mx-auto">
      <Image
        src="/assets/house.svg"
        alt=""
        fill
        className="object-cover"
        style={{ color: "red" }}
      />
      <div className="absolute w-[25%] h-[20%] top-[20%] left-[37.5%]">
        <Image
          src="/assets/window.svg"
          alt=""
          fill
          className="object-cover animate-window"
        />
      </div>
      <div className="absolute w-[25%] h-[30%] bottom-[10%] left-[37.5%]">
        <Image
          src="/assets/door.svg"
          alt=""
          fill
          className="object-cover animate-door"
        />
      </div>
    </div>
  );
}
