import React from "react";
import DonutChart from "./ignore/DonutChart";

class Thermostat extends React.Component {
  state={temp:""}

  render() {
    const {
      props,
    } = this;

    return (<DonutChart value={this.state.temp || 23 } />)
  }
}

export default Thermostat;