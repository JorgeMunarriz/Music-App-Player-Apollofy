import { FC, ReactNode, createContext, useContext, useState } from "react";
import { useUserMusicContext } from "./UserMusicContext";

interface QueuePlayerContextType {
    currentTrack: TrackInterface | undefined;
    handleCurrentTrackById: (id: string) => void;
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
    const [prevTracks, setPrevTracks] = useState();
    const [currentTrack, setCurrentTrack] = useState<TrackInterface | undefined>();
    const [nextTracks, setNextTracks] = useState();

    console.log(currentTrack);

    const handleCurrentTrackById = (id: string) => {
        console.log(id)

        const incomingTrack = tracks.find(track => track.id === id);
        console.log(incomingTrack)

        if (incomingTrack) {
            setCurrentTrack(incomingTrack);
        }
    }

    return (
        <QueuePlayerContext.Provider value={{ currentTrack, handleCurrentTrackById }}>
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