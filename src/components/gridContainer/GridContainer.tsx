
import { FC, ReactNode } from 'react'
import { SideBar,  GridContainerStyles, ContainerMain, Footer } from '..'

export const GridContainer = ({children}: {children: ReactNode}) => {
  return (
    <GridContainerStyles>
        {children}
    </GridContainerStyles>
  )
}
