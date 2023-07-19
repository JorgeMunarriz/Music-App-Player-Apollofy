import { GlobalPageStyles } from '../../global'
import { Footer, SideBar, ProfileMainContainer } from '../../components'


export const ProfilePage = () => {
  return (
    <GlobalPageStyles>
      <SideBar/>
      <ProfileMainContainer/>
      <Footer/>
    </GlobalPageStyles>
  )
}
