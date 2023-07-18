import { PlayerStyles } from "./player.styles";
import { DataMusicContext } from "../../context";
import { useContext } from "react";
import { AudioPlayerComponent } from "..";

export const Player = () => {

  const  data  = useContext(DataMusicContext);
  const track  = data?.currentTrack;

  return (
    <PlayerStyles>
      <div className="playerstyles__div-whole">
        <img className="playerstyles__img" src={track?.thumbnail} alt={track?.name} />
        <div className="playerstyles__info">
          <h4>{track?.name}</h4>
          <p>{track?.artist}</p>
        </div>
      </div>
      <div className="playerstyles__div-container">
        <div className="playerstyles__div-container-audio">
          <AudioPlayerComponent />
        </div>
      </div>
    </PlayerStyles>
  );
};


