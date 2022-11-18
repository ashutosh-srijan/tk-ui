import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import "./VideoSidebar.css";
import { Avatar } from "@material-ui/core";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <Avatar />
        <p>Profile</p>
      </div>
      <div className="videoSidebar__button">
        {liked ? (
          <MdFavorite size="2em" onClick={(e) => setLiked(false)} />
        ) : (
          <MdFavoriteBorder size="2em" onClick={(e) => setLiked(true)} />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <FaCommentDots size="2em" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <FaShare size="2em" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
