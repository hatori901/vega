import React from "react";
import Image from "next/image";

export default function Heart() {
  return (
    <div className="relative h-[119px] w-[140px] mx-auto">
      <Image
        src="/assets/heart.svg"
        fill
        className="relative animate-heart ease-in-out object-cover"
        alt=""
      />
      <div className="relative w-[60%] h-[60%] left-[20%] top-[20%]">
        <Image
          src="/assets/hand.svg"
          fill
          className="relative animate-hand ease-in-out object-contain"
          alt=""
        />
      </div>
    </div>
  );
}
