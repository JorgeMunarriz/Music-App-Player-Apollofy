import { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
      <div className="cardForPlaylistPlayer">
        <div className="cardForPlaylistPlayer__img">
          <img className="cardForPlaylistPlayer__img-img" src={thumbnail} alt={name} />
        </div>
        <h3 className="cardForPlaylistPlayer__name">{name}</h3>
        <button onClick={toggleFollow} className="cardForPlaylistPlayer__follow-btn follow_btn">
          {followed ? <AiFillHeart size={20} className="full-heart" /> : <AiOutlineHeart size={10} />}
        </button>
      </div>
    </CardForPlaylistPlayerStyles>
  );
};

const CardForPlaylistPlayerStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .cardForPlaylistPlayer {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 0.3fr;
    grid-template-rows: 1fr;
    gap: 10px;
    box-shadow: 15px 7px 19px -3px rgba(0, 0, 0, 0.75);
    background-color: rgb(10, 10, 10);
    border-radius: 5vh;
    align-items: center;
    justify-content: space-around;
    transition: all 0.3s;
    width: 80%;
    color: whitesmoke;
    font-weight: bold;
    position: relative;

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
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      &-img {
        width: 100%;
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
