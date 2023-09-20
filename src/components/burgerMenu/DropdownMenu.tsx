import styled from 'styled-components';
import {FC} from 'react';
import {Modal, ModifyTrackModal} from '..';
import {DeleteTrackModal} from './DeleteTrackModal';
import {useModal} from '../../hooks/useModal';

interface DropdownMenuInterface {
	isOpen: boolean;
	trackId: string;
	trackName: string;
	trackImage: string;
	trackCreatedAt: string;
	trackUpdatedAt: string;
	trackLikedById: string[];
	trackCreatedById: string[];
	genre: [{genreName: string}];
	genreId: string[];
	artistId: string[];
	trackUrl: string;
	albumId: string[];
}

export const DropdownMenu: FC<DropdownMenuInterface> = ({isOpen, trackId, trackName, trackUrl, trackImage, trackCreatedAt, genreId, artistId, albumId}) => {
	const [isOpenModal, openModal, closeModal] = useModal(false);
	const [isOpenModal2, openModal2, closeModal2] = useModal(false);

	return isOpen ? (
		<DropdownMenuStyles>
			<Modal isOpen={isOpenModal} closeModal={closeModal}>
				<DeleteTrackModal onClose={closeModal} trackId={trackId} />
			</Modal>
			<Modal isOpen={isOpenModal2} closeModal={closeModal2}>
				<ModifyTrackModal
					closeModal2={closeModal2}
					trackId={trackId}
					trackName={trackName}
					trackUrl={trackUrl}
					trackImage={trackImage}
					trackCreatedAt={trackCreatedAt}
					genreId={genreId}
					artistId={artistId}
					albumId={albumId}
				/>
			</Modal>

			<div className="dropdown__menu">
				<button onClick={openModal2}>Edit song</button>
				<button onClick={openModal}>Delete song</button>
			</div>
		</DropdownMenuStyles>
	) : null;
};

const DropdownMenuStyles = styled.div`
	width: 100%;
	max-width: 500px;
	border-radius: 5px;
	box-shadow: 0, 1, 2;
`;
