import React, { Component } from "react";
import "./radio-container.css";
import RadioStation from "./radio-station/radio-station";
import backArrow from "../../assets/back-arrow.png";
import switchBtn from "../../assets/switch.png";

class RadioContainer extends Component {
  state = {
    stations: [
      { name: "Radio1", id: "1" },
      { name: "Radio2", id: "2" },
      { name: "Radio3", id: "3" },
      { name: "Radio4", id: "4" }
    ],
    currentStation: { name: "", id: "" }
  };

  handleRadioSelected(currentStation) {
    this.setState({ currentStation });
  }

  clearSelectedStation() {
    const currentStation = { name: "", id: "" };
    this.setState({ currentStation });
  }

  render() {
    return (
      <div className="radio-container">
        <header>
          <button className="btn">
            <img src={backArrow} alt="Back" />
          </button>
          <h1>STATIONS</h1>
          <button className="btn">
            <img
              src={switchBtn}
              alt="Switch"
              onClick={() => this.clearSelectedStation()}
            />
          </button>
        </header>
        <main>
          <ul className="stationsList">
            {this.state.stations.map(station => (
              <li key={station.id}>
                <RadioStation
                  station={station}
                  activeStation={this.state.currentStation.id}
                  onRadioSelection={currentStation =>
                    this.handleRadioSelected(currentStation)
                  }
                />
              </li>
            ))}
          </ul>
        </main>
        <footer>
            <h5>CURRENTLY PLAYING</h5>
          <h2>{this.state.currentStation.name}</h2>
        </footer>
      </div>
    );
  }
}

export default RadioContainer;
