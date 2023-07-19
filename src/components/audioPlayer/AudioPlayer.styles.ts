import styled from 'styled-components';

export const AudioPlayerStyles = styled.div`
.rhap {
  &_container {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0;
    border: none;   
     
  }
  &_progress-bar{
    background-color: #000;
  }
  &_main-controls {
    
      &-button {
        font-size: 3rem; /* Ajusta el tamaño de los botones principales */
        color: var(--color-text-pink);
      }
    }
    &_additional-controls {
        &-button {
          font-size: 1px; /* Ajusta el tamaño de los botones*/
        }
      }
}
  
`;





