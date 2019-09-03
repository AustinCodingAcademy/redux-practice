import React from 'react';
import store from '../store'

class CurrentCity extends React.Component {
  state={
    text:""
  }
  componentDidMount(){
    this.setState({
      text: store.getState().currentCity
    });
    store.subscribe(()=>{
      this.setState({
        text: store.getState().currentCity
      })
    })
  }
  render() {
    return (
        <div>
          CurrentCity: {this.state.text || "Austin"}
        </div>
    );
  }
}

export default CurrentCity;