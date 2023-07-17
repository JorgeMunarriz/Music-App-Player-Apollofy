import { ProfilePageStyles } from '..'
import { Footer, SideBar } from '../../components'
import { ProfileMainContainer } from '../../components/profileMainContainer/ProfileMainContainer'


export const ProfilePage = () => {
  return (
    <ProfilePageStyles>
      <SideBar/>
      <Footer/>
      <ProfileMainContainer/>
    </ProfilePageStyles>
  )
}
