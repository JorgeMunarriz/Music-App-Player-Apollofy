import { ProfileIconsContainer, ProfileMainContainerStyles } from './profileMainContainer.styles'
import { IoChevronBackOutline, IoEllipsisVerticalSharp } from "react-icons/io5";
import profileImg from '../../assets/img/perfil de prueba.jpg'

export const ProfileMainContainer = () => {
  return (
    <ProfileMainContainerStyles>
<ProfileIconsContainer ><IoChevronBackOutline/> <IoEllipsisVerticalSharp/></ProfileIconsContainer>
           <h2 className='profile__h2'>Profile</h2>
           <div className='profile__img-container'>
          <img src={profileImg} alt="profile imagen" />
          <span className='profile__span-email'>hora29py@gmail.com</span>
          <h3 className='profile__h3-name'>Seo Moldes</h3>
          <div className='profile__numbers-container'>
            <span  className='profile__span-numbers'>778</span>
            <span  className='profile__span-numbers'>243</span>
            </div>
          <div  className='profile__followers-container'>
            <span  className='profile__span-followers'>Followers</span>
            <span  className='profile__span-followers'>followed</span>
            </div>
           </div>

    </ProfileMainContainerStyles>
  )
}
