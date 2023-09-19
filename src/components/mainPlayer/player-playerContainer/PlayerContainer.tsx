import styled from 'styled-components';
import { Track } from "../../../types/data";
import { useUserMusicContext } from "../../../context";
import { useQueuePlayerContext } from '../../../context/QueuePlayerContext';
import { FaTimes } from 'react-icons/fa';

export const PlayerContainer = () => {

  const { currentTrack, nextTracks, handleDeleteTrackInList } = useQueuePlayerContext();

  return (
    <PlayerContainerStyles >
      <div className="playerContainer">
        <img className="playerContainer__img-big" src={currentTrack?.trackImage} />
        <h3 className="playerContainer__h3">{currentTrack?.trackName}</h3>
        <h4 className="playerContainer__span">{currentTrack?.artist.map(artist => artist.artistName).join(', ')}</h4>
        <span className="playerContainer__span">{currentTrack?.genre.map(genre => genre.genreName).join(', ')}</span>
      </div>
      <section>
        {nextTracks.map((track, index) => (
          <div key={track.id}>
            <h4>{track.trackName}</h4>
            <h5>{track.artist.map(artist => artist.artistName).join(', ')}</h5>
            <FaTimes onClick={() => handleDeleteTrackInList(index)} />
          </div>
        ))}
      </section>
    </PlayerContainerStyles>
  );
};


export const PlayerContainerStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 90%;
.playerContainer{
  display: flex;
  height: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  &__img-big{
    width: 40vh;
    height: auto;
  }
  &__h3{
    color: #fff;
    font-size: 2rem;
  }
  &__span{
    color: rgba(255, 255, 255, 0.7);
  }
}
`;