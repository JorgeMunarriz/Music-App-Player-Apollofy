import styled from 'styled-components';

export const HomeMainContainerStyles = styled.main`



border-radius: 0.25rem;
grid-area: 1 / 1 / 5 / 7;
background: linear-gradient(#340034, #000);


@media only screen and (min-width: 480px) and (max-width: 768px) {
  grid-area: 1 / 1 / 5 / 7;
  
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  grid-area: 1 / 2 / 5 / 7;
  
  width: 100%;
  height: 100%;
}

@media only screen and (min-width : 1024px) {
  grid-area: 1 / 2 / 5 / 7;
  
  grid-template-rows: 1fr 4fr 4fr;  
  width: 100%;
  height: 100%;
  overflow: hidden;
}`

;


