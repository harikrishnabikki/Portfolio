import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.calendar}
        className="icon-button calendar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-calendar-alt"></i>
        <span></span>
      </a>
      <a
        href={`tel:${socialMediaLinks.telephone}`}
        className="icon-button phone-alt"
      >
        <i className="fas fa-phone-alt"></i>
        <span></span>
      </a>
    </div>
  );
}

export default socialMedia;
