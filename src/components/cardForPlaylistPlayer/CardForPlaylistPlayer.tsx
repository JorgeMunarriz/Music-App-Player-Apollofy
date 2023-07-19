import { Playlist } from "../../types/data";
import { CardForPlaylistPlayerStyles } from "./cardForPlaylistPlayer.styles";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const CardForPlaylistPlayer = ({ thumbnail, name, isFollowed, description }: Playlist) => {
  const [followed, setFollowed] = useState(isFollowed);

  const toggleFollow = () => {
    setFollowed(!followed);
  };

  return (
    <CardForPlaylistPlayerStyles>
      <div className="cardForPlaylistPlayer">
        <div className="cardForPlaylistPlayer__img">
        <img className="cardForPlaylistPlayer__img-img" src={thumbnail} />
        </div>
        <h3 className="cardForPlaylistPlayer__name">{name}</h3>
        <span className="cardForPlaylistPlayer__description playlist-description">{description}</span>
        <button onClick={toggleFollow} className="cardForPlaylistPlayer__follow-btn follow_btn">
          {followed ? <AiFillHeart size={20} className="full-heart" /> : <AiOutlineHeart size={15} />}
        </button>
      </div>
    </CardForPlaylistPlayerStyles>
  );
};
