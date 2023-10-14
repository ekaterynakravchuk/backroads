import React from "react";

const PageLink = ({ linkClass, link }) => {
  const { href, text } = link;
  return (
    <li>
      <a href={href} rel="noreferrer" className={linkClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
