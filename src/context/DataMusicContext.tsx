import { createContext, useEffect, useState, ReactNode } from 'react';
import { Playlist, Album, Genre, Track, Artist } from '../types/data';
import { urlAlbums, urlArtist, urlGenres, urlPlaylist, urlTracks } from '../global/urls/UrlApi';



export interface MusicContextProps {
  playlists: Playlist[] | null;
  albums: Album[] | null;
  genres: Genre[] | null;
  tracks: Track[] | null;
  artists: Artist[] | null;
  currentTrack: Track | null;
  handleCurrentTrack: (incomingCurrentTrack: Track) => void;
}

export const DataMusicContext = createContext<{
  data: MusicContextProps | null;
  currentTrack: Track | null;
  handleCurrentTrack: (incomingCurrentTrack: Track) => void;
}>({ data: null, currentTrack: null, handleCurrentTrack: () => {} });

export const DataMusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MusicContextProps | null>({
    playlists: null,
    albums: null,
    genres: null,
    tracks: null,
    artists: null,
    currentTrack: null,
    handleCurrentTrack: null
  });
  const [currentTrack, setCurrentTrack] = useState<Track | null> (null);
  const [params, setParams] = useState<string>('');

  console.log(params);

  const handleCurrentTrack = (incomingCurrentTrack: Track) => {
    setCurrentTrack (incomingCurrentTrack);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistResponse = await fetch(urlPlaylist);
        const playlists: Playlist[] = await playlistResponse.json() as Playlist[];

        const albumResponse = await fetch(urlAlbums);
        const albums: Album[] = await albumResponse.json() as Album[];

        const genreResponse = await fetch(urlGenres);
        const genres: Genre[] = await genreResponse.json() as Genre[];

        const trackResponse = await fetch(urlTracks);
        const tracks: Track[] = await trackResponse.json() as Track[];

        const artistResponse = await fetch(urlArtist);
        const artists: Artist[] = await artistResponse.json() as Artist[];

        setData({
          playlists,
          albums,
          genres,
          tracks,
          artists,
          currentTrack: null,
          handleCurrentTrack: null
        });
      } catch (error) {
        console.log(error);
      }
    };

    void fetchData();
  }, []);

//   const contextDataValue: MusicContextProps = {
//     playlists
//   }

  return (
    <DataMusicContext.Provider value={{data, currentTrack, handleCurrentTrack, setParams }}>
      {children}
    </DataMusicContext.Provider>
  );
};
