import styled from 'styled-components';
import backGroundImage from "../../assets/img/Crowd.webp";

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  background-image: url(${backGroundImage});
  background-color: red;
  width: 100vw;
height: 100vh;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;


  & .logincontainer__h2{
    color: #E85973;
    font-size: 3rem;
  }
  & div{

  }

  & label{
    color: #000;
    font-size: 2rem;
  }

`;