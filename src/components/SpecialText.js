import React from 'react';

class SpecialText extends React.Component {
  state = { text: "" }
  componentDidMount() {
    store.subscribe(() => {
      let specialText = store.getState().specialText;
      this.setState({ text: specialText })
    })
  }
  render() {
    return (
      <div>
        Special Text: {this.state.text || "Message"}
      </div>
    );
  }
}

export default SpecialText;