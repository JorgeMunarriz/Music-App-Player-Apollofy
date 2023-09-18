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
    width: clamp(200px, 100rem, 650px);
    min-height: 200px;
    max-height: 500px;
    overflow-y: auto;

    &_close_button {
      position: absolute;
      top: 2rem;
      right: 10px;
      cursor: pointer;
      color: brown;
    }
  }
`;
