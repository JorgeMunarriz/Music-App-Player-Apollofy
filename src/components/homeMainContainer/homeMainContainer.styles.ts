import styled from 'styled-components';

export const HomeMainContainerStyles = styled.main`


@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 1 / 5 / 7;
    
}

@media (min-device-width: 481px) and (max-device-width: 767px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 1 / 5 / 7;
  
}

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
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 2 / 5 / 6;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width : 1025px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 2 / 5 / 6;
  width: 100%;
  height: 100%;
}

`;









