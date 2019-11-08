import React from "react";
import "./footer-styles.css"

const Footer = props => {
  return (
    <footer>
      {props.station && <p className="title">CURRENTLY PLAYING</p>}
      <p className="currentStation">{props.station}</p>
    </footer>
  );
};

export default Footer;
