import { useContext, createContext, FC, ReactNode, useState } from 'react';


interface Genre {
    genreName: string
}

interface TrackItemProps {
    trackName: string;
    trackUrl: string;
    trackImage: string;
    trackCreatedAt: string;
    genre: Genre[];
    counter?: number;
}

interface TrackProps {
    tracks: TrackItemProps[] | undefined;
    setTracks: React.Dispatch<React.SetStateAction<TrackItemProps[] | undefined>>
    children: ReactNode
}

const TrackContext = createContext<TrackProps>({} as TrackProps);

export const TrackProvider: FC<TrackProps> = ({ children }): void => {
    const [tracks, setTracks] = useState<TrackItemProps[] | undefined>([]);


}