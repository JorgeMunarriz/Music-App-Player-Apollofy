import styled from 'styled-components';

export const PlayerStyles = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		.playerstyles__div__whole {

		}
		.playerstyles__img {
            width: 25px;
		}
		.playerstyles__info {
		}
		.playerstyles__div__buttons {
		}
	}

	@media (min-device-width: 481px) and (max-device-width: 767px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		.playerstyles__img {
            width: 30px;
		}
		.playerstyles__info {
		}
		.playerstyles__div__buttons {
		}
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		.playerstyles__img {
            width: 50px;
		}
		.playerstyles__info {
		}
		.playerstyles__div__buttons {
			width: 50px;
		}
	}

	@media only screen and (min-width: 1025px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		.playerstyles__div__whole {
			
		
		.playerstyles__img {
            width: 120px;
		}
		.playerstyles__info {
			display:flex;
			flex-direction: column;
			color: white;
		}
	}
		.playerstyles__div__buttons {
			width: 50px;

		}
	}
`;
