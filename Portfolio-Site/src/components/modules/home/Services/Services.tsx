"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import ServiceCard from "./ServiceCard";
import Container from "@/src/components/layout/Container";
import Title from "@/src/components/shared/Title";
import { IService } from "@/src/types/service.type";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("services.json").then((res) => {
      setServices(res.data);
    });
  }, []);

  //setting the title
  const title = {
    mainTitle: "Services",
    subTitle1: "Services",
    subTitle2: "Service List",
  };

  return (
    <Container>
      <div className="h-fit py-10 my-10">
        <Title title={title} align={"m"} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-10">
          {services.map((service: IService) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
