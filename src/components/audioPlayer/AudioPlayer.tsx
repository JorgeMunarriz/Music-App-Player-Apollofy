import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css";
import { useContext } from "react";
import { DataMusicContext } from "../../context/DataMusicContext";

export const AudioPlayerComponent = () => {
  
  const  data  = useContext(DataMusicContext);
  const track  = data?.currentTrack;
  
  
  return (
  <AudioPlayer 
    autoPlay
    className="rhap_container"
    src= {track?.url}
    onPlay={(e) => console.log("onPlay")}
  />
)};
