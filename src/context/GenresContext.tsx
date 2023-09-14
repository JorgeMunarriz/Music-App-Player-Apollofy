import { FC, createContext, useContext, useEffect, useState } from "react";
import { getAllGenres } from "../api/genres.fetch";

type ChildrenProps = {
    children: React.ReactNode;
}
interface GenresProps {
    id: string,
    genreName: string,
} //TOFIX, atención no se trae las imagenes ya que aún no están en la base de datos...


const GenresContext = createContext<{ allGenres: GenresProps[], setAllGenres: (newAllGenres: GenresProps[]) => void }>({ allGenres: [], setAllGenres: () => { } });


export const GenresProvider: FC<ChildrenProps> = ({ children }) => {

    const [allGenres, setAllGenres] = useState<GenresProps[]>([])

    useEffect(() => {
        async function getAllGenresLauncher() {
            const newAllGenres = await getAllGenres();
            setAllGenres(newAllGenres);
            console.log(allGenres)
        }
        getAllGenresLauncher();
    }, []);


    return (
        <GenresContext.Provider value={{ allGenres, setAllGenres }}>
            {children}
        </GenresContext.Provider>
    )
}


export const useGenresContext = () => {
    const context = useContext(GenresContext);
    if (!context) {
        throw new Error('useUserContext debe ser usado dentro de un UserProvider');
    }
    return context;
};

