import React from 'react';
import store from '../store';

class Counter extends React.Component {
  state={count:0}
  componentDidMount() {
    store.subscribe(()=> {
      this.setState({count: store.getState().currentCount})
    })
  }

  render() {
    const {
      props,
    } = this;

    return (
        <div>
          Counter: {this.state.count}
        </div>
    );
  }
}

export default Counter;