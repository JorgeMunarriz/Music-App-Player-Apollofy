
import { Footer,   PlaylistMainContainer,   SideBar } from '../../components'
import { GlobalPrivatePageStyles } from '../../global'


export const PlaylistPage = () => {
  return (
    <GlobalPrivatePageStyles>
      <SideBar/>
        <PlaylistMainContainer/>
      <Footer/>
    </GlobalPrivatePageStyles>
  )
}
