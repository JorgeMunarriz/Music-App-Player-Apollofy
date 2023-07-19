import { createContext, useEffect, useState, ReactNode, useMemo, useCallback } from 'react';
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

export const DataMusicContext = createContext<MusicContextProps>({} as MusicContextProps);

export const DataMusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MusicContextProps | undefined>({
    playlists: null,
    albums: null,
    genres: null,
    tracks: null,
    artists: null,
    currentTrack: null,
    handleCurrentTrack: () => null
  });
  const [currentTrack, setCurrentTrack] = useState<Track>();

  const handleCurrentTrack = useCallback((incomingCurrentTrack: Track):void => {
    setCurrentTrack (incomingCurrentTrack);
  },[])

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
          handleCurrentTrack: ():undefined => undefined
        });
      } catch (error) {
        console.log(error);
      }
    };
    void fetchData();

  }, []);

  const updateData = useCallback(function(data:MusicContextProps):void{
    setData(data)
  }, [])
  
  const value:MusicContextProps = useMemo(() => ({
    data,
    updateData,
    handleCurrentTrack,
    currentTrack
  }), [data,updateData,handleCurrentTrack, currentTrack])


  return (
    <DataMusicContext.Provider value={value}>
      {children}
    </DataMusicContext.Provider>
  );
};
