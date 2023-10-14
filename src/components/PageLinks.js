import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, linkClass, id }) => {
  return (
    <ul className={parentClass} id={id}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} linkClass={linkClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
