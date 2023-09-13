import styled from 'styled-components';


export const FavoritesSectionContainer = () => {
	return <FavoritesSectionContainerStyles className="desktop-class"></FavoritesSectionContainerStyles>;
};


export const FavoritesSectionContainerStyles = styled.div`
  display: flex;
  flex-direction: column;

	.desktop-class{
		display: none;
	}

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