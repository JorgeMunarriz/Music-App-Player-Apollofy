import React from 'react'
import { SidebarStyles } from './sidebar.styles'
import { ContainerButtonsSidebar } from './ContainerButtonsSidebar'
import logo from '../../assets/img/logo-homepage.png'

export const SideBar = () => {
  return (
    <SidebarStyles>
    <img src={logo}/>
    <ContainerButtonsSidebar />
    


    </SidebarStyles>
  )
}
