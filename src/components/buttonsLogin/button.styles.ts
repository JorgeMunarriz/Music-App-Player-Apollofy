import styled from 'styled-components';

export const ButtonLogin = styled.button`
  font-size: 2rem;
  border: 1px solid #E85973;
  border-radius: 15px;
  background-color: #E85973;
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: #E84050;
    transform: scale(1.05);
    opacity: 0.7;
  }

`;
