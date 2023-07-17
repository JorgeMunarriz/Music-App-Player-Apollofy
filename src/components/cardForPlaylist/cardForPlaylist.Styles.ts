import styled from "styled-components";

export const CardForPlaylistStyles = styled.div`
img {
  width: 100px;
  height: 100px;
}
 & .card-container {
    display: flex;
    flex-direction: row;
    max-width: 40%;
    background: white;
    width: 300px;
    height: 50px;
  }
 & .card-body {
    display: flex;
    flex-direction: column;
    color: black;
  }
`;
