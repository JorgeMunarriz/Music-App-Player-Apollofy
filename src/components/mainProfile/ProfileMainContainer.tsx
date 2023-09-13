import {ProfileIconEditContainer, ProfileIconsContainer, ProfileMainContainerStyles} from './profileMainContainer.styles';
import {IoChevronBackOutline, IoEllipsisVerticalSharp} from 'react-icons/io5';
import { Boop } from '../../animations/boopAnimation';
import { useUserContext } from '../../context';
import { useAuth0 } from '@auth0/auth0-react';
import { TfiPencil } from "react-icons/tfi";



export const ProfileMainContainer = () => {
	const { user } = useAuth0();
	const {userData} =  useUserContext();
	return (
		<ProfileMainContainerStyles>
			<ProfileIconsContainer>
			<Boop rotation={20} timing={200}><IoChevronBackOutline /></Boop><Boop rotation={20} timing={200}> <IoEllipsisVerticalSharp /></Boop> 
			</ProfileIconsContainer>
			<ProfileIconEditContainer>
			<h2 className="profile__h2">Profile</h2>
			<Boop rotation={20} timing={200}><button className='button-icon' type='button'><TfiPencil /></button></Boop>
			</ProfileIconEditContainer>
			<div className="profile__img-container">
				<img src={userData?.userImage ? userData?.userImage : user?.picture } alt="profile imagen" />
				<span className="profile__span-email">{userData?.userEmail}</span>
				<h3 className="profile__h3-name">{userData?.userName}</h3>
				<div className="profile__numbers-container">
					<span className="profile__span-numbers">778</span>
					<span className="profile__span-numbers">243</span>
				</div>
				<div className="profile__followers-container">
					<span className="profile__span-followers">Followers</span>
					<span className="profile__span-followers">followed</span>
				</div>
			</div>
		</ProfileMainContainerStyles>
	);
};


