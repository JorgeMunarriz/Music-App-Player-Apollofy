import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
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
& svg {
    color: rgb(135,146,148);
    cursor:pointer;
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
    color: rgb(135,146,148);
 }
 & svg {
    color: rgb(135,146,148);
    cursor:pointer;
}
`;


