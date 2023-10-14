import React from "react";

const SocialLink = ({ iconClass, href, text }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={iconClass}>
        {text}
      </a>
    </li>
  );
};

export default SocialLink;
