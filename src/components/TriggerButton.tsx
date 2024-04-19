import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

interface TriggerButtonProps {
  isVisible: boolean;
  isMenuOpen: boolean;
  onClick: () => void;
}

const TriggerButton: React.FC<TriggerButtonProps> = ({
  isVisible,
  isMenuOpen,
  onClick,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onClick={onClick}
      style={{
        display: isVisible ? "block" : "none",
        height: isMobile ? "0px" : "600px", // Adjusted for mobile
        width: isMobile ? "0px" : "90px", // Adjusted for mobile
        backgroundImage: isMobile
          ? "transparent"
          : isMenuOpen
          ? 'url("/menu-bulge.svg")'
          : 'url("/menu-bulge-blk.svg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "fixed",
        top: isMobile ? "25px" : "50%", // Adjusted for mobile
        right: isMobile ? "35px" : "0",
        transform: isMobile ? "translateY(0)" : "translateY(-50%)", // Adjusted for mobile
        zIndex: 999,
      }}
    >
      <button
        onClick={onClick}
        style={{
          background: isMobile
            ? isMenuOpen
              ? "white"
              : "black"
            : "transparent",
          height: isMobile ? "30px" : "60px",
          width: isMobile ? "30px" : "60px",
          cursor: "pointer",
          color: isMenuOpen ? "black" : "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isMobile ? (
          isMenuOpen ? (
            <HiOutlineX />
          ) : (
            <HiMenuAlt3 />
          )
        ) : isMenuOpen ? (
          <Image
            src="/chevron-right.svg"
            alt="chevron-right"
            width={30}
            height={30}
            objectFit="contain"
          />
        ) : (
          <Image
            src="/chevron-left.svg"
            alt="chevron-left"
            width={30}
            height={30}
            objectFit="contain"
          />
        )}
      </button>
    </div>
  );
};

export default TriggerButton;
