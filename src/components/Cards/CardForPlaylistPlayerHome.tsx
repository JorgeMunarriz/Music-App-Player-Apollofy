import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";


import { useUserContext, useUserMusicContext } from "../../context";
// import { toggleLiked } from "../../api/toggleLiked";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PLAYLISTS } from "../../config/routes/paths";
import { getPlaylistById } from "../../api/playlist.fetch";

interface Playlist {
  id: string;
  playlistImage?: string;
  playlistName: string;
  trackId?: string;
}

const CardForPlaylistPlayerHome = async ({ id, playlistImage, playlistName, trackId }: Playlist) => {
  const { getAccessTokenSilently } = useAuth0();
  const { playlists, playlistsLiked, setPlaylistsLiked } = useUserMusicContext();
  const { userData } = useUserContext();
  const [liked, setLiked] = useState<boolean>(false);




  console.log(userData)

  const handleLiked = (id: string) => {

    const incomingPlaylist = getPlaylistById(getAccessTokenSilently, id);
    console.log(incomingPlaylist)
    setLiked(!liked)
    const selectedPlaylist = playlistsLiked.map(playlist => {

      if (!playlistsLiked.includes(incomingPlaylist.id)) {
        setPlaylistsLiked([...playlistsLiked, incomingPlaylist])
        setLiked(!liked);

        // userData?.playlistLikedId.push(playlist.id)
      }
    })
  }


  return (
    <CardForPlaylistPlayerHomeStyles>
      <Link to={`${PLAYLISTS}/${id}`} >
        <div className="cardForPlaylistPlayer">
          <div className="cardForPlaylistPlayer__img">
            <img className="cardForPlaylistPlayer__img-img" src={playlistImage} alt={trackId} />
          </div>
          <h3 className="cardForPlaylistPlayer__name">{playlistName}</h3>
          {/* <span className="cardForPlaylistPlayer__description playlist-description">{description}</span> */}
          <button onClick={() => handleLiked(id)} className="cardForPlaylistPlayer__follow-btn follow_btn">
            {liked ? <AiFillHeart size={20} className="full-heart" /> : <AiOutlineHeart size={10} />}
          </button>
        </div>
      </Link>
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

  @media only screen and (min-width: 363px) and (max-width: 700px) {
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

// console.log(trackImage)
//tengo que traer el puto id
// const { userLogged, handleUserLogged } = useContext(UserContext);
// const { user, getAccessTokenSilently } = useAuth0();
// const { userFechture } = useUserContext()