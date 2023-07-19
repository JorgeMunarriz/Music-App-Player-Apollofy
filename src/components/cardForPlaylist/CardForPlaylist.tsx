import {Link} from 'react-router-dom';
import {Playlist} from '../../types/data';
import {CardForPlaylistPlayerStyles} from '..';

export const CardForPlaylist = ({id, thumbnail, name}: Playlist) => {
	return (
		<CardForPlaylistPlayerStyles key={id}>
			<Link to={`/player/${id}`} className="card-container">
				<img src={thumbnail} />
				<div className="card-body">
					<h3 className="title-h3">{name}</h3>
				</div>
			</Link>
		</CardForPlaylistPlayerStyles>
	);
};
