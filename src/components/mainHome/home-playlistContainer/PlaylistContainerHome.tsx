/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { lazy, Suspense, LazyExoticComponent, ComponentType } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import HomeSkeleton from '../../../assets/skeleton/homeSkeleton';

import { useTrack } from '../../../context/TrackContext';

SwiperCore.use([Navigation, Pagination]);

const LazyCarPlaylistHome: LazyExoticComponent<ComponentType<any>> = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve(import("../../Cards/CardForPlaylistPlayerHome"));
		}, 2000);
	});
});

interface CardProps {
	id: string;
	trackName: string;
	trackUrl: string;
	trackImage: string
}

export const PlaylistContainerHome = () => {
	const { tracks } = useTrack();
	const { allTrack } = tracks;



	return (
		<PlaylistContainerStyles>
			<h1>Playlists</h1>

			{/* {{allTrack && (
				< Swiper navigation pagination slidesPerView={2} spaceBetween={5} modules={[Pagination]} className="mySwiper">
					{allTrack && allTrack.map(({ id, trackName,
						trackUrl,
						trackImage,
					}: CardProps) => (
						<SwiperSlide key={id}>
							<Suspense fallback={<HomeSkeleton />}><LazyCarPlaylistHome trackImage={trackImage} trackUrl={trackUrl} id={id} trackName={trackName} /></Suspense>
						</SwiperSlide>
					))}
				</Swiper>
			)
			}} */}
		</PlaylistContainerStyles >
	);
};





const PlaylistContainerStyles = styled.div`
		display: flex;
    	flex-wrap: wrap;
		align-items: center;
    	height: 40vh;
		/* background-color: red; */
		
 
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
			display: flex;
			/* flex-direction: column; */
			justify-content: space-between;
			height: 80%;
			width: 100%;
		.swiper-wrapper{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin: 0; 
		
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
    		top: 300px;
			
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
		
		}
}
`


