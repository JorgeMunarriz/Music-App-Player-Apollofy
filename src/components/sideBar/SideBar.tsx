import { SidebarStyles } from './sidebar.styles'
import { HomeSectionContainer } from './homeSection/HomeSectionContainer'
import logo from '../../assets/img/logo-homepage.png'
import { PlaylistSectionContainer } from './playlistSection/PlaylistSectionContainer'
import { FavoritesSectionContainer } from './favoritesSection/FavoritesSectionContainer'



export const SideBar = () => {


  
  return (
    <SidebarStyles>
      <div className='sidebar__div'>
      <img src={logo} alt='logo' className="sidebar__div-img desktop-class"/>
      </div>
      <div className='sidebar__sections'>
        <HomeSectionContainer/>
        <PlaylistSectionContainer/>
        <FavoritesSectionContainer/>
      </div>
    </SidebarStyles>
  )
}
