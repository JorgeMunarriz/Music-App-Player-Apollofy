import { urlGenre } from "../global";


interface GenresProps {
    id: string,
    name: string
}


export const getAllGenres = async () => {
    try {
        const response = await fetch(urlGenre);
        const genres = await response.json();
        return genres;
        console.log(genres)
    }
    catch {
        throw new Error("Error while getting all genres reference from mongoDB");
    }
};