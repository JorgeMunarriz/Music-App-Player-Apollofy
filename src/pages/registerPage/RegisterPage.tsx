
import { Button } from "../../components/buttonsLogin/Button"
import { Logo, RegisterSection } from "../../components"
import { RegisterPagestyle } from "./registerPage.styles"
import { Title } from "../../global/title/Title"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    
      <RegisterPagestyle>
      <Logo />
      <RegisterSection/>
      <Title />
      </RegisterPagestyle>
      
      
    

  )
}
