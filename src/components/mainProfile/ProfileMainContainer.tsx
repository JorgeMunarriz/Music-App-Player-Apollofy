import {ProfileIconsContainer, ProfileMainContainerStyles} from './profileMainContainer.styles';
import {IoChevronBackOutline, IoEllipsisVerticalSharp} from 'react-icons/io5';
import { Boop } from '../../animations/boopAnimation';
import  perfilPrueba  from '../../assets/img/perfil de prueba.jpg';
import { UserFormState } from '../../types/authContext';



export const ProfileMainContainer = () => {
	const data: UserFormState = JSON.parse(localStorage.getItem('form') as keyof object) || '';
	const {name} = data;
	return (
		<ProfileMainContainerStyles>
			<ProfileIconsContainer>
			<Boop rotation={20} timing={200}><IoChevronBackOutline /></Boop><Boop rotation={20} timing={200}> <IoEllipsisVerticalSharp /></Boop> 
			</ProfileIconsContainer>
			<h2 className="profile__h2">Profile</h2>
			<div className="profile__img-container">
				<img src={perfilPrueba} alt="profile imagen" />
				<span className="profile__span-email">hora29py@gmail.com</span>
				<h3 className="profile__h3-name">{name}</h3>
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


