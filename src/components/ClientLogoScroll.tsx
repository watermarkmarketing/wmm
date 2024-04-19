// components/ClientLogoScroll.tsx
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ClientLogoProps {
  src: string;
  alt: string;
}

const clientLogos: ClientLogoProps[] = [
  {
    src: "/client-logos/3ds-dassault-systemes.svg",
    alt: "3ds",
  },
  {
    src: "/client-logos/3m.svg",
    alt: "3m",
  },
  {
    src: "/client-logos/aditya-birla-group.svg",
    alt: "adithya birla",
  },
  {
    src: "/client-logos/adobe.svg",
    alt: "adobe",
  },
  {
    src: "/client-logos/aten.svg",
    alt: "aten",
  },
  {
    src: "/client-logos/ather.svg",
    alt: "ather",
  },
  {
    src: "/client-logos/autodesk.svg",
    alt: "autodesk",
  },
  {
    src: "/client-logos/avaya.svg",
    alt: "avaya",
  },
  {
    src: "/client-logos/aws.svg",
    alt: "aws",
  },
  {
    src: "/client-logos/check-point.svg",
    alt: "check point",
  },
  {
    src: "/client-logos/cisco.svg",
    alt: "cisco",
  },
  {
    src: "/client-logos/citrix.svg",
    alt: "citrix",
  },
  {
    src: "/client-logos/crestron.svg",
    alt: "crestron",
  },
  {
    src: "/client-logos/crif.svg",
    alt: "crif",
  },
  {
    src: "/client-logos/Dell.svg",
    alt: "dell",
  },
  {
    src: "/client-logos/google-cloud.svg",
    alt: "google cloud",
  },
  {
    src: "/client-logos/harman.svg",
    alt: "harman",
  },
  {
    src: "/client-logos/hp.svg",
    alt: "hp",
  },
  {
    src: "/client-logos/intel.svg",
    alt: "intel",
  },
  {
    src: "/client-logos/Microsoft.svg",
    alt: "microsoft",
  },
  {
    src: "/client-logos/natmagic.svg",
    alt: "natmagic",
  },
  {
    src: "/client-logos/pg.svg",
    alt: "pg",
  },
  {
    src: "/client-logos/ptc.svg",
    alt: "ptc",
  },
  {
    src: "/client-logos/qsc.svg",
    alt: "qsc",
  },
  {
    src: "/client-logos/quest.svg",
    alt: "quest",
  },
  {
    src: "/client-logos/ramco.svg",
    alt: "ramco",
  },
  {
    src: "/client-logos/redington.svg",
    alt: "redington",
  },
  {
    src: "/client-logos/salesforce.svg",
    alt: "salesforce",
  },
  {
    src: "/client-logos/samsung.svg",
    alt: "samsung",
  },
  {
    src: "/client-logos/sap.svg",
    alt: "sap",
  },
  {
    src: "/client-logos/sas.svg",
    alt: "sas",
  },
  {
    src: "/client-logos/ServiceNow.svg",
    alt: "service now",
  },
  {
    src: "/client-logos/sonata.svg",
    alt: "sonata",
  },
  {
    src: "/client-logos/tally.svg",
    alt: "tally",
  },
  {
    src: "/client-logos/tata-communications.svg",
    alt: "tata communication",
  },
  {
    src: "/client-logos/trend-micro.svg",
    alt: "trend micro",
  },
  {
    src: "/client-logos/UiPath.svg",
    alt: "ui path",
  },
];

const ClientLogoScroll: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="bg-[#323335] text-white py-6 px-4">
      <div className="container flex flex-col md:flex-row justify-center items-center text-wm-light-grey mx-auto">
        <div className="w-full md:w-3/12 md:border-r md:border-r-wm-light-grey pr-4">
          <h2 className="text-4xl md:text-section-title md:leading-section-title font-light mb-2">
            See who <br />
            <span className="font-bold">we work</span> with
          </h2>
          <p className="text-lg md:text-desc md:leading-desc barlow-extralight">
            Happy customers, keep <br />
            coming back for more.
          </p>
        </div>
        <div className="w-full h-full md:w-9/12 px-4">
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            showDots={false}
            itemClass="px-2 w-fit h-full flex justify-center items-center"
          >
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center h-14 w-fit items-center"
              >
                <div className="flex justify-center items-center h-full max-w-36">
                  <img src={logo.src} alt={logo.alt} className="h-10" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoScroll;
