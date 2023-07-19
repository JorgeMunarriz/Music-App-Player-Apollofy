import styled from "styled-components";

export const CardForPlaylistPlayerStyles = styled.div`


  
@media only screen and (min-width : 320px) and (max-width : 480px) {
  display: grid;
grid-template-columns: 0.5fr 1.5fr 0.3fr;
grid-template-rows: 1fr;
grid-column-gap: 30px;
  box-shadow: 15px 7px 19px -3px rgba(0,0,0,0.75);
  background-color: rgb(10,10,10);
  border-radius: 2rem;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  width: 80%;
  padding: 5px;
  color: whitesmoke;
    font-weight: bold;
  &:hover{
    
    background-color: rgba( 50, 50, 50, 0.4);
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius:50% ;
  }

  & .card-container {
    display: flex;
    flex-direction: row;
    width: 70%;
    gap: 1rem;
  }

  & .playlist-description{
    display: none;
  }

  & .follow_btn{
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
  }
  
  & .full-heart{
    color: #E85973;
    
  }
 
  
}

@media only screen and (min-width: 481px) and (max-width: 767px) {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
    box-shadow: 15px 7px 19px -3px rgba(0,0,0,0.75);
    background-color: rgb(10,10,10);
    border-radius: 2rem;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    width: 80%;
    padding: 5px;
    color: whitesmoke;
      font-weight: bold;
    &:hover{
     
      background-color: rgba( 50, 50, 50, 0.4);
      cursor: pointer;
    }
  
    img {
      width: 50px;
      height: 50px;
      border-radius:50% ;
    }
  
    & .card-container {
      display: flex;
      flex-direction: row;
      width: 70%;
      gap: 1rem;
    }
  
    & .playlist-description{
      display: none;
    }
  
    & .follow_btn{
      width: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23px;
      height: 23px;
    }
    
    & .full-heart{
      color: #E85973;
      
    }
   
 
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  display: grid;
grid-template-columns: 0.5fr repeat(2, 1fr) 0.3fr;
grid-template-rows: 1fr;
grid-column-gap: 30px;
  box-shadow: 15px 7px 19px -3px rgba(0,0,0,0.75);
  background-color: rgb(10,10,10);
  border-radius: 2rem;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  width: 80%;
  padding: 5px;
  color: whitesmoke;
    font-weight: bold;
  &:hover{
 
    background-color: rgba( 50, 50, 50, 0.4);
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius:50% ;
  }

  & .card-container {
    display: flex;
    flex-direction: row;
    width: 70%;
    gap: 1rem;
  }

  & .follow_btn{
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
  }
  
  & .full-heart{
    color: #E85973;
    
  }
  
}

@media only screen and (min-width : 1025px) {
  display: grid;
grid-template-columns: 0.5fr repeat(2, 1fr) 0.3fr;
grid-template-rows: 1fr;
grid-column-gap: 30px;
  box-shadow: 15px 7px 19px -3px rgba(0,0,0,0.75);
  background-color: rgb(10,10,10);
  border-radius: 2rem;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  width: 80%;
  padding: 5px;
  color: whitesmoke;
    font-weight: bold;
  &:hover{
    
    background-color: rgba( 50, 50, 50, 0.4);
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius:50% ;
  }

  & .card-container {
    display: flex;
    flex-direction: row;
    width: 70%;
    gap: 1rem;
  }

  & .follow_btn{
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
  }
  
  & .full-heart{
    color: #E85973;
    
  }
 
}
 `
