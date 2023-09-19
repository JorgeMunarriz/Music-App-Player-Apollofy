import {urlPlaylist } from "../global";



export type GetTokenFunction = () => Promise<string>;
export const getAllPlaylist = async (getToken: GetTokenFunction ) => {
    const token = await getToken()
    try {
        const response = await fetch(urlPlaylist, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
        } );
        if (response.ok) {
            const playlist = await response.json();
           
            return playlist;
          } else {
            console.error("Error updating user:", response.statusText);
          }
        
    }
    catch {
        throw new Error("Error while getting all playlist reference from mongoDB");
    }
};