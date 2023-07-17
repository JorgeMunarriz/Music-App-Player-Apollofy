
import { useNavigate } from "react-router";
import { Button } from "../buttonsLogin/Button";
import { InputForm } from '../inputsform/InputForm';
import { LoginContainer } from "./loginContainer.styles";
import  { useState, ChangeEventHandler, MouseEventHandler } from "react";
import { UserFormState, UserFormProps } from "../../types/authContext";




type User = UserFormState & { id:number }

const InitialValue:UserFormState = {
  id:Date.now(),
  name: '',
  password: '',
  isLogged: true
}
export const Login = () => {

<<<<<<< HEAD
  const [form, setForm] = useState(InitialValue);
  // const [users ,setUsers] = useState<User[]>([])

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
=======
  const { login, logout, user } = useDataUser();
  const handleChangeCurrentUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUser(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentUser.trim() === "" || password.trim() === "") {
      console.log("Please, input fields are required");
      return;
    }
    // const foundUser = Users.find((obj))
    // login(currentUser)
    console.log(event.target);
>>>>>>> 864eb50b3ac6677deb205ae5c1e9d97ebf486d7b
  };
 
  return (
    <>
<<<<<<< HEAD
      <LoginContainer>
        <h2 className="logincontainer__h2">Log In </h2>

        <div className="logincontainer__div">
          <label htmlFor="userName">User name</label>
          <InputForm placeholder="Insert user name" type="text" name='name' handleChange={handleChange} value={form.name} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <InputForm placeholder="Insert user password" type="password" name='password' handleChange={handleChange} value={form.password} />
        </div>
        <Button handleClick={handleClick}>
          Log In
        </Button>
=======
      <LoginContainer action="" onSubmit={handleSubmit}>
        <div className="blur-div">
          <h2 className="logincontainer__h2">Log In </h2>

          <div className="logincontainer__div">
            <label htmlFor="userName">User name</label>
            <InputStyles placeholder="Insert user name" type="text" onChange={handleChangeCurrentUser} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <InputStyles placeholder="Insert user password" type="password" onChange={handleChangePassword} />
          </div>
          <button className="btn-log-in" type="submit">Log In</button>
        </div>
>>>>>>> 864eb50b3ac6677deb205ae5c1e9d97ebf486d7b
      </LoginContainer>
    </>
  );
};
