import styled from "styled-components";


import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PLAYLISTS } from "../../config/routes/paths";
import { Link } from "react-router-dom";


interface Playlist {
  id: number
  name: string
  isFollowed?: boolean
  thumbnail: string
  description?: string
  publicAccessible?: boolean
  primaryColor?: string
  tracksList?: number[]
  liked?: boolean
}


const CardForPlaylistPlayer = ({ thumbnail, name, isFollowed, }: Playlist) => {
  const [followed, setFollowed] = useState<boolean | undefined>(isFollowed);

  const toggleFollow = () => {
    setFollowed(!followed);
  };

  return (
    <CardForPlaylistPlayerStyles>
      <Link  to={`${PLAYLISTS}/${id}`} >
      <div className="cardForPlaylistPlayer">
        <div className="cardForPlaylistPlayer__img">
          <img className="cardForPlaylistPlayer__img-img" src={thumbnail} alt={name} />
        </div>
        <h3 className="cardForPlaylistPlayer__name">{name}</h3>
        <button onClick={toggleFollow} className="cardForPlaylistPlayer__follow-btn follow_btn">
          {followed ? <AiFillHeart size={20} className="full-heart" /> : <AiOutlineHeart size={10} />}
        </button>
      </div>
      </Link>
    </CardForPlaylistPlayerStyles>
  );
};

const CardForPlaylistPlayerStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 12px 13px 15px 6px rgba(0, 0, 0, 0.8), 29px 36px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: rgba(230, 22, 22, 0.4);
  
  .cardForPlaylistPlayer {
    display: flex;
    flex-direction: column;
    background-color: red;

    &:hover {
      background-color: rgba(50, 50, 50, 0.4);
      cursor: pointer;
      .cardForPlaylistPlayer__description {
        display: flex;
        visibility: visible;
      }
    }
    &__img {
      position: relative;
      width: 20px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      &-img {
        width: 80%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__name {
      color: #fff;
      font-size: 2vw;
    }

    &__follow-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border: 1px solid transparent;
      border-radius: 50%;
      cursor: pointer;

      & svg {
        width: 70%;
        height: 70%;
      }
    }

    & .full-heart {
      color: #340034;
    }
  }
`;

export default CardForPlaylistPlayer
