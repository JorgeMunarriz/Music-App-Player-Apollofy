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

// @media (${breakpoints.min}px <= width <= ${breakpoints.mobileMax}px) 
		
// @media (${breakpoints.mobileMax}px < width <= ${breakpoints.tabletMax}px)

// @media (${breakpoints.tabletMax}px < width <= ${breakpoints.laptopsMax}px)

// @media (${breakpoints.laptopsMax}px < width <= ${breakpoints.desktopMax}px)

// @media (width > ${breakpoints.desktopMax}px)


`;