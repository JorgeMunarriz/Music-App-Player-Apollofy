import styled from 'styled-components';

export const HomeSectionContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
& a {
    display: flex;
    align-items: center;
    gap: 1rem;
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
