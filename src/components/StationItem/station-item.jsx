import React, { Component } from "react";
import './station-item-styles.css'
import StationControls from "../StationControls/station-controls";

class StationItem extends Component {
  state = {};

  handleStationSelection(station) {
    this.props.onRadioSelection(station);
  }

  render() {
    const { station } = this.props;
    return (
      <div className="item" onClick={() => this.handleStationSelection(station)}>
        {this.props.activeStation === station.id && <StationControls />}
        <div className="name">
          <div>{station.name}</div>
          <div><strong>{station.id}</strong></div>
        </div>
      </div>
    );
  }
}

export default StationItem;
