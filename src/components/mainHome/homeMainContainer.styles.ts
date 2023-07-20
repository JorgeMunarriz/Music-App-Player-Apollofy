import styled from 'styled-components';

export const HomeMainContainerStyles = styled.main`
grid-area: 1 / 1 / 5 / 7;
display: flex;
flex-direction: column;

border-radius: 0.25rem;
background: linear-gradient(#340034, #000);





@media (320px < width < 480px) {
  grid-area: 1 / 1 / 5 / 7;


}

@media (480px < width < 768px) {
  grid-area: 1 / 1 / 5 / 7;
  
  
}

@media (768px < width < 1024px) {
  grid-area: 1 / 2 / 5 / 7;
  
  width: 100%;
  height: 100%;


}

@media (width > 1024px) {
  grid-area: 1 / 2 / 5 / 7;
  
  width: 100%;
  height: 100%;


}`


