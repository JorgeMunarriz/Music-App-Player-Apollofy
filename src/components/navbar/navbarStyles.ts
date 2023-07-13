import styled from 'styled-components';

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
padding: 1rem;


`;
export const Navbarleft = styled.div`
display: flex;
align-items: center;
 flex: 0.5;
 gap: 1rem;
 min-width: 3.5rem;
 border-radius: 1rem;
 color: #181818;
padding: 10px
& input {
    border: 1px solid #181818;
     width: 100%;
}
& svg {
    color: rgb(135,146,148);
    cursor:pointer;
}
`;
export const NavbarRight = styled.div`
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



