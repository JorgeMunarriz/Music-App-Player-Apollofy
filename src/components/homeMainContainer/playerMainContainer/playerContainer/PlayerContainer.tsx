import { useContext } from "react";
import { PlayerContainerStyles } from "./playerContainer.styles";
import { AiOutlineHeart } from "react-icons/ai";
import { Track } from "../../../../types/data";
import { DataMusicContext } from '../../../../context/DataMusicContext';

export const PlayerContainer = ({ id }: Track) => {
  const data = useContext(DataMusicContext);
  const tracks = data?.currentTrack;

  return (
    <PlayerContainerStyles key={id}>
      <img className="playerContainer__img-big" src={tracks?.thumbnail} />
      <h3 className="playerContainer__h3">{tracks?.name}</h3>
      <span className="playerContainer__span">{tracks?.artist}</span>
      {/* <button onClick={toggleFollow} className="follow_btn">{followed ? <AiFillHeart size={20} className='full-heart'/> : <AiOutlineHeart size={15}/>}</button> */}
    </PlayerContainerStyles>
  );
};
