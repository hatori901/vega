import React from "react";
import Image from "next/image";

export default function Circle() {
  return (
    <div className="relative w-[119px] h-[119px] mx-auto">
      <Image src="/assets/circle.svg" alt="" fill className="object-cover" />
      <div className="absolute w-[35%] h-[40%] bottom-[7.5%] left-[32.5%] animate-person-1">
        <Image src="/assets/person.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute w-[35%] h-[40%] top-[7.5%] left-[10%] animate-person-2">
        <Image src="/assets/person.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute w-[35%] h-[40%] top-[7.5%] right-[10%] animate-person-3 ease-in-out">
        <Image src="/assets/person.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
