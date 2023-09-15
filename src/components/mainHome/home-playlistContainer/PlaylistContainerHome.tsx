import { lazy, Suspense, LazyExoticComponent, ComponentType } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

import styled from "styled-components";

import HomeSkeleton from '../../../assets/skeleton/homeSkeleton';
import { useUserMusicContext } from '../../../context';

const LazyCardPlaylistHome: LazyExoticComponent<ComponentType<any>> = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve(import("../../Cards/CardForPlaylist"));
		}, 2000);
	});
});


type ProprQuery = {
	query: string;
};


export const PlaylistContainerHome = ({ query }: ProprQuery) => {
	// const data = useContext(DataMusicContext);
	// const tracks = data?.data?.tracks?.sort((elemA: { reproductions: number; }, elemB: { reproductions: number; }) => elemB.reproductions - elemA.reproductions);
	const { playlistsLiked } = useUserMusicContext();

	console.log('AAAAQQQUIIIIII')
	console.log(playlistsLiked)

	return (
		<TracksContainerStyles>
			<h1>Playlists</h1>
			{playlistsLiked && (
				<Swiper navigation pagination slidesPerView={3} spaceBetween={10} className="mySwiper">
					{playlistsLiked &&
						playlistsLiked
							.filter(({ playlistName }) => {
								if (!query) return true;
								if (query) {
									const nameLowerCase = playlistName.toLowerCase();
									return nameLowerCase.includes(query.toLowerCase());
								}
							})
							.map(({ id, playlistName, playlistImage, trackId }) => (
								<SwiperSlide key={id}>
									<Suspense key={id} fallback={<HomeSkeleton />}><LazyCardPlaylistHome id={id} playlistImage={playlistImage} playlistName={playlistName} trackId={trackId} /></Suspense>
								</SwiperSlide>
							))}
				</Swiper>
			)}
		</TracksContainerStyles>
	);
};



const TracksContainerStyles = styled.div`
  		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
    	height: 100vh;
		
 
		& h1 {
			font-size: 35px;
			color: white;
			align-items: flex-start;
			margin-top: 1.5rem;
			margin-bottom: 1rem;
			margin-left: 1.5rem;
			opacity: 0.9;
}
		.mySwiper{
		height: 70%;
		width: 100%;
		.swiper-wrapper{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin: 10px;
			padding: 1.5rem;
			.swiper-slide{
				margin: 0;
				padding: 0;
				margin-top: 0!important;
				margin-right: 0!important;
			}
		}      
		.swiper-pagination-bullet {
			width: 20px;
			height: 10px;
			border-radius: 10px;
			transition: all 0.3s;
			background-color: black;
			left: 0;
    /* width: 100%; */
    		top: 200px;
			
		}
		.swiper-pagination-bullet-active {
			background: #f8f7f9;
			width: 30px;
			height: 10px;
			
		}
		.swiper-button-prev, .swiper-button-next{
			width: 30px;
			height: 10px;

			}
			.swiper-button-prev:hover,
			.swiper-button-next:hover {
			color: #9d0b28;
			}
			.swiper-pagination {
		
		}}
`;
