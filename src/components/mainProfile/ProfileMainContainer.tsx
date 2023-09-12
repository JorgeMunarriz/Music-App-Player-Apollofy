import {ProfileIconsContainer, ProfileMainContainerStyles} from './profileMainContainer.styles';
import {IoChevronBackOutline, IoEllipsisVerticalSharp} from 'react-icons/io5';
import { Boop } from '../../animations/boopAnimation';
import  perfilPrueba  from '../../assets/img/perfil de prueba.jpg';
import { UserFormState } from '../../types/authContext';
import { useAuth0 } from '@auth0/auth0-react';



export const ProfileMainContainer = () => {
	const data: UserFormState = JSON.parse(localStorage.getItem('form') as keyof object) || '';
	const {name} = data;
	const {user} = useAuth0()
	return (
		<ProfileMainContainerStyles>
			<ProfileIconsContainer>
			<Boop rotation={20} timing={200}><IoChevronBackOutline /></Boop><Boop rotation={20} timing={200}> <IoEllipsisVerticalSharp /></Boop> 
			</ProfileIconsContainer>
			<h2 className="profile__h2">Profile</h2>
			<div className="profile__img-container">
				<img src={user?.picture} alt="profile imagen" />
				<span className="profile__span-email">{user?.email}</span>
				<h3 className="profile__h3-name">{user?.name}</h3>
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


