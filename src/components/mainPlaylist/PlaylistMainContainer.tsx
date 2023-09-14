import { useContext, Suspense, LazyExoticComponent, ComponentType, lazy, useState } from "react";
import { DataMusicContext } from "../../context";
import styled from "styled-components";
import { SearchBar } from "..";
import LoaderPlaylist from "../../assets/skeleton/skeleton";
import { useSearchParams } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";

const LazyCards: LazyExoticComponent<ComponentType<any>> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("../Cards/CardForPlaylistPlayer"));
    }, 1500);
  });
});

export const PlaylistMainContainer = () => {

  const data = useContext(DataMusicContext);

  const playlistArray = data?.data?.playlists;


  const artistArray = data?.data?.playlists;
  const albumArray = data?.data?.playlists;
  const genreArray = data?.data?.playlists;



  const [zoneSelected, setZoneSelected] = useState("playlist")

  const handleChangeZoneSelected = (selection: string) => {
    setZoneSelected(selection)
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleChangeParams = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: target.value });
  };

  let contentToRender;
  switch (zoneSelected) {
    case "playlist":
      contentToRender = playlistArray;
      break;
    case "artist":
      contentToRender = artistArray;
      break;
    case "album":
      contentToRender = albumArray;
      break;
    case "genre":
      contentToRender = genreArray;
      break;
    default:
      contentToRender = null;
      break;
  }


  return (
    <>
      <PlaylistMainContainerStyles>


        <SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined} />

        <section className="zone-selector">
          <span className="selections" onClick={() => handleChangeZoneSelected('playlist')}>Playlists</span>
          <span className="selections" onClick={() => handleChangeZoneSelected('artist')}>Artists</span>
          <span className="selections" onClick={() => handleChangeZoneSelected('album')}>Albums</span>
          <span className="selections" onClick={() => handleChangeZoneSelected('genre')}>Genres</span>
        </section>

        {zoneSelected === 'playlist' &&
          <PlaylistContent />
        }
        {zoneSelected === 'artist' && <ArtistContent />}
        {zoneSelected === 'album' && <AlbumContent />}
        {zoneSelected === 'genre' && <GenreContent />}

        {/* 
        {playlist &&
          playlist.map(({ id, isFollowed, name, description, thumbnail }) => (
            <Suspense key={id} fallback={<LoaderPlaylist />}>
              <LazyCards key={id} id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />
            </Suspense>
          ))} */}


      </PlaylistMainContainerStyles>
    </>
  );
};



export const PlaylistMainContainerStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100%;
  width: 100%;
  background: linear-gradient(#340034, #000);
  border-radius: 0.25rem;

  .zone-selector {
    display: flex;
    width: 100%;
    justify-content: space-around;

    padding-top: 0.5vh;

    color: white;
  }
  .selections {
    cursor: pointer;
  }

  @media (${breakpoints.min}px <= width <= ${breakpoints.mobileMax}px) {
    grid-area: 1 / 1 / 5 / 7;

    .zone-selector {
    font-size: 3vw;
    }
  }

  @media (${breakpoints.mobileMax}px < width <= ${breakpoints.tabletMax}px){
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