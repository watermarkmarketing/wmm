import React from "react";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import FooterLogo from "../../../public/footer-logo-grey.svg";

const ServiceFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-gray-400">
      <div className="container mx-auto px-6 pb-4 pt-8">
        <div className="flex flex-wrap flex-col justify-between items-center">
          <div className="w-full mb-6">
            <a href="/" className="flex flex-col items-center">
              <Image
                src={FooterLogo}
                alt="Watermark Experience"
                width={200}
                height={100}
              />
            </a>
          </div>

          <div className="w-full flex justify-center items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/watermark-experience/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-2 border border-gray-400 hover:text-cyan-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/watermarkmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-2 border border-gray-400 hover:text-cyan-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/Watermark_Ind"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-2 border border-gray-400 hover:text-cyan-500"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/watermarkmarketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-2 border border-gray-400 hover:text-cyan-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Watermarkmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-2 border border-gray-400 hover:text-cyan-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-6 barlow-regular">
          © 2024 Watermark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ServiceFooter;
