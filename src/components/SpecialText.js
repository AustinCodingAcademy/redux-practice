import React from 'react';
import store from '../store';

class SpecialText extends React.Component {
  state={text:""}

  componentDidMount() {
    store.subscribe(() => {
      let text = store.getState().specialText;
      this.setState({text});
    })
  }

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