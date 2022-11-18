import React from "react";
import reels from "./data.json";
import Video from "./Video";
import "./App.css";

function App() {
  // const [videos, setVideos] = useState([]);

  return (
    <div className="app">
      <div className="app__videos">
        {reels.reels.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        {/* <Video
          url="./video/pexels-roman-odintsov-5667123.mp4"
          channel="ankiankit"
          description="One of my favourites.."
          song="Me in the gym"
          likes={123}
          messages={400}
          shares={200}
        />
        <Video
          url="./video/pexels-c-technical-6143546.mp4"
          channel="ankiankit"
          description="One of my favourites.."
          song="Me in the gym"
          likes={123}
          messages={400}
          shares={200}
        /> */}
      </div>
    </div>
  );
}

export default App;
