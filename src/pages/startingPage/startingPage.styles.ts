import styled from 'styled-components';
import backGroundImage from "../../assets/img/Crowd.webp";

export const StartingPageStyles = styled.div`
  
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(${backGroundImage});
background-color: red;
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
gap: 2.5rem;
  

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  
}

@media  only screen and  (min-device-width: 481px) and (max-device-width: 767px) {
  
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {

}

@media only screen and (min-width : 1025px) {
  
}
`;