import {useContext , Suspense, LazyExoticComponent, ComponentType, lazy} from 'react';
import {DataMusicContext} from '../../context';
import { PlaylistMainContainerStyles } from './playlistMainContainer.styles';
import { SearchBar } from '..';
import LoaderPlaylist from '../../assets/skeleton/skeleton';


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

	return (
		<>
		<PlaylistMainContainerStyles>
			<SearchBar/>
			{playlist && playlist.map(({id, isFollowed, name, description, thumbnail}) => <Suspense fallback={<LoaderPlaylist />}><LazyCards key={id} id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} /></Suspense>)}
		</PlaylistMainContainerStyles>	
		</>
	);
};
