import { PlayerStyles } from "./player.styles";
import { AudioPlayerComponent } from "..";
import { DataMusicContext } from "../../context";
import { useContext } from "react";

export const Player = () => {

  const  data  = useContext(DataMusicContext);
  const track  = data?.currentTrack;

  return (
    <PlayerStyles>
      <div className="playerstyles__div-whole">
        <img className="playerstyles__img" src={track?.thumbnail} />
        <div className="playerstyles__info">
          <h4 className="playerstyles__info-h4">{track?.name}</h4>
          <p className="playerstyles__info-paragraph">{track?.artist}</p>
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


