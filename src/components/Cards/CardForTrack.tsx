import { Link } from 'react-router-dom';
import { PLAYER } from '../../config/routes/paths';
import styled from 'styled-components';
import { useQueuePlayerContext } from '../../context/QueuePlayerContext';
import { AiFillPlayCircle } from 'react-icons/ai'
import { BiSolidPlaylist } from 'react-icons/bi'
import { useState } from 'react';


interface Track {
  id: string
  trackName: string
  trackUrl: string
  trackImage: string
}


const CardForTrack = ({ id, trackName, trackUrl, trackImage, }: Track) => {

  const { handleCurrentTrackById, handleNewTrackInList } = useQueuePlayerContext();
  const [goToPlayer, setGoToPlayer] = useState(true);

  return (
    <CardForTrackStyles key={id}>
      <Link className="cardForTrack" onClick={() => handleCurrentTrackById(id)} to={`${PLAYER}`}>
        <div className="cardForTrack__header">
          <img alt={trackName} className="cardForTrack__header_img" src={trackImage} />
        </div>
        <div className="cardForTrack__body">
          <h3 className="cardForTrack__body_title-h3">{trackName}</h3>
          <h4 className="cardForTrack__body_title-h5">Reproductions: {0}</h4>
        </div>
      </Link>

      <div className='addToQueue'><BiSolidPlaylist onClick={() => handleNewTrackInList(id)} /></div>

    </CardForTrackStyles>
  );
};

const CardForTrackStyles = styled.div`
  display: flex;
  position: relative;
  box-shadow: 12px 13px 15px 6px rgba(0, 0, 0, 0.8), 29px 36px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: rgba(50, 50, 50, 0.4);
  border-radius: 0rem 1rem 1rem 0rem;
  padding: 0.25rem;
  gap: 1rem;
  transition: all 0.3s;
  border: 1px solid rgba(66, 66, 66, 0.4);
  margin: 10px;
  &:hover {
    background-color: rgba(100, 100, 100, 0.4);
    cursor: pointer;
  }

  .cardForTrack {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    /* position: relative; */
    gap: 1rem;
    overflow-y: auto;
    min-height: 120px;

    &__header{
      position: relative;
      width: 10vw;
      height: 120px;
      border-radius: 0rem 0rem 0rem 0rem;
      overflow: hidden;
      &_img {
      position: absolute;
      width: 120px;
      height: 120px;
      object-fit: cover;
      opacity: 0.8;
    }
    }
    
    &__body {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
      padding: 1vh;
      &_title {
        color: #fff;
        &-h3 {
          font-size: 1.5vw;
          color: var(--color-text-pink);
        }
        &-h4 {
          font-size: 1vw;
          color: var(--color-text-gray);
        }
        &-h5 {
          font-size: 0.75vw;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
  .addToQueue {
    display: flex;
    position: absolute;
    justify-content: space-between;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 10;
    font-size: 3rem;
    color: var(--color-text-gray);
    cursor: grabbing;
  }

  @media only screen and (min-width: 320px) and (max-width: 700px) {
    .cardForTrack {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
    }
    .cardForAlbum__header_img{
      width: 100%;
    }
    &__img {
      position: relative;
      width: 100%;
      height: 100%;
    }

  }
}
`;


export default CardForTrack