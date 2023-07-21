import {useContext , Suspense, LazyExoticComponent, ComponentType, lazy} from 'react';
import {DataMusicContext} from '../../context';
import { PlaylistMainContainerStyles } from './playlistMainContainer.styles';
import { SearchBar } from '..';
import LoaderPlaylist from '../../assets/skeleton/skeleton';
import { useSearchParams } from 'react-router-dom';


const LazyCards: LazyExoticComponent<ComponentType<any>> = lazy(() => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		return resolve(import("../cardForPlaylistPlayer/CardForPlaylistPlayer"));
	  }, 1500);
	});
  });

export const PlaylistMainContainer = () => {
	const data = useContext(DataMusicContext);
	const playlist = data?.data?.playlists;

	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('q') || '';

	const handleChangeParams = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		setSearchParams({q: target.value});
	};

	return (
		<>
		<PlaylistMainContainerStyles>
			<SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined}/>
			{playlist && playlist.map(({id, isFollowed, name, description, thumbnail}) => <Suspense key={id} fallback={<LoaderPlaylist />}><LazyCards key={id} id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} /></Suspense>)}
		</PlaylistMainContainerStyles>	
		</>
	);
};
