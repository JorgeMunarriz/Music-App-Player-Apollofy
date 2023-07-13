import styled from "styled-components";

export const GridContainerStyles = styled.div`
background-color: rgba(0, 0, 0, 0.8);

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: grid;
  grid-template-rows: 1fr 3fr 3fr 3fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
}

@media (min-device-width: 481px) and (max-device-width: 767px) {
  display: grid;
  grid-template-rows: 1fr 3fr 3fr 3fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
}

@media only screen and (min-width : 1025px) {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
}
`;
