import styled from 'styled-components';

export const GlobalPrivatePageStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(3, 2fr) repeat(2, 1fr);
	gap: 0.25rem;
	padding: 0.25rem;
	background-color: black;
	height: 100vh;

	@media (320px < width < 480px) {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		height: 100vh;
	}

	@media (480px < width < 768px) {
		display: grid;
		grid-template-rows: repeat(3, 2fr) repeat(2, 1fr);
		height: 100vh;
	}

	@media (768px < width < 1024px) {
		grid-template-rows: repeat(5, 1fr);
		grid-template-columns: repeat(4, 2fr) 1fr;
	}

	@media (width > 1024px) {
		grid-template-rows: repeat(5, 1fr);
		grid-template-columns: repeat(4, 2fr) 1fr;
	}
`;
