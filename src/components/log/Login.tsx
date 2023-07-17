import { useRef, useEffect } from 'react';
import { useNavigate } from "react-router";
import { Button } from "../buttonsLogin/Button";
import { InputForm } from '../inputsform/InputForm';
import { LoginContainer } from "./loginContainer.styles";
import  { useState, ChangeEventHandler, MouseEventHandler } from "react";
import { UserFormState } from "../../types/authContext";

type User = UserFormState & { id:number }

const InitialValue:UserFormState = {
  id:Date.now(),
  name: '',
  password: '',
  isLogged: true
}
export const Login = () => {

  const [form, setForm] = useState(InitialValue);
  const inputRef = useRef<HTMLInputElement>(null)
  // const [users ,setUsers] = useState<User[]>([])

  useEffect(() => {
    if(inputRef.current){
      inputRef.current.focus()
    }
  }, [])
  const navigate = useNavigate()

  const handleSubmit = (user:UserFormState) => {
    setForm({...form, id:Date.now()})
    // setUsers([...users, {...user, id:Date.now()}])
    localStorage.setItem('form',JSON.stringify(form))
    
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
      const name = target.name as keyof UserFormState
      setForm({...form, [name]: target.value})
     
  }

  const handleClick:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleSubmit(form)
    setForm(InitialValue)
    navigate('/home')
  };
 
  return (
    <>
      <LoginContainer>
        <h2 className="logincontainer__h2">Log In </h2>

        <div className="logincontainer__div">
          <label htmlFor="userName">User name</label>
          <InputForm inputRef={inputRef} placeholder="Insert user name" type="text" name='name' handleChange={handleChange} value={form.name} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <InputForm  placeholder="Insert user password" type="password" name='password' handleChange={handleChange} value={form.password} />
        </div>
        <Button handleClick={handleClick}>
          Log In
        </Button>
      </LoginContainer>
    </>
  );
};
