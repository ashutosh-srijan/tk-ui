import React, { useRef, useEffect } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import VideoHeader from "./VideoHeader";
import "./Video.css";
import BaseTab from "./BaseTab";
import HeaderText from "./HeaderText";

function Video({ url, channel, description, song, likes, messages, shares }) {
  //const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // const onVideoPress = () => {
  //   if (playing) {
  //     videoRef.current.pause();
  //     setPlaying(false);
  //   } else {
  //     videoRef.current.play();
  //     setPlaying(true);
  //   }
  // };

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  return (
    <div className="video">
      <video className="video__player" loop ref={videoRef} src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoHeader />
      <BaseTab />
      <HeaderText />
    </div>
  );
}

export default Video;
