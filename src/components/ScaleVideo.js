import React from 'react';

function ScaleVideo(props) {
  return (
      <div>
        Scale Video: <input
        onChange={
          (e)=>{
            
          }
        }
         type="range" min="1" max="10" step="1" />
      </div>
  );
}
export default ScaleVideo;