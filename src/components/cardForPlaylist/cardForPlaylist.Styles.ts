import styled from "styled-components";

export const CardForPlaylistStyles = styled.div`
display: flex;
box-shadow: 0px 10px 43px -3px rgba(0,0,0,0.1);


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
