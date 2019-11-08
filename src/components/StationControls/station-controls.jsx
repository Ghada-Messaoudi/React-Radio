import React, { Component } from "react";
import "./station-controls-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/fontawesome-free-solid";
import {Plus} from "../../assets/plus.png"

class StationControls extends Component {
  state = {};
  render() {
    return (
      <div className="station-controls">
        <button className="btn">
          <FontAwesomeIcon className="controls" icon={faMinusCircle} />
        </button>
        <img src="https://via.placeholder.com/100" className="placeholder-img" alt=""/>
        <button className="btn">
          {/* <img src={Plus} alt=""/> */}
          <FontAwesomeIcon className="controls" icon={faPlusCircle} />
        </button>
      </div>
    );
  }
}

export default StationControls;
