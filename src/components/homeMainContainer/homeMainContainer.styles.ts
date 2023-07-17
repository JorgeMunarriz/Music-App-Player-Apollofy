import styled from 'styled-components';

export const HomeMainContainerStyles = styled.main`
overflow-y: auto;
background-color: rgba(50, 50, 50, 1);
 border: 1px solid rgba(66, 66, 66, 0.4);
 border-radius: 0.25rem;

@media only screen and (min-width : 320px) and (max-width : 480px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 1 / 5 / 7;
  
}

@media only screen and (min-width: 481px) and (max-width: 767px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 1 / 5 / 7;
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 2 / 5 / 7;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width : 1025px) {
  background-color: rgba(0, 0, 0,0.8);
  grid-area: 1 / 2 / 5 / 7;
  width: 100%;
  height: 100%;
}

`;









