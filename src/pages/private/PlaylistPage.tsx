
import { Footer,   PlaylistMainContainer,   SideBar } from '../../components'
import { GlobalPrivatePageStyles } from '../../global'


 const PlaylistPage = () => {
  return (
    <GlobalPrivatePageStyles>
      <SideBar/>
        <PlaylistMainContainer/>
      <Footer/>
    </GlobalPrivatePageStyles>
  )
}
export default PlaylistPage