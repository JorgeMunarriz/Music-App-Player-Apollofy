import styled from 'styled-components';


export const ReproPageStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 2fr) 1fr;
  gap: 0.25rem;
  padding: 0.25rem;
  background-color: black;
  height: 100vh;

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  
}

@media (min-device-width: 481px) and (max-device-width: 767px) {
  
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {

}

@media only screen and (min-width : 1025px) {
  
}
`;