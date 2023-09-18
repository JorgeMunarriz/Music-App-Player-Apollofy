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

const LazyCardAlbumHome: LazyExoticComponent<ComponentType<any>> = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve(import("../../Cards/CardForAlbum"));
		}, 2000);
	});
});


// interface CardProps {
// 	id: string;
// 	trackName: string;
// 	trackUrl: string;
// 	trackImage: string
// }

type ProprQuery = {
	query: string;
};


export const AlbumContainer = ({ query }: ProprQuery) => {

	const { albums } = useUserMusicContext();

	return (
		<TracksContainerStyles>
			<h1>Albums</h1>
			{albums && (
				<Swiper navigation pagination slidesPerView={3} spaceBetween={10} className="mySwiper">
					{albums &&
						albums
							// .filter(({ album }) => {
							// 	if (!query) return true;
							// 	if (query) {
							// 		const nameLowerCase = album.toLowerCase();
							// 		return nameLowerCase.includes(query.toLowerCase());
							// 	}
							// })
							.map(({ id, albumName, albumImage, trackId }: any) => (
								<SwiperSlide key={id}>
									<Suspense key={id} fallback={<HomeSkeleton />}><LazyCardAlbumHome id={id} albumImage={albumImage} albumName={albumName} trackId={trackId} /></Suspense>
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
