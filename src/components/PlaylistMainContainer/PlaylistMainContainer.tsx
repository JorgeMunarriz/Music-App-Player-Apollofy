import {useContext} from 'react';
import {DataMusicContext} from '../../context';
import {CardForPlaylistPlayer, CardForPlaylistPlayerStyles} from '..';

export const PlayListMainContainer = () => {
	const data = useContext(DataMusicContext);
	const playlist = data?.data?.playlists;

	return (
		<CardForPlaylistPlayerStyles>
			{playlist && playlist.map(({id, isFollowed, name, description, thumbnail}) => <CardForPlaylistPlayer id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />)}
		</CardForPlaylistPlayerStyles>
	);
};
