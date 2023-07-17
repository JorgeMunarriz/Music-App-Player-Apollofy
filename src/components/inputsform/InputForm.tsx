
import { InputStyles } from './inputForm.styles'
import {ChangeEventHandler} from 'react';

type InputProps = {
  placeholder:string;
  type:string;
  value:string;
  name:string;
  handleChange:ChangeEventHandler<HTMLInputElement>
}

export const InputForm = ({placeholder, type, value, name, handleChange }:InputProps ) => {
  return (
    <InputStyles  placeholder={placeholder} type={type} value={value} name={name} onChange={handleChange}   />
  )
}
