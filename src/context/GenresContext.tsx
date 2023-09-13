import { FC, createContext, useContext, useState } from "react";

type ChildrenProps = {
    children: React.ReactNode;
}
interface GenresProps {
    id: string,
    genreName: string
}


const GenresContext = createContext<{ allGenres: GenresProps[], setAllGenres: (newAllGenres: GenresProps[]) => void }>({ allGenres: [], setAllGenres: () => { } });


export const GenresProvider: FC<ChildrenProps> = ({ children }) => {

    const [allGenres, setAllGenres] = useState<GenresProps[]>([])

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

