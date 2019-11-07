import React, { Component } from "react";
import "./radio-station.css";

class RadioStation extends Component {
  state = {};

  handleStationSelection(station) {
    this.props.onRadioSelection(station);
  }

  render() {
    const { station } = this.props;
    return (
      <div onClick={() => this.handleStationSelection(station)}>
        <div className="radioView">
          <div>{station.name}</div>
          <div>{station.id}</div>
        </div>
        {this.props.activeStation === station.id && <div>active station</div>}
      </div>
    );
  }
}

export default RadioStation;
