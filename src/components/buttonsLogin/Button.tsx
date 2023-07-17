import { ButtonLogin } from "./button.styles"
import {MouseEventHandler} from 'react';



type ButtonProps = {
  children:React.ReactNode
  handleClick: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({children, handleClick}: ButtonProps)=> {



  return (
    
    <ButtonLogin onClick={handleClick} >
       
       { children }

    </ButtonLogin>

        
  )
}
