import React from "react";
import Video from "./Video";
//import db from "./firebase";
//import { doc, onSnapshot, collection, query } from "firebase/firestore";
import "./App.css";

function App() {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   db.collection("videos").onSnapshot((snapshot) =>
  //     setVideos(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {/* {videos.map(
          ({ url, channel, description, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )} */}
        <Video
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
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
