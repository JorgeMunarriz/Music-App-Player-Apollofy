import { PlayerStyles } from "./player.styles";
import logo from "../../assets/img/logo-homepage.png";
import { AudioPlayerComponent } from "..";
import { Playlist } from "../../types/data";
import { DataMusicContext } from "../../context";
import { useContext } from "react";

export const Player = ({id, name, thumbnail}: Playlist) => {
  const  data  = useContext(DataMusicContext);
  const playlists  = data?.playlists;

    playlists
  return (
    <PlayerStyles>
      <div className="playerstyles__div-whole">
        <img className="playerstyles__img" src={logo} />
        <div className="playerstyles__info">
          <h4>{name}</h4>
          <p>Artist name</p>
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


