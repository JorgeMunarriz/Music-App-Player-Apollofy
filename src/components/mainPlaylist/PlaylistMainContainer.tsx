import {useContext} from 'react';
import {DataMusicContext} from '../../context';
import {CardForPlaylistPlayer} from '../cardForPlaylistPlayer/CardForPlaylistPlayer';
import { PlaylistMainContainerStyles } from './playlistMainContainer.styles';
import { SearchBar } from '..';

export const PlaylistMainContainer = () => {
	const data = useContext(DataMusicContext);
	const playlist = data?.data?.playlists;

	return (
		<>
		<PlaylistMainContainerStyles>
			<SearchBar/>
			{playlist && playlist.map(({id, isFollowed, name, description, thumbnail}) => <CardForPlaylistPlayer key={id} id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />)}
		</PlaylistMainContainerStyles>	
		</>
	);
};
