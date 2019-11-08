import React, { Component } from "react";
import "./header-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faChevronLeft } from "@fortawesome/fontawesome-free-solid";

class Header extends Component {
  state = {};

  clearSelected() {
    this.props.clearStation();
  }

  render() {
    return (
      <header>
        <button className="btn">
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </button>
        <h3>Stations</h3>
        <button className="btn">
          <FontAwesomeIcon onClick={() => this.clearSelected()} className="icon" icon={faPowerOff} />
        </button>
      </header>
    );
  }
}

export default Header;
