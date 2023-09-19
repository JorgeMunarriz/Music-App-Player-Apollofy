import { FC, ReactNode, createContext, useContext, useState } from "react";
import { useUserMusicContext } from "./UserMusicContext";

interface QueuePlayerContextType {
    currentTrack: TrackInterface | undefined;
    handleCurrentTrackById: (id: string) => void;
    nextTracks: TrackInterface[] | undefined;
    handleNextTrackInList: (id: string) => void;
}
interface TrackInterface {
    id: string;
    trackName: string;
    trackImage: string;
    trackCreatedAt: string;
    trackUpdatedAt: string;
    trackId: string[];
    trackLikedById: string[];
    trackCreatedById: string[];
    genre: [{ genreName: string }];
    genreId: string[];
    artist: [{ artistName: string }];
    artistId: string[];
    trackUrl: string;
}

const QueuePlayerContext = createContext<QueuePlayerContextType | undefined>(undefined);

export const QueuePlayerProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const { tracks } = useUserMusicContext();
    const [prevTracks, setPrevTracks] = useState<TrackInterface[]>([]);
    const [currentTrack, setCurrentTrack] = useState<TrackInterface | undefined>();
    const [nextTracks, setNextTracks] = useState<TrackInterface[] | undefined>([]);


    const handleCurrentTrackById = (id: string) => {
        const incomingTrack = tracks.find(track => track.id === id);
        if (incomingTrack) {
            setCurrentTrack(incomingTrack);
        }
    }

    const handleNextTrackInList = () => {

        if (nextTracks && nextTracks?.length > 0) {
            const id = nextTracks[0].id

            if (currentTrack) {
                setPrevTracks(prevTracks => [...prevTracks, currentTrack]);
            }

            const incomingTrack = tracks.find(track => track.id === id);
            if (incomingTrack) {
                setCurrentTrack(incomingTrack);
                setNextTracks(nextTracks.slice(1))
            }
        }
    }

    const handleListChange = () => {
        //Borrar todo
        //playlist[0]->currentTrack
        //setear la playlist[1 en adelante] a la lista de reproducción
        // setNextTracks ()


    }


    return (
        <QueuePlayerContext.Provider value={{ currentTrack, handleCurrentTrackById, nextTracks, handleNextTrackInList }}>
            {children}
        </QueuePlayerContext.Provider>
    )
}

export const useQueuePlayerContext = (): QueuePlayerContextType => {
    const context = useContext(QueuePlayerContext);
    if (!context) {
        throw new Error("useUserMusicContext debe ser utilizado dentro de un UserMusicProvider");
    }
    return context;
};