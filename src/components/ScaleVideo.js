import React from "react";
import store from "../store";

function ScaleVideo(props) {
  return (
    <div>
      Scale Video:{" "}
      <input
        onChange={e => {
          store.dispatch({ type: "SET_VIDEO_SCALE", value: e.target.value });
        }}
        type="range"
        min="1"
        max="10"
        step="1"
      />
    </div>
  );
}
export default ScaleVideo;
