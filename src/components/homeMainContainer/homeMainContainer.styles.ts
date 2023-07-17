import styled from 'styled-components';

export const HomeMainContainerStyles = styled.main`

background-color: rgba(50, 50, 50, 0.6);
border: 1px solid rgba(66, 66, 66, 0.4);
border-radius: 0.25rem;
overflow-y: auto;

background-color: green;



@media only screen and (min-width : 320px) and (max-width : 480px) {
  
  grid-area: 1 / 1 / 5 / 7;
  
}

@media only screen and (min-width: 481px) and (max-width: 767px) {
  
  grid-area: 1 / 1 / 5 / 7;
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  
  grid-area: 1 / 2 / 5 / 7;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width : 1025px) {
  
  grid-area: 1 / 2 / 5 / 7;
  width: 100%;
  height: 100%;


}

`;









