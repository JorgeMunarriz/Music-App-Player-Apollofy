import styled from "styled-components";

export const GridContainerStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr) 100px;
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 767px) {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr) 100px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr) 100px;
  }

  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr) 100px;
  }
`;
