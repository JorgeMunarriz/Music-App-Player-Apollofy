import { LazyExoticComponent, ComponentType, lazy} from "react";
import styled from "styled-components";
import { SearchBar } from "..";
import { useParams, useSearchParams } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";
import { useUserMusicContext } from "../../context/UserMusicContext";
import TracksForLibrary from "../mainPlaylist/cards/TracksForLibrary";

const LazyCards: LazyExoticComponent<ComponentType<any>> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("../cards/CardForPlaylistPlayer"));
    }, 1500);
  });
});

export const AlbumMainContainer = () => {
  const { id } = useParams();
  const { albums, tracks } = useUserMusicContext();
//   const { handleUserPlaylistsCreated, handleUserPlaylistsLiked, handleUserAlbums, handleUserTracks } = useUserMusicContext();
  const selectedAlbum = albums.find((album) => album.id === id);
  

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: target.value });
  };

  return (
    <>
      <AlbumMainContainerStyles>
        <SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined} />

        <section className="titleDiv">
          <h2 className="titleDiv__h2">{selectedAlbum && selectedAlbum.albumName}</h2>
        </section>
        <section className="zone-cards">
        {selectedAlbum?.track.map(({ id, trackName, trackUrl, trackImage, trackCreatedAt }) => (
              <TracksForLibrary key={id} id={id} trackName={trackName} trackUrl={trackUrl} trackImage={trackImage} trackCreatedAt={trackCreatedAt} />
            ))}
        </section>
      </AlbumMainContainerStyles>
    </>
  );
};

export const AlbumMainContainerStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  background: linear-gradient(#340034, #000);
  border-radius: 0.25rem;

  .titleDiv {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-top: 0.5vh;
    color: white;
    &__h2 {
      font-size: 2rem;
    }
  }
  .selections {
    cursor: pointer;
  }
  .selection-active {
    color: var(--color-text-pink);
  }
  .zone-cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    padding: 2rem;
    gap: 1rem;
  }

  @media (${breakpoints.min}px <= width <= ${breakpoints.mobileMax}px) {
    grid-area: 1 / 1 / 5 / 7;

    .zone-selector {
      font-size: 3vw;
    }
  }

  @media (${breakpoints.mobileMax}px < width <= ${breakpoints.tabletMax}px) {
    grid-area: 1 / 1 / 5 / 7;

    .zone-selector {
      font-size: 3vw;
    }
  }

  @media (${breakpoints.tabletMax}px < width <= ${breakpoints.laptopsMax}px) {
    grid-area: 1 / 2 / 5 / 7;

    .zone-selector {
      font-size: 2vw;
    }
  }

  @media (${breakpoints.laptopsMax}px < width <= ${breakpoints.desktopMax}px) {
    grid-area: 1 / 2 / 5 / 7;

    .zone-selector {
      font-size: 2vw;
    }
  }

  @media (width > ${breakpoints.desktopMax}px) {
    grid-area: 1 / 2 / 5 / 7;

    .zone-selector {
      font-size: 2vw;
    }
  }
`;
