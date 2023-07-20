import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    height: 10%;
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 1rem;

    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 0.25rem;

    & svg{
        font-size: 1.5rem;
    color:  rgba(255, 255, 255, 1);
    cursor: pointer;
    }
    
    @media (height < 500px) {
        grid-column: 1 / -1;
        position: relative;
        display: flex;
        align-items: flex-start;
        width: 100%;
    }
`;


export const SearchBarLeft = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 0.8;
    min-width: 3.5rem;
    border-radius: 1rem;

& input {
    width: 100%;
    height: 3rem;
    padding-left: 3rem;
    padding-right:1rem;
    border: 1px solid rgba(66, 66, 66, 0.4);
    border-radius: 1.5rem;
}
& svg{
color: rgb(135,146,148);
    cursor:pointer;
}
@media (height < 500px) {
    position: relative;
    display: flex;
    align-items: start;
    width: 100%;
}
`;

export const SearchBarIcon = styled.div`
  position: absolute;
  left: 10px; /* Posición del icono dentro del input */
  top: 50%;
  transform: translateY(-50%);
`;

export const SearchBarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 3.5rem;
    border-radius: 1rem;
    padding: 10px;
 h4 {
    font-size: clamp(.8rem, 2.1rem, 2.5rem);
    color: rgb(135,146,148);
    cursor: pointer;
    transition: 0.3s ease-in-out;
 }
 h4:hover{
    color: #c9356c;
 }
 & svg {
    font-size: clamp(.8rem, 2.3rem, 3rem);
    color:  rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: 0.3s ease-in-out;
}
svg:hover{
    color: #c9356c;
}
@media (height < 500px) {
    display:none;
}
`;



