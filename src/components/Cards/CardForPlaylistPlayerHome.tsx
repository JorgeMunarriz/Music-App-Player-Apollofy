// import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import { UserContext } from "../../context";
// import { useUserContext } from "../../context";
import { toggleLiked } from "../../api/toggleLiked";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";


interface Playlist {
  id: string
  trackImage?: string
  trackUrl: string
  trackName?: string
}



const CardForPlaylistPlayerHome = ({ id, trackImage,
  trackUrl,
  trackName }: Playlist) => {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  
  
    &:hover {
  
      cursor: pointer;
    }
    &__img {
      position: relative;
    width: 150px;
    height: 100px;
    overflow: hidden;
      &-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__name {
      color: #fff;
      font-size: 30px;
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