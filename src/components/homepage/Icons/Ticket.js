import React from "react";
import Image from "next/image";

export default function Ticket() {
  return (
    <div className="relative flex w-[174px] h-[97px] overflow-hidden mx-auto">
      <Image
        src="/assets/ticket.svg"
        width={174}
        height={97}
        className="animate-ticket ease-in-out"
        alt=""
      />
      <Image
        src="/assets/ticket.svg"
        width={174}
        height={97}
        className="animate-ticket ease-in-out"
        alt=""
      />
    </div>
  );
}
