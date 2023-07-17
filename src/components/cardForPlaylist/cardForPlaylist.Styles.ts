import styled from "styled-components";

export const CardForPlaylistStyles = styled.div`
  display: flex;
  box-shadow: 12px 13px 15px 6px rgba(0, 0, 0, 0.8), 29px 36px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: rgba( 50, 50, 50, 0.4);
  border-radius: 3rem;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  transition: all 0.3s;
  &:hover{
    background-color: rgba( 0, 0, 0, 0.2);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 3rem 3rem ;
  }
  & .card-container {
    display: flex;
    flex-direction: row;
    width: 300px;
    gap: 1rem;
  }
  & .card-body {
    display: flex;
    flex-direction: column;
    color: black;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    gap: 1rem;
    
  }`
;
