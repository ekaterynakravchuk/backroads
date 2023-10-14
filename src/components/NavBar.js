import { React } from "react";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
          {/*
        <!-- left this comment on purpose --> */}
          <PageLinks
            id="#nav-links"
            parentClass="nav-links"
            linkClass="nav-link"
          />
          <SocialLinks parentClass="nav-icons" iconClass="nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
