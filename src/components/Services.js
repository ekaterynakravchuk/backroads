import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="our" second="services" />
      <div className="section-center services-center">
        {services.map((serv, index) => {
          return <Service key={index} {...serv} />;
        })}
      </div>
    </section>
  );
};

export default Services;
