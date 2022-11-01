import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import "./VideoHeader.css";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <div className="videoHeader__right">
        <SearchIcon />
      </div>
      <div className="videoHeader__left">
        <LiveTvIcon />
      </div>
    </div>
  );
}

export default VideoHeader;
