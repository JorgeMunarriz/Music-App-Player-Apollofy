import styled from "styled-components";

export const ButtonLogin = styled.button`
  font-size: 2rem;
  border: 1px solid #e85973;
  border-radius: 15px;
  background-color: #e85973;
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:hover {
    background-color: #e84050;
    transform: scale(1.05);
    opacity: 0.7;
  }
`;

export const ButtonRedMediun = styled.button`
  font-size: 2rem;
  border: 1px solid #e85973;
  border-radius: 15px;
  background-color: #e85973;
  color: rgba(255, 255, 255, 0.9);
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: rgba(255, 255, 255, 0.8);
  }
 
  &:hover {
    background-color: #e84050;
    transform: scale(1.05);
    opacity: 0.7;
    a{
    color: rgba(255, 255, 255, 0.9);
  }
  }
`;
