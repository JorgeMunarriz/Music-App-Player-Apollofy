import {Playlist} from '../../types/data';
import {CardForPlaylistPlayerStyles} from './cardForPlaylistPlayer.styles';
import {useState} from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';

export const CardForPlaylistPlayer = ({id, thumbnail, name, isFollowed, description}: Playlist) => {
	const [followed, setFollowed] = useState<boolean>(isFollowed);

	const toggleFollow = () => {
		setFollowed(!followed);
	};

	return (
		<CardForPlaylistPlayerStyles>
			<img alt={name} src={thumbnail} />
			<h3>{name}</h3>
			<span className="playlist-description">{description}</span>
			<button onClick={toggleFollow} className="follow_btn">
				{followed ? <AiFillHeart size={20} className="full-heart" /> : <AiOutlineHeart size={15} />}
			</button>
		</CardForPlaylistPlayerStyles>
	);
};
