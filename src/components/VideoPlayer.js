import React from 'react';

class VideoPlayer extends React.Component {
  state={scale:0,URL:""}

  render() {
    const {
      props,
    } = this;

    let width = 200;
    let height = 200;
    if(this.state.scale){
      width = 200 * props.scale;
      height = 200 * props.scale;
    }
    return (
        <div><iframe title="YouTube video player"  type="text/html" 
        width={width} height={height} src={this.state.URL}
        frameBorder="0" allowFullScreen></iframe></div>
    );
  }
}

export default VideoPlayer;