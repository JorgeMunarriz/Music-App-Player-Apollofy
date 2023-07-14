import styled from 'styled-components';

export const PlaylistSectionContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    /* font-size: 2rem; */

  & a {
    width: 100%;
    padding: 10px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
}
& a:hover {
    border-radius: 6px;
    background: #282828;
    padding: 10px;
    color: rgba(255, 255, 255, 1);
}

`;


