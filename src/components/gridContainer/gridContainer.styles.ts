import styled from "styled-components";

export const GridContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: aliceblue;
  height: 100vh;
`;