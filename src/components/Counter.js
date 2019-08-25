import React from 'react';
import store from "../store";

class Counter extends React.Component {
  
  state={count:0}

  componentDidMount(){
    let currentCount = store.getState().currentCount;
    this.setState({count:currentCount});
    store.subscribe(()=>{
      let currentCount = store.getState().currentCount;
      this.setState({count:currentCount});
    });
  }

  render() {
    return (
        <div>
          Counter: {this.state.count || "0"}
        </div>
    );
  }
}

export default Counter;