import styled from 'styled-components';

export const ProfileMainContainerStyles = styled.main`
 display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;

& img {
object-fit: contain;
border-radius: 50%;
max-width: 13rem;
/* padding:0 0 2rem 0 ; */
transition: transform 0.3s ease-in-out;
cursor: pointer;
}

& img:hover {
  transform: scale(0.9);
}
  .profile__h2 {
    font-size: clamp(1.5rem, 3rem, 5rem);
    padding: 1.5rem 0;
  color: #E85973;
  }
  height: 100%;

.profile__img-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
padding: 2rem 0;

.profile__span-email{
    padding-top: 1rem;
    font-size: clamp(.8rem, 1.4rem, 2rem);
color: rgb(134,129,134);
  }

.profile__h3-name {
font-size: clamp(1.5rem, 2.5rem, 5rem);
color:  #E85973;
padding: 1.5rem 0;
}

.profile__numbers-container {
display: flex;
justify-content: space-around;
gap: 1rem;
width: 100%;

.profile__span-numbers{
    font-size: clamp(.8rem, 2.3rem, 3rem);
    color:  #E85973;
}

}
.profile__followers-container{
display: flex;
justify-content: space-around;
gap: 1rem;
width: 100%;
    .profile__span-followers{
        color: rgb(134,129,134);
        font-size: clamp(.8rem, 2rem, 2rem);
    }


}
}


@media only screen and (min-width : 320px) and (max-width : 480px) {
  grid-area: 1 / 1 / 5 / 7;
  
  
}

@media only screen and (min-width: 481px) and (max-width: 767px) {
  grid-area: 1 / 1 / 5 / 7;
  
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  grid-area: 1 / 2 / 5 / 7;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width : 1025px) {
  grid-area: 1 / 2 / 5 / 7;
  grid-template-rows: 1fr 4fr 4fr;

  
  width: 100%;
  height: 100%;
}

`;

export const ProfileIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
& svg {
    font-size: 1.5rem;
    color:  rgba(255, 255, 255, 1);
    cursor: pointer;
}
`;



