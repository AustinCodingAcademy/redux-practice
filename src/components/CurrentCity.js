import React from 'react';
import store from '../store';

class CurrentCity extends React.Component {
  state={
    text:""
  }

  componentDidMount() {
    store.subscribe(()=> {
      this.setState({text: store.getState().currentCity})
    })
  }

  render() {
    const {
      props,
    } = this;

    return (
        <div>
          CurrentCity: {this.state.text}
        </div>
    );
  }
}

export default CurrentCity;