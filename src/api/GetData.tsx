import { useEffect } from "react";


export const url = "http://localhost:3000";
export const urlPlaylist = `${url}/playlists`;
export const urlTracks = `${url}/tracks`;
export const urlUser = `${url}/user`;
export const urlAlbums = `${url}/albums`;
export const urlArtist = `${url}/playlist`;
export const urlGenres = `${url}/genres`;


export const GetData = () => {
  
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
                  artists
                });
              } catch (error) {
                console.log(error);
              }
            };
        
            void fetchData();
          }, []);
      


  return (
        <>
              <h2>getData</h2>
        
        </>
  )
};
