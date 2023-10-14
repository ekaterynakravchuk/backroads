import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, iconClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link, index) => {
        return <SocialLink key={index} {...link} iconClass={iconClass} />;
      })}
    </ul>
  );
};

export default SocialLinks;
