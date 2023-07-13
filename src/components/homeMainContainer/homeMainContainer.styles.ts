import styled from 'styled-components';

export const HomeMainContainerStyles = styled.div`

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
  grid-area: 1 / 2 / 5 / 6;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, 1);
  border: 1px solid rgba(66, 66, 66, 0.4);
  border-radius: 0.25rem;
}

@media only screen and (min-width : 1025px) {
  grid-area: 1 / 2 / 5 / 6;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, 1);
  border: 1px solid rgba(66, 66, 66, 0.4);
  border-radius: 0.25rem;
}

`;