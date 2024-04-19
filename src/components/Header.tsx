// components/Header.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-white px-4 pt-2 pb-2 sm:px-10 sm:pt-4 sm:pb-0">
      <div className="container flex justify-start">
        <Link href="/" passHref className=" w-20 md:w-40 flex items-center">
          <Image
            src="/logo-light.svg"
            alt="watermarkexperience"
            width={160}
            height={64}
            layout="intrinsic"
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
