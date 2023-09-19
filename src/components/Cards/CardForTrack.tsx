import { Link } from 'react-router-dom';
import { PLAYER } from '../../config/routes/paths';
import styled from 'styled-components';
import { useQueuePlayerContext } from '../../context/QueuePlayerContext';
import { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai'
import { BiSolidPlaylist } from 'react-icons/bi'


interface Track {
  id: string
  trackName: string
  trackUrl: string
  trackImage: string
}


const CardForTrack = ({ id, trackName, trackUrl, trackImage, }: Track) => {

  const { handleCurrentTrackById } = useQueuePlayerContext();

  return (
    <CardForTrackStyles key={id}>
      <Link className="cardForTrack" to={`${PLAYER}`} onClick={() => handleCurrentTrackById(id)}>
        <div className="cardForTrack__header">
          <img alt={trackName} className="cardForTrack__header_img" src={trackImage} />
        </div>
        <div className="cardForTrack__body">
          <h3 className="cardForTrack__body_title-h3">{trackName}</h3>
          <h4 className="cardForTrack__body_title-h5">Reproductions: {0}</h4>
        </div>
        <div className='cardForTrack__footer'>
          <div className='cardForTrack__footer__selection'><BiSolidPlaylist /></div>
          <Link className='cardForTrack__footer__selection' to={`${PLAYER}`} ><AiFillPlayCircle /></Link>
        </div>
      </Link>
    </CardForTrackStyles>
  );
};

const CardForTrackStyles = styled.div`
  display: flex;
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
    justify-content: space-between;
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
    &__footer {
        display: flex;
        /* position: absolute; */
        flex-direction: column;
        justify-content: space-between;
        top: 2%;
        right: 2%;
        bottom: 2%;

      &__selection{
        font-size: 1.5vw;
        color: var(--color-text-gray);
      }
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 700px) {
    .cardForTrack {
<<<<<<< HEAD
    display: flex;
    min-height: 120px;

    &__body {
      display: flex;
=======
>>>>>>> c7dd4d1d389052b94e8a98ece860332af4aa4f9d
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
    }
<<<<<<< HEAD
=======
    .cardForAlbum__header_img{
      width: 100%;
    }
    &__img {
      position: relative;
      width: 100%;
      height: 100%;
    }

>>>>>>> c7dd4d1d389052b94e8a98ece860332af4aa4f9d
  }
}
`;


export default CardForTrack