import React from 'react';
import store from '../store';

function VideoTextBox(props) {
  return (
      <div>
        Enter URL of YouTube video
        <input 
      onChange={(e)=>{
        store.dispatch({type:"SET_VIDEO_URL", value: e.target.value})
      }}
      type="text" />

      </div>
  );
}
export default VideoTextBox;