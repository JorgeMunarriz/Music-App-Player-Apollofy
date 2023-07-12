
import { Button } from "../buttonsLogin/Button";
import { InputForm } from "../inputsform/InputForm";
import { LoginContainer } from "./login.styles";


export const Login = () => {

  return (
    <>
      <LoginContainer action="">
        <h2 className="logincontainer__h2">Log In </h2>
       
        <div className="logincontainer__div">
          <label htmlFor="userName">User name</label>
          <InputForm placeholder="Insert user name" type="text"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <InputForm placeholder="Insert user password" type="password"/>
        </div>
        <Button text="Log in"/>
        
        
    </LoginContainer>
    </>
  );
};
