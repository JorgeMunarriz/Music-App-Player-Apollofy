import { Track } from "../types/data";


export const url = "http://localhost:4000";
export const urlPlaylist = `${url}/playlists`;
export const urlTracks = `${url}/tracks`;
export const urlUser = `${url}/user`;
export const urlAlbums = `${url}/albums`;
export const urlArtist = `${url}/artists`;
export const urlGenres = `${url}/genres`;


// Pendiente de pasar a liked 
export const toggleLiked = async (Id: number, type: string) => {

    // try {
    //     const response = await fetch(`${urlTracks}/${trackId}`);
    //     const track = await response.json();
    //     const modifiedTrack = {
    //         ...track,
    //         reproductions: track.reproductions + 1
    //     };
    //     console.log(modifiedTrack)
    //     await fetch(`${urlTracks}/${trackId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(modifiedTrack)
    //     });
    //     console.log('Si envía');
    // } 
    // catch (error) {
    //     throw new Error ('Error trying to connect to server');
    // }
}
