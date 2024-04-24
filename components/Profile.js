import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  return (
    <header className="profile">
      <img
        className="profile--pic"
        src="../images/chad.jpg"
        alt="Profile Image of Chad Elofson"
      />
      <h1 className="profile--name">Chad Elofson</h1>
      <h2 className="profile--title">Fullstack Developer</h2>
      <p className="profile--site">
        <a href="https://chadelofson.dev" target="_blank">
          chadelofson.dev
        </a>
      </p>
      <section className="profile--connect">
        <a
          className="profile--email profile--link"
          href="mailto:chad@chadslab.net"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp; Email
        </a>
        <a
          className="profile--linkedin profile--link"
          href="https://www.linkedin.com/in/chadelofson/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          &nbsp;LinkedIn
        </a>
      </section>
    </header>
  );
}
