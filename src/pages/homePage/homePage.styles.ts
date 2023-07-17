import styled from 'styled-components';


export const HomePageStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(4, 2fr) repeat(2, 1fr);
  gap: 0.25rem;
  padding: 0.25rem;
  background-color: black;
  height: 100vh;

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: grid;
  grid-template-rows: 2fr 2fr 2fr 2fr 1fr 2fr;
  grid-template-columns: repeat (6, 1fr);
  height: 100vh;
}

@media only screen and (min-device-width: 481px) and (max-device-width: 767px) {
  display: grid;
  grid-template-rows: 2fr 2fr 2fr 2fr 1fr 2fr;
  grid-template-columns: repeat (6, 1fr);
  height: 100vh;
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 2fr) 1fr;
}

@media only screen and (min-width : 1025px) {
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 2fr) 1fr;
}
`;

