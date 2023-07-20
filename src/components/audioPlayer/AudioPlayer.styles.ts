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
        font-size: 3rem; 
        color: var(--color-text-pink);
      }
    }
    &_additional-controls {
        &-button {
          font-size: 1px; 
        }
      }
}
  @media (width < 480px) {
    .rhap {
      &_main-controls {
        display:flex;
        align-items: center;
        justify-content: center;
      }
      // &_additional-controls {
      //   display:none;
      // }
      // &_volume-container {
      //   display:none;
      // }
      }
    }

  
`;





