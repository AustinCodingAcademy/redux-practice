import React from 'react';

class CurrentCity extends React.Component {
  state={
    text:""
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