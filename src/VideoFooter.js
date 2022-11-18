import React from "react";
import "./VideoFooter.css";
//import Ticker from "react-ticker";
import { FaMusic } from "react-icons/fa";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <FaMusic />
          <p>{song}</p>
          {/* <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="video footer"
      />
    </div>
  );
}

export default VideoFooter;
