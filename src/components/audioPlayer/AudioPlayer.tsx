import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css";
import { useContext } from "react";
import { DataMusicContext } from "../../context/DataMusicContext";

export const AudioPlayerComponent = () => {
  const  data  = useContext(DataMusicContext);
  const playlists  = data?.playlists;
  const albums = data?.albums;
  
  
  return (
  <AudioPlayer 
    autoPlay
    className="rhap_container"
    src="https://res.cloudinary.com/dmkdsujzh/video/upload/v1644583928/tracks-dev/Mahidevran_Rock_Band_-_Mahidevran_-_Maze_of_sorrow_ips3zs.mp3"
    onPlay={(e) => console.log("onPlay")}
    // other props here
  />
)};
