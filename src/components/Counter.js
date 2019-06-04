import React from 'react';
import store from '../store';

class Counter extends React.Component {
  
  state={count:0}

  componentDidMount() {
    store.subscribe(() => {
      let count = store.getState().currentCount;
      this.setState({count})
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