import React from 'react';

class Counter extends React.Component {
  
  state={count:0}
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