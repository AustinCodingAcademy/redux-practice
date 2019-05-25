import React from 'react';

class SpecialText extends React.Component {
  constructor(props) {
    super(props);
  }
  state={text:""}
  render() {
    const {
      props,
    } = this;

    return (
        <div>
          Special Text: {this.state.text}
        </div>
    );
  }
}

export default SpecialText;