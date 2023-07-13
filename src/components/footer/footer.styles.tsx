import styled from 'styled-components';

export const FooterStyles = styled.footer`

  
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-row: 2 / 3;
  grid-column: 1 / 6;
  border: 1px solid rgba(66, 66, 66, 0.4);
}

@media (min-device-width: 481px) and (max-device-width: 767px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-row: 2 / 3;
  grid-column: 1 / 6;
  border: 1px solid rgba(66, 66, 66, 0.4);
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 5 / 1 / 6 / 6; 
  width: 100%;
  height: 100%;
  border: 1px solid rgba(66, 66, 66, 0.4);
}

@media only screen and (min-width : 1025px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 5 / 1 / 6 / 6; 
  width: 100%;
  height: 100%;
  border: 1px solid rgba(66, 66, 66, 0.4);
}



`;


