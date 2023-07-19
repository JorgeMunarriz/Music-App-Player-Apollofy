import { ReactNode } from 'react'
import { GridContainerStyles } from '..'

export const GridContainer = ({children}: {children: ReactNode}) => {
  return (
    <GridContainerStyles>
        {children}
    </GridContainerStyles>
  )
}
