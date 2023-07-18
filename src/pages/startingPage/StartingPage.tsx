import { Link } from 'react-router-dom'
import { ButtonRedMediun, Logo } from '../../components'
import { Title } from '../../global/title/Title'
import { StartingPageStyles } from '..'

export const StartingPage = () => {
  return (
    <StartingPageStyles>
      <Logo />
      <ButtonRedMediun ><Link to="/register">Register</Link></ButtonRedMediun>
      <ButtonRedMediun ><Link to="/login">Log in</Link></ButtonRedMediun>
      <Title />     
    </StartingPageStyles>
  )
}
