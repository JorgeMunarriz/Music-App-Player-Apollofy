import styled from 'styled-components';

export const PlaylistContainerStylesNew = styled.main`

display: flex;
 flex-wrap: wrap;
 overflow-y: auto;
 justify-content: space-around;
 height: 100%;
 width: 100%;
 gap: 1.5rem;
 padding: 1.5rem 0;
 background: linear-gradient(#340034, #000);
 border-radius: 0.25rem;


@media only screen and (min-width : 320px) and (max-width : 480px) {
  grid-area: 1 / 1 / 5 / 7;
  
  
}

@media only screen and (min-width: 481px) and (max-width: 767px) {
  grid-area: 1 / 1 / 5 / 7;
  
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  grid-area: 1 / 2 / 5 / 7;
  
  width: 100%;
  height: 80vh;
}

@media only screen and (min-width : 1025px) {
  grid-area: 1 / 2 / 5 / 7;
  display: grid;
  grid-template-rows: 1fr ;

  
  width: 100%;
  height: 80vh;
}`

;


