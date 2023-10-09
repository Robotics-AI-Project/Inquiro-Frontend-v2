import Image from "next/image";
import React from "react";

type Props = {};

function SideBar({}: Props) {
  return (
    <div className="flex flx-col justify-center items-start py-10 w-[288px]">
      <div className="flex justify-center items-center space-x-3">
        <Image
          src="/logo/inquiro.svg"
          alt="inquiro-logo"
          width={48}
          height={48}
        />
        <h1 className="text-3xl text-white font-bold">Inquiro</h1>
      </div>
    </div>
  );
}

export default SideBar;
