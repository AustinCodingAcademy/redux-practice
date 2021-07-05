import React from "react";
import DonutChart from "./ignore/DonutChart";
import store from "../store";

class Thermostat extends React.Component {
  state = { temp: "" };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ temp: store.getState().currentTemp });
    });
  }

  render() {
    const { props } = this;

    return <DonutChart value={this.state.temp || 23} />;
  }
}

export default Thermostat;
