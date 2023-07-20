import { GlobalPrivatePageStyles } from '../../global'
import { Footer, SideBar, ProfileMainContainer } from '../../components'


const ProfilePage = () => {
  return (
    <GlobalPrivatePageStyles>
      <SideBar/>
      <ProfileMainContainer/>
      <Footer/>
    </GlobalPrivatePageStyles>
  )
}

export default ProfilePage