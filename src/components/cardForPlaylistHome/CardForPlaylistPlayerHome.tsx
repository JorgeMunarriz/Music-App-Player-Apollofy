import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { toggleLiked } from "../../api/toggleLiked";
// import { UserContext } from "../../context";
import { Playlist } from "../../types/data";
import { CardForPlaylistPlayerHomeStyles } from "./cardForPlaylistPlayerHome.styles";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useUserContext } from "../../context";

const CardForPlaylistPlayerHome = ({id, thumbnail, name, description }: Playlist) => {
//tengo que traer el puto id
  // const { userLogged, handleUserLogged } = useContext(UserContext);
  
  console.log(`renderizando el componente: ${id}`)
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const {userFechture} = useUserContext()

  useEffect(() => {
    userFechture(user, getAccessTokenSilently);
  }, [user]);

  const isFollowed = () => {
    if (isAuthenticated?.favPlaylists.includes(id)) {
      return true;
    }
  return false;
  }

  const [followed, setFollowed] = useState(isFollowed);

  const toggleFollow = async () => {
    setFollowed(!followed);

    try {
      await toggleLiked (isAuthenticated?.id, 'playlist', id, followed ? 'FALSE' : 'TRUE');

      const modifiedUser = { ...isAuthenticated, favPlaylists: followed ? isAuthenticated?.favPlaylists.filter((playlistId) => playlistId !== id) : [...userLogged?.favPlaylists, id] };

      handleUserLogged(modifiedUser);

    } catch (error) {
      console.error('Error al cambiar la lista favorita:', error);
    }
  };

  return (
    <CardForPlaylistPlayerHomeStyles>
      <div className="cardForPlaylistPlayer">
        <div className="cardForPlaylistPlayer__img">
        <img className="cardForPlaylistPlayer__img-img" src={thumbnail} alt={name}/>
        </div>
        <h3 className="cardForPlaylistPlayer__name">{name}</h3>
        {/* <span className="cardForPlaylistPlayer__description playlist-description">{description}</span> */}
        <button onClick={toggleFollow} className="cardForPlaylistPlayer__follow-btn follow_btn">
          {followed ? <AiFillHeart size={20} className="full-heart" /> : <AiOutlineHeart size={10} />}
        </button>
      </div>
    </CardForPlaylistPlayerHomeStyles>
  );
};

export default CardForPlaylistPlayerHome