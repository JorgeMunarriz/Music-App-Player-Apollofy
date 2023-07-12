import React from 'react'
import { LinkButtonStyles } from '..'

export const LinkButton = ({title, icon, to}: any) => {
  return (
    <LinkButtonStyles title={title} icon={icon} to={to} />
  )
}
