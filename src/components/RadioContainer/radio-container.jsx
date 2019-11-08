import React, { Component } from "react";
import "./radio-container.css";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import StationItem from "../StationItem/station-item";

class RadioContainer extends Component {
  state = {
    stations: [
      { name: "Putin FM", id: "66.6" },
      { name: "Dribble FM", id: "101.2" },
      { name: "Dodge FM", id: "99.4" },
      { name: "Ballads FM", id: "87.1" },
      { name: "Maximum FM", id: "142.2" }
    ],
    currentStation: { name: "", id: "" }
  };

  handleRadioSelected(currentStation) {
    this.setState({ currentStation });
  }

  clearSelectedStation = () => {
    const currentStation = { name: "", id: "" };
    this.setState({ currentStation });
  };

  render() {
    return (
      <div className="radio-container">
        <Header clearStation={this.clearSelectedStation} />
        <main>
          <ul className="stationsList">
            {this.state.stations.map(station => (
              <li key={station.id}>
                <StationItem
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
        <Footer station={this.state.currentStation.name} />
      </div>
    );
  }
}

export default RadioContainer;
