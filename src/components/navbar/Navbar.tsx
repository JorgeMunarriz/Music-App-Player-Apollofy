import { NavbarContainer, NavbarRight, Navbarleft } from "./navbarStyles"
import {BsSearch} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'


export const Navbar = () => {
  return (
    <NavbarContainer>
    <Navbarleft>
      <BsSearch/>
      <input type="search" name="search" placeholder="Search for Artists"/>
    </Navbarleft>

    <NavbarRight>
      <RxAvatar/>
      <h4>Horacio</h4>
    </NavbarRight>
    </NavbarContainer>
  )
}
