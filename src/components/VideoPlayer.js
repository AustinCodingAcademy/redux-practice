import React from 'react';
import store from "../store";

class VideoPlayer extends React.Component {
  state={scale:0,URL:""}

  componentDidMount(){
    store.subscribe(()=>{
      const videoURL = store.getState().videoURL;
      const videoScale = store.getState().videoScale;
      this.setState({URL:videoURL,scale:videoScale});
    });
  }

  render() {
    let width = 200;
    let height = 200;
    if(this.state.scale){
      width = 200 * this.state.scale;
      height = 200 * this.state.scale;
    }
    return (
        <div><iframe title="YouTube video player"  type="text/html" 
        width={width} height={height} src={this.state.URL}
        frameBorder="0" allowFullScreen></iframe></div>
    );
  }
}

export default VideoPlayer;