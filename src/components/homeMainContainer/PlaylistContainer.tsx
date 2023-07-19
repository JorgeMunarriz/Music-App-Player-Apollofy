import {SearchBar, TracksMainContainer} from '..';
import {PlaylistContainerStylesNew} from './playlistContainer.styles';

export const PlaylistContainer = () => {
	return (
		<PlaylistContainerStylesNew>
			<SearchBar setSearchParams={undefined} searchParams={undefined} handleChangeParams={undefined} query={undefined} />
			<TracksMainContainer />
		</PlaylistContainerStylesNew>
	);
};
