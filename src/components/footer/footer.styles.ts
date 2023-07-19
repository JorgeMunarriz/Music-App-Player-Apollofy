import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.2); 
  border-radius: 0.25rem;
  grid-area: 5 / 1 / 6 / 7;
  width: 100%;
  height: 100%; 

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-area: 5 / 1 / 6 / 7;
    width: 100%;
    height: 100%;
    display: flex;
    flex-shrink: 1;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    grid-area: 5 / 1 / 6 / 7;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 5 / 2 / 6 / 7;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-shrink: 1;
    justify-content: center;
    align-items: center;
    grid-area: 5 / 2 / 6 / 6;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
  }
`;
