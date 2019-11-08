import React, { Component } from "react";
import "./header-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faChevronLeft } from "@fortawesome/fontawesome-free-solid";

class Header extends Component {
  state = {};

  render() {
    return (
      <header>
        <button className="btn">
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </button>
        <h3>Stations</h3>
        <button className="btn">
          <FontAwesomeIcon className="icon" icon={faPowerOff} />
        </button>
      </header>
    );
  }
}

export default Header;
