import { Link, json } from 'react-router-dom';
import { PLAYER } from '../../../config/routes/paths';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/breakpoints';

interface PlaylistProps {
  id: string,
  playlistName: string,
  playlistImage: string,
  // playlistCreatedAt: string,
  // playlistUpdatedAt: string,
  trackId: string[],
  // playlistLikedById: string[],
  playlistCreatedById: string[],
  // genreId: string[],
  genre: [{ genreName: string, id: string }]
}


const PlaylistsForLibrary = ({ id, playlistName, playlistImage, playlistCreatedById, trackId, genre }: PlaylistProps) => {

  const genres = genre.map(object => object.genreName);
  const genresNames = genres.join(', ');

  return (
    <PlaylistsForLibraryStyles key={id}>
      <Link to={`${PLAYER}/${trackId[0]}`} className="cardForTrack">
        <div className="cardForTrack__header">
          <img alt={playlistName} className="cardForTrack__header__img" src={playlistImage} />
        </div>
        <div className="cardForTrack__body">
          <h3 className="cardForTrack__body_title-h3">{playlistName}</h3>
          <h4 className="cardForTrack__body_title-h4">{genresNames}</h4>
        </div>
      </Link>
    </PlaylistsForLibraryStyles>
  );
}


const PlaylistsForLibraryStyles = styled.div`

  display: flex;
  padding: 0.25rem;
  gap: 1rem;
  background-color: rgba(50, 50, 50, 0.4);
  box-shadow: 12px 13px 15px 6px rgba(0, 0, 0, 0.8), 29px 36px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 0rem 1rem 1rem 0rem;
  border: 1px solid rgba(66, 66, 66, 0.4);
  transition: all 0.3s;

  &:hover {
    background-color: rgba(100, 100, 100, 0.4);
    cursor: pointer;
  }

  .cardForTrack {
    display: flex;
    min-height: 70px;
    gap: 1rem;

  }

@media (${breakpoints.min}px <= width <= ${breakpoints.mobileMax}px) {

  .cardForTrack {

    &__header{
      width: 70px;
      height: 70px;

      border-radius: 0rem 0rem 0rem 0rem;
      overflow: hidden;
        &__img {
        width: 70px;
        height: 70px;
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
          font-size: 3.5vw;
          color: var(--color-text-pink);
        }
        &-h4 {
          font-size: 3vw;
          color: var(--color-text-gray);
        }
        &-h5 {
          font-size: 0.75vw;
          color: rgba(255, 255, 255, 0.7)
        }
      }
    }
  }
}

@media (${breakpoints.mobileMax}px < width <= ${breakpoints.tabletMax}px) {

  .cardForTrack {

    &__header{
      width: 80px;
      height: 80px;

      border-radius: 0rem 0rem 0rem 0rem;
      overflow: hidden;
        &__img {
        width: 80px;
        height: 80px;
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
          font-size: 3.0vw;
          color: var(--color-text-pink);
        }
        &-h4 {
          font-size: 2.5vw;
          color: var(--color-text-gray);
        }
        &-h5 {
          font-size: 0.75vw;
          color: rgba(255, 255, 255, 0.7)
        }
      }
    }
  }
}


@media (${breakpoints.tabletMax}px < width <= ${breakpoints.laptopsMax}px) {

  .cardForTrack {

    &__header{
      width: 80px;
      height: 80px;

      border-radius: 0rem 0rem 0rem 0rem;
      overflow: hidden;
        &__img {
        width: 80px;
        height: 80px;
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
          font-size: 3.0vw;
          color: var(--color-text-pink);
        }
        &-h4 {
          font-size: 2.5vw;
          color: var(--color-text-gray);
        }
        &-h5 {
          font-size: 0.75vw;
          color: rgba(255, 255, 255, 0.7)
        }
      }
    }
  }
}

@media (${breakpoints.laptopsMax}px < width <= ${breakpoints.desktopMax}px) {

  .cardForTrack {

    &__header{
      width: 110px;
      height: 110px;

      border-radius: 0rem 0rem 0rem 0rem;
      overflow: hidden;
        &__img {
        width: 110px;
        height: 110px;
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
          font-size: 2.5vw;
          color: var(--color-text-pink);
        }
        &-h4 {
          font-size: 2vw;
          color: var(--color-text-gray);
        }
        &-h5 {
          font-size: 0.75vw;
          color: rgba(255, 255, 255, 0.7)
        }
      }
    }
  }
}


@media (width > ${breakpoints.desktopMax}px) {

  .cardForTrack {

    &__header{
      width: 120px;
      height: 120px;

      border-radius: 0rem 0rem 0rem 0rem;
      overflow: hidden;
        &__img {
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
          font-size: 2.5vw;
          color: var(--color-text-pink);
        }
        &-h4 {
          font-size: 2vw;
          color: var(--color-text-gray);
        }
        &-h5 {
          font-size: 0.75vw;
          color: rgba(255, 255, 255, 0.7)
        }
      }
    }
  }
}
`;

export default PlaylistsForLibrary