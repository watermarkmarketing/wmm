"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
// import Banner2 from "@/components/Banner2";
import Header from "@/components/Header";
import FullScreenMediaSection from "@/components/FullScreenMediaSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectDisplayGrid from "@/components/ProjectDisplayGrid";
import ClientLogoScroll from "@/components/ClientLogoScroll";
import MenuDrawer from "@/components/MenuDrawer";
import TriggerButton from "@/components/TriggerButton";
import Footer from "@/components/Footer";

const servicesData = [
  {
    title: "Content & Creative",
    iconSrc: "/content.svg",
    iconSrcBlk: "/content-black.svg",
    link: "/service/content-and-creative",
  },
  {
    title: "Planning and Strategy",
    iconSrc: "/planning.svg",
    iconSrcBlk: "/planning-black.svg",
    link: "/service/planning-and-strategy",
  },
  {
    title: "Customer Success",
    iconSrc: "/customer.svg",
    iconSrcBlk: "/customer-black.svg",
    link: "/service/customer-success",
  },
  {
    title: "Database And Contact Centre Management",
    iconSrc: "/database.svg",
    iconSrcBlk: "/database-black.svg",
    link: "/service/database-and-contact-centre-management",
  },
  {
    title: "Experiential And Events",
    iconSrc: "/experiential.svg",
    iconSrcBlk: "/experiential-black.svg",
    link: "/service/experiential-and-events",
  },
  {
    title: "WMDigital",
    iconSrc: "/wmdigital.svg",
    iconSrcBlk: "/wmdigital-black.svg",
    link: "/service/wm-digital",
  },
];

export default function Home() {
  const [isTriggerVisible, setTriggerVisible] = useState<boolean>(false);
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);
  const bannerHeight = 500;

  useEffect(() => {
    const handleScroll = () => {
      const isBannerVisible = window.scrollY < bannerHeight;
      setTriggerVisible(isBannerVisible);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const threshold = window.innerWidth - 50;
      if (!isMenuVisible && e.clientX > threshold) {
        setTriggerVisible(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMenuVisible]);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  return (
    <>
      <Header />
      <TriggerButton
        isVisible={isTriggerVisible}
        isMenuOpen={isMenuVisible}
        onClick={toggleMenu}
      />
      <MenuDrawer isVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <Banner />
      {/* <Banner2 /> */}
      <FullScreenMediaSection
        title="The simplest can often be the most surprising"
        description="We believe in the need to be different.It’s the way we work and live."
        mediaUrl="https://registrationexpress.in/Watermark_Animation_Videos/Pac_man_2d_motion_.mp4"
        backgroundColor="bg-neutral-200"
        mediaLeft={false}
        isPacVideo={true}
      />
      <FullScreenMediaSection
        title="The world changes and so does your brand"
        description="We work our way around it;strategizing, designing and executing."
        mediaUrl="https://registrationexpress.in/Watermark_Animation_Videos/mushroom_annimation_for_web_2.mp4"
        backgroundColor="bg-white"
        mediaLeft={true}
        isPacVideo={false}
      />
      <ServicesSection services={servicesData} />
      <ProjectDisplayGrid />
      <ClientLogoScroll />
      <Footer />
    </>
  );
}
