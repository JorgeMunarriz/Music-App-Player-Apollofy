import { Footer, SideBar } from '../../components'
import { ProfileMainContainer } from '../../components/profileMainContainer/ProfileMainContainer'
import { ReproPageStyles } from '../reproPage/reproPage.styles'


export const ProfilePage = () => {
  return (
    <ReproPageStyles>
      <SideBar/>
      <Footer/>
      <ProfileMainContainer/>
    </ReproPageStyles>
  )
}
