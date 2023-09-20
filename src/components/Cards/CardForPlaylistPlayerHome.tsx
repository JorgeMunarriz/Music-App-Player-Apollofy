import { useState } from "react";
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { useUserContext } from "../../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PLAYLISTS } from "../../config/routes/paths";
import { breakpoints } from "../../styles/breakpoints";


interface Playlist {
  id: string;
  playlistImage?: string;
  playlistName: string;
  trackId?: string;
}


const CardForPlaylistPlayerHome = ({ id, playlistImage, playlistName, trackId }: Playlist) => {

  const { userData, handleUserData } = useUserContext();
  const [isLiked, setIsLiked] = useState(userData?.playlistLikedId.includes(id));

  const handleLiked = (id: string) => {
    handleUserData(id, "playlist");
    setIsLiked(!isLiked)
  }

  return (
    <CardForPlaylistPlayerHomeStyles>
      <Link to={`${PLAYLISTS}/${id}`} >
        <div className="cardForPlaylistPlayer">
          <div className="cardForPlaylistPlayer__img">
            <img className="cardForPlaylistPlayer__img-img" src={playlistImage} alt={trackId} />
          </div>
          <h3 className="cardForPlaylistPlayer__name">{playlistName}</h3>
        </div>
      </Link>

      <button className="addToLike cardForPlaylistPlayer__follow-btn follow_btn" onClick={() => handleLiked(id)} >
        {isLiked ? <BsHeartFill className="addToLike__fill-heart" /> : <BsHeart className='addToLike__out-heart' />}
      </button>

    </CardForPlaylistPlayerHomeStyles>
  );
};

const CardForPlaylistPlayerHomeStyles = styled.div`
  .cardForPlaylistPlayer {
    display: flex;

    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    gap: 10px;
    height: 15rem;
    width: 90%;
    box-shadow: 15px 7px 19px -3px rgba(0, 0, 0, 0.75);
    background-color: rgba(34, 15, 42, 0.4);
    margin-right: 10px;

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
      width: 20%;
      height: 100%;

      overflow: hidden;
      &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center center;
      }
    }
    &__name {
      color: #fff;
      font-size: 20px;
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
  .cardForPlaylistPlayer__name {
    font-size: 20px;
  }
  .addToLike {
    display: flex;
    position: absolute;
    justify-content: space-between;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 10;
    cursor: grabbing;
    &__fill-heart {
      font-size: 3rem;
      color: var(--color-text-gray);
      border: none;
      opacity: 0.9;
    }
    &__out-heart {
      font-size: 3rem;
      color: var(--color-text-gray);
      border: none;
      opacity: 0.9;
    }
  }
  @media (${breakpoints.min}px <= width <= ${breakpoints.tabletMax}px) {
    margin: 10px;
    .cardForPlaylistPlayer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
    }
    .cardForPlaylistPlayer__img {
      width: 100%;
    }
    &__img {
      position: relative;
      width: 100%;
      height: 100%;
      background-position: center center;
    }
    .cardForPlaylistPlayer__name {
      font-size: 15px;
    }
  }
`;

export default CardForPlaylistPlayerHome;
