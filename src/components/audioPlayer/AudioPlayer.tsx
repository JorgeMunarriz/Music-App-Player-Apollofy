import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContext } from "react";
import { DataMusicContext } from "../../context/DataMusicContext";
import { AudioPlayerStyles } from "..";


export const AudioPlayerComponent = () => {
  const value = useContext(DataMusicContext);
  const track = value?.currentTrack;



  return (
    <AudioPlayerStyles>
      <AudioPlayer className="rhap_container" src={track?.url} onPlay={() => console.log("onPlay")} />
    </AudioPlayerStyles>
  );
};
