import { useDataUser } from "../../context/AuthContext";
import { Button } from "../buttonsLogin/Button";
import { InputForm } from "../inputsform/InputForm";
import { LoginContainer } from "./loginContainer.styles";
import { User } from "../../types/data";
import { InputStyles } from "..";
import React, { useState } from "react";

export const Login = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [password, setPassword] = useState("");

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
  };
  // login("jorge")
  return (
    <>
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
      </LoginContainer>
    </>
  );
};
