import { PlayerStyles } from "./player.styles";
import logo from "../../assets/img/logo-homepage.png";
import { AudioPlayerComponent } from "..";
import { Playlist } from "../../types/data";
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


