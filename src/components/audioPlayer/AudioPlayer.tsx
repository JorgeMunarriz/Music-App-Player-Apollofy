import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContext, memo } from "react";
import { DataMusicContext } from "../../context/DataMusicContext";
import { AudioPlayerStyles } from "..";

export const AudioPlayerComponent = () => {
  const data = useContext(DataMusicContext);
  const track = data?.currentTrack;

  return (
    <AudioPlayerStyles>
      <AudioPlayer className="rhap_container" src={track?.url} onPlay={() => console.log("onPlay")} />
    </AudioPlayerStyles>
  );
};
