import { Player } from '..'
import { FooterStyles } from './footer.styles'

export const Footer = () => {
  console.log('renderiza el Footer')
  return (
    <FooterStyles>
      <Player />
    </FooterStyles>
  )
}
