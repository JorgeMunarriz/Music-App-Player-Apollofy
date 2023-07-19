import { Link } from 'react-router-dom'
import { ButtonRedMediun, Logo } from '../../components'
import { GlobalRegularPageStyles, Title } from '../../global';

export const StartingPage = () => {
  return (
    <GlobalRegularPageStyles>
      <Logo />
      <ButtonRedMediun ><Link to="/register">Register</Link></ButtonRedMediun>
      <ButtonRedMediun ><Link to="/login">Log in</Link></ButtonRedMediun>
      <Title />
    </GlobalRegularPageStyles>
  )
}
