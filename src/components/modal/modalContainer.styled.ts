import styled from "styled-components";

export const ModalContainer = styled.article`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: clamp(70vw, 100%, 100%);
  min-height: 100vh;
  background-color: rgb(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    position: relative;
    padding: 1rem;
    width: clamp(200px, 100rem, 450px);
    min-height: 200px;
    max-height: 500px;
    overflow-y: auto;

    &_close_button {
      position: absolute;
      top: 2rem;
      right: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      color: brown;
      background-color: rgba(250, 250, 250, 0.75);
      border: 1px solid rgba(0, 0, 0, 0.75);
      transition: all 0.2s ease-in-out;

      &:hover{
        background-color: rgba(250, 250, 250, 1);
      }
    }
  }
`;
