"use client";

import React from "react";
import { useParams } from "next/navigation";
import ServiceBanner from "@/components/Service/ServiceBanner";
import ServiceFooter from "@/components/Service/ServiceFooter";
import { serviceData } from "@/utils/data/serviceData";
import CustomerSuccess from "@/components/Service/CustomerSuccess";
import PlanningStrategy from "@/components/Service/PlanningStrategy";
import ContentCreative from "@/components/Service/ContentCreative";
import DatabaseContact from "@/components/Service/DatabaseContact";
import Experiential from "@/components/Service/Experiential";
import WMDigital from "@/components/Service/WMDigital";

const ServiceSlugPage: React.FC = () => {
  const router = useParams();
  const slug = router.slug;

  const title = slug
    ? slug
        .toString()
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Default Title";

  const service = serviceData[title] || serviceData["Default Title"];

  return (
    <>
      <ServiceBanner title={title === "Wm Digital" ? "WM Digital" : title} desc={service.desc} />
      {title === "Customer Success" && (
        <CustomerSuccess
          content={service.content}
          videoUrl={service.videoUrl}
        />
      )}
      {title === "Planning And Strategy" && (
        <PlanningStrategy
          content={service.content}
          imageUrl={service.imageUrl}
        />
      )}
      {title === "Content And Creative" && (
        <ContentCreative
          content={service.content}
        />
      )}
      {title === "Experiential And Events" && <Experiential />}
      {title === "Database And Contact Centre Management" && (
        <DatabaseContact />
      )}
      {title === "Wm Digital" && <WMDigital content={service.content} />}
      <ServiceFooter />
    </>
  );
};

export default ServiceSlugPage;
