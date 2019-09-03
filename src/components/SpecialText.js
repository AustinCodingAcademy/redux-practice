import React from 'react';
import store from '../store';

class SpecialText extends React.Component {
  state={text:""}

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        text: store.getState().specialText
      });
    });
  }

  render() {
    return (
        <div>
          Special Text: {this.state.text}
        </div>
    );
  }
}

export default SpecialText;