import styled from 'styled-components';

export const FooterStyles = styled.footer`


	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		background-color: rgba(0, 0, 0, 0.8);
		grid-area: 5 / 1 / 6 / 7;
		width: 100%;
  		height: 100%;
		border: 1px solid rgba(66, 66, 66, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-device-width: 481px) and (max-device-width: 767px) {
		background-color: rgba(0, 0, 0, 0.8);
		grid-area: 5 / 1 / 6 / 7;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: 5 / 1 / 6 / 6;
		width: 100%;
		height: 100%;
		background-color: rgba(50, 50, 50, 1);
		border: 1px solid rgba(66, 66, 66, 0.4);
		border-radius: 0.25rem;
	}

	@media only screen and (min-width: 1025px) {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: 5 / 1 / 6 / 6;
		width: 100%;
		height: 100%;
		background-color: rgba(50, 50, 50, 1);
		border: 1px solid rgba(66, 66, 66, 0.4);
		border-radius: 0.25rem;
	}
`;
