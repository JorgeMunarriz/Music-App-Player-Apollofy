import styled from "styled-components";

export const FooterStyles = styled.footer`
  background-color: rgba(50, 50, 50, 0.2);
  border: 1px solid rgba(66, 66, 66, 0.4);
  border-radius: 0.25rem;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-area: 5 / 1 / 6 / 7;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(66, 66, 66, 0.4);
    display: flex;
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
    grid-area: 5 / 1 / 6 / 7;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 0.25rem;
  }

  @media only screen and (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 5 / 1 / 6 / 6;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 0.25rem;
  }
`;
