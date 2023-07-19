import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css";
import { useContext, memo } from 'react';
import { DataMusicContext } from "../../context/DataMusicContext";

export const AudioPlayerComponent = memo(() => {
  
  const  value  = useContext(DataMusicContext);
  const track  = value?.currentTrack;
  return (
  <AudioPlayer 
    
    className="rhap_container"
    src= {track?.url}
    onPlay={() => console.log("onPlay")}
    
  />
)});
