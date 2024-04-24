import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/chadelofson" target="_blank">
        <FontAwesomeIcon className="icon" icon={faSquareTwitter} />
      </a>
      <a href="https://www.facebook.com/chadelofson" target="_blank">
        <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
      </a>
      <a href="https://github.com/chadelofson" target="_blank">
        <FontAwesomeIcon className="icon" icon={faSquareGithub} />
      </a>
    </footer>
  );
}
