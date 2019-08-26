import React from 'react';
import store from "../store";

class CurrentCity extends React.Component {
  state={
    text:""
  }

  componentDidMount(){
    let currentCity = store.getState().currentCity;
    this.setState({text:currentCity});
    store.subscribe(()=>{
    let currentCity = store.getState().currentCity;
    this.setState({text:currentCity});
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