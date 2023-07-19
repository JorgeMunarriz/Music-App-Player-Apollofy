import { Playlist } from "../../types/data";
import { CardForPlaylistPlayerStyles } from "./cardForPlaylistPlayer.styles";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

<<<<<<< HEAD
export const CardForPlaylistPlayer = ({ id, thumbnail, name, isFollowed, description }: Playlist) => {
  const [followed, setFollowed] = useState<boolean | undefined>(isFollowed);
=======
export const CardForPlaylistPlayer = ({ thumbnail, name, isFollowed, description }: Playlist) => {
  const [followed, setFollowed] = useState(isFollowed);
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412

  const toggleFollow = () => {
    setFollowed(!followed);
  };

  return (
<<<<<<< HEAD
    <CardForPlaylistPlayerStyles key={id}>
     
        <img src={thumbnail} alt={name} />  
        <h3>{name}</h3>
        <span className='playlist-description'>{description}</span>
        <button onClick={toggleFollow} className="follow_btn">{followed ? <AiFillHeart size={20} className='full-heart'/> : <AiOutlineHeart size={15}/>}</button>
      
=======
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
>>>>>>> 7e735f44b1f4419f181a26e6cfae63f63fc7c412
    </CardForPlaylistPlayerStyles>
  );
};
