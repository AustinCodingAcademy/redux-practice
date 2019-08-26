import React from 'react';

class CurrentCity extends React.Component {
  state = {
    text: ""
  }
  componentDidMount() {
    let currentCity = store.getState().currentCity;
    this.setState({ text: currentCity });
    store.subscribe(() => {
      let currentCity = store.getState().currentCity;
      this.setState({ text: currentCity });
    })
  }

  render() {


    return (
      <div>
        CurrentCity: {this.state.text}
      </div>
    );
  }
}

export default CurrentCity;