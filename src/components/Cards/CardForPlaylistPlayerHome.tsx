// import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import { UserContext } from "../../context";
// import { useUserContext } from "../../context";
import { toggleLiked } from "../../api/toggleLiked";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";


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



const CardForPlaylistPlayerHome = ({ id, trackName, trackUrl, trackImage }: Playlist) => {
  console.log(trackImage)
  //tengo que traer el puto id
  // const { userLogged, handleUserLogged } = useContext(UserContext);

  console.log(`renderizando el componente: ${id}`)
  // const { user, getAccessTokenSilently } = useAuth0();
  // const { userFechture } = useUserContext()


  // const isFollowed = () => {
  //   if (userLogged?.favPlaylists.includes(id)) {
  //     return true;
  //   }
  //   return false;
  // }

  // const [followed, setFollowed] = useState(isFollowed);

  // const toggleFollow = async () => {
  //   setFollowed(!followed);

  //   try {
  //     await toggleLiked(userLogged?.id, 'playlist', id, followed ? 'FALSE' : 'TRUE');

  //     const modifiedUser = { ...userLogged, favPlaylists: followed ? userLogged?.favPlaylists.filter((playlistId) => playlistId !== id) : [...userLogged?.favPlaylists, id] };

  //     handleUserLogged(modifiedUser);

  //   } catch (error) {
  //     console.error('Error al cambiar la lista favorita:', error);
  //   }
  // };

  return (
    <CardForPlaylistPlayerHomeStyles>
      <div className="cardForPlaylistPlayer">
        <div className="cardForPlaylistPlayer__img">
          <img className="cardForPlaylistPlayer__img-img" src={trackImage} alt={trackUrl} />
        </div>
        <h3 className="cardForPlaylistPlayer__name">{trackName}</h3>
        {/* <span className="cardForPlaylistPlayer__description playlist-description">{description}</span> */}
        <button onClick={() => console.log('click')} className="cardForPlaylistPlayer__follow-btn follow_btn">
          {/* {followed ? <AiFillHeart size={20} className="full-heart" /> : <AiOutlineHeart size={10} />} */}
        </button>
      </div>
    </CardForPlaylistPlayerHomeStyles>
  );
};


const CardForPlaylistPlayerHomeStyles = styled.div`
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
    height: 76px;
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
      width: 76px;
      height: 76px;
      border-radius: 50%;
      overflow: hidden;
      &-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__name {
      color: #fff;
      font-size: 2vw;
    }

    &__description {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 100;
      width: 120px;
      height: 100px;
      color: rgba(250, 250, 250, 0.75);
      top: -50%; 
      left: 100%; 
      transform: translate(-50%, 10px);
      visibility: hidden;
      background-color: rgba(50, 50, 50, 1);
      border-radius: 1rem;
      padding: 1rem;
      transition: all 1s ease-in-out;
    }

    &__follow-btn {
      border: 1px solid transparent;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor:pointer;

      & svg {
        width:70%;
        height:70%;
      }
    }

    & .full-heart {
      color: #340034;
    }
  }
`;


export default CardForPlaylistPlayerHome