import {useState, useEffect } from "react"
import { Playlist } from "../types/data";



export const url = "http://localhost:3000";
export const urlPlaylist = `${url}/playlists`;
export const urlTracks = `${url}/tracks`;
export const urlUser = `${url}/user`;
export const urlAlbums = `${url}/albums`;
export const urlArtist = `${url}/playlist`;
export const urlGenres = `${url}/genres`;

export const GetData = async () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(urlPlaylist);
      try {
        if (!response) throw new Error("Failed fetch");
        const { data }: { data: Playlist[] } = await response.json();
        setPlaylists(data as Playlist[])
      } catch (error) {
        console.error(error);
      }
    };
	fetchData()

  }, [setPlaylists]);


};
