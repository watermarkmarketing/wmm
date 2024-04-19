// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col justify-center items-center bg-wm-grey text-wm-footer-heading-grey pt-8 px-4"
    >
      <div className=" w-full max-w-[980px] flex flex-col items-center justify-center text-center py-8 border-b border-b-wm-light-grey">
        <h2 className="w-fit text-4xl md:text-section-title md:leading-section-title barlow-extralight">
          We are in the business of building relationships.
        </h2>
        <p className="mt-4 w-fit text-3xl md:text-section-title md:leading-section-title font-normal">
          Let us work together.
        </p>
      </div>
      <div className="w-full max-w-[980px] py-8 ">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-icon leading-icon barlow-extralight text-wm-footer-title-grey">
              Want to collaborate?
            </h3>
            <p className="mt-6 mb-2 barlow-light text-icon leading-icon">
              Work with us
            </p>
            <a
              href="mailto:contact@watermarkexperience.com"
              className="text-icon leading-icon barlow-regular text-wm-footer-desc-grey"
            >
              contact@watermarkexperience.com
            </a>
            <div className="border-b border-b-wm-light-grey my-8"></div>

            <h3 className="text-icon leading-icon barlow-extralight text-wm-footer-title-grey">
              Want to join us?
            </h3>
            <p className="mt-6 mb-2 barlow-light text-icon leading-icon">
              Become a watermarker
            </p>
            <a
              href="/careers"
              className="text-icon leading-icon barlow-light text-wm-footer-desc-grey"
            >
              Apply here
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-icon leading-icon barlow-extralight text-wm-footer-title-grey">
              Want to say hi?
            </h3>
            <p className="mt-6 mb-2 barlow-light text-icon leading-icon">
              General enquiries
            </p>
            <a
              href="mailto:hello@watermarkexperience.com"
              className="text-icon leading-icon barlow-light text-wm-footer-desc-grey"
            >
              hello@watermarkexperience.com
            </a>
            <div className="border-b border-b-wm-light-grey my-8"></div>

            <h3 className="text-icon leading-icon barlow-extrealight text-wm-footer-title-grey">
              Want to learn?
            </h3>
            <p className="mt-6 mb-2 barlow-light text-icon leading-icon">
              Become an intern
            </p>
            <a
              href="/internships"
              className="text-icon leading-icon barlow-light text-wm-footer-desc-grey"
            >
              Apply here
            </a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[980px] mx-auto py-8 ">
        <h3 className="text-icon leading-icon mx-auto barlow-regular mb-4">
          Watermark Marketing Pvt. Ltd.
        </h3>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Address Item */}
          <div>
            <h4 className="mb-2 text-icon leading-icon barlow-regular">
              Bengaluru
            </h4>
            <address className="text-button leading-button barlow-extralight not-italic">
              No. 33 & 33/1, 2nd Floor
              <br />
              KR Colony
              <br />
              Domlur Layout
              <br />
              Bangalore - 560 071
            </address>
          </div>
          <div>
            <h4 className="mb-2 text-icon leading-icon barlow-regular">
              Delhi
            </h4>
            <address className="text-button leading-button barlow-extralight not-italic">
              C-106, First Floor,
              <br />
              Sector 2,
              <br />
              Gautam Budh Nagar, Noida,
              <br />
              Uttar Pradesh – 201
            </address>
          </div>
          <div>
            <h4 className="mb-2 text-icon leading-icon barlow-regular">
              Mumbai
            </h4>
            <address className="text-button leading-button barlow-extralight not-italic">
              147, Express Zone,
              <br />
              Western Express Highway, <br />
              Kandivali, Mumbai Suburban,
              <br />
              Maharashtra, 400 063
            </address>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[980px] mx-auto ">
        <div className="text-icon leading-icon barlow-regular mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <h3>Partner Offices</h3>
          <p>Chennai</p>
          <p>Hyderabad</p>
        </div>
      </div>
      <div className="w-full max-w-[980px] mx-auto  py-6">
        <div className="max-w-6xl mx-auto col-span-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="flex justify-center">
              <Link
                href="https://www.facebook.com/watermarkmarketing"
                className="bg-black rounded-full p-4 mr-2 hover:text-cyan-500"
              >
                <FaFacebookF />
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://www.linkedin.com/company/watermark-experience/"
                className="bg-black rounded-full p-4 mr-2 hover:text-cyan-500"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://twitter.com/Watermark_Ind"
                className="bg-black rounded-full p-4 mr-2 hover:text-cyan-500"
              >
                <FaXTwitter />
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://www.instagram.com/watermarkmarketing/"
                className="bg-black rounded-full p-4 mr-2 hover:text-cyan-500"
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://www.youtube.com/@Watermarkmarketing"
                className="bg-black rounded-full p-4 hover:text-cyan-500"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <Image
            src="/winkoo-minkoo.svg"
            alt="Mascots"
            width={200}
            height={110}
            className="mb-6 md:mb-0"
          />
          <Image
            src="https://watermarkexperience.in/wp-content/uploads/2023/10/footer.png"
            alt="Logo"
            width={150}
            height={90}
            className="mr-0 md:mr-4 mb-6 md:mb-0"
          />
          <Image
            src="/wai-logo.svg"
            alt="Logo"
            width={150}
            height={90}
            className="mb-2 md:mb-0"
          />
        </div>
      </div>

      <div className="relative max-w-screen-xl pt-4 h-14 md:pt-0 md:px-4 w-full flex flex-col md:flex-row justify-between items-center">
        <Link
          href="https://www.watermarkexperience.com/"
          className="barlow-extralight text-copyright leading-copyright hover:text-cyan-300"
        >
          &copy; 2024 - watermarkexperience.com. All rights reserved
        </Link>
        <div
          className="hidden absolute bottom-0 inset-0 md:flex justify-center items-center"
          style={{
            backgroundImage: 'url("/back-to-top-bulge.svg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Link
            href="#"
            className="px-6 text-button barlow-light leading-icon focus:outline-none"
          >
            Back to top
          </Link>
        </div>
        <Link
          href="https://www.watermarkexperience.com/privacy_policy.html"
          className="barlow-extralight text-copyright leading-copyright hover:text-cyan-300"
        >
          Privacy & Policy
        </Link>
        <div
          className="md:hidden absolute bottom-0 inset-0 flex justify-center items-center"
          style={{
            backgroundImage: 'url("/back-to-top-bulge.svg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Link
            href="#"
            className="px-6 text-button barlow-light leading-icon focus:outline-none"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
