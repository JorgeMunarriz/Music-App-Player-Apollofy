import {useContext} from 'react';
import {DataMusicContext} from '../../context';
import {CardForPlaylistPlayer} from '../cardForPlaylistPlayer/CardForPlaylistPlayer';
import { PlaylistMainContainerStyles } from './playlistMainContainer.styles';
import { SearchBar } from '..';
import { useSearchParams } from 'react-router-dom';

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
		<SearchBar searchParams={searchParams} setSearchParams={setSearchParams} query={query} handleChangeParams={handleChangeParams} />
			<section className='playlistMainContainer__section'>
				{playlist && playlist.map(({id, isFollowed, name, description, thumbnail}) => <CardForPlaylistPlayer key={id} id={id} isFollowed={isFollowed} name={name} description={description} thumbnail={thumbnail} />)}
			</section>
		</PlaylistMainContainerStyles>	
		</>
	);
};
