import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width={400} height={120} />
    </div>
  );
}
