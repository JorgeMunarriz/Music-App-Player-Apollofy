import { GlobalPrivatePageStyles } from '../../global'
import { Footer, SideBar, ProfileMainContainer } from '../../components'


export const ProfilePage = () => {
  return (
    <GlobalPrivatePageStyles>
      <SideBar/>
      <ProfileMainContainer/>
      <Footer/>
    </GlobalPrivatePageStyles>
  )
}
