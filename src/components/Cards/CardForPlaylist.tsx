import { Link } from 'react-router-dom';
import { PLAYER } from '../../config/routes/paths';
import styled from 'styled-components';

interface Playlist {
  id: string
  playlistName: string
  playlistImage: string
  trackId: string[]
}


const CardForPlaylist = ({ id, playlistName, playlistImage, trackId }: Playlist) => {
  return (
    <CardForPlaylistStyles key={id}>
      <Link to={`${PLAYER}/${trackId[0]}`} className="cardForTrack">
        <div className="cardForTrack__header">
          <img alt={playlistImage} className="cardForTrack__header_img" src={playlistImage} />
        </div>
        <div className="cardForTrack__body">
          <h3 className="cardForTrack__body_title-h3">{playlistName}</h3>
          {/* <h4 className="cardForTrack__body_title-h4">{trackName}</h4>
          <h5 className="cardForTrack__body_title-h5">Reproductions: {0}</h5> */}
        </div>
      </Link>
    </CardForPlaylistStyles>
  );
};

const CardForPlaylistStyles = styled.div`
  display: flex;
  box-shadow: 12px 13px 15px 6px rgba(0, 0, 0, 0.8), 29px 36px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: rgba(50, 50, 50, 0.4);
  border-radius: 0rem 1rem 1rem 0rem;
  padding: 0.25rem;
  gap: 1rem;
  transition: all 0.3s;
  border: 1px solid rgba(9, 9, 9, 0.4);
  margin: 10px;
  &:hover {
    background-color: rgba(100, 100, 100, 0.4);
    cursor: pointer;
  }

  .cardForTrack {
    display: flex;
    position: relative;
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
          color: rgba(255, 255, 255, 0.7)
        }
      }
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .cardForTrack {
    display: flex;
    flex-direction: column;
    min-height: 120px;
    align-items: center;
    justify-content: center;
    &__body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      overflow: hidden;
      padding: 1vh;
      &_title {
        color: #fff;
        &.h3 {
          font-size: 1rem;
        }
        &.h4 {
          font-size: 0.75rem;
        }
        &.h5 {
          font-size: 0.5rem;
        }
      }
    }
    }
  }
`;


export default CardForPlaylist