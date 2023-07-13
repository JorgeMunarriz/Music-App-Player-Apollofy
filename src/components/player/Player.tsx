import { PlayerStyles } from "./player.styles";
import logo from "../../assets/img/logo-homepage.png";
import { TbPlayerSkipBackFilled, TbPlayerPlayFilled, TbPlayerSkipForwardFilled } from "react-icons/tb";
import { AudioPlayerComponent } from "..";

export const Player = () => {
  return (
    <PlayerStyles>
      <div className="playerstyles__div-whole">
        <img className="playerstyles__img" src={logo} />
        <div className="playerstyles__info">
          <h4>Title song</h4>
          <p>Artist name</p>
        </div>
      </div>
      <div className="playerstyles__div-container">
        <div className="playerstyles__div-container-audio"><AudioPlayerComponent /></div>
        
      </div>

    </PlayerStyles>
  );
};
