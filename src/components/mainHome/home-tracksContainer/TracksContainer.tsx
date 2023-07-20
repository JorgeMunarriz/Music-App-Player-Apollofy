import SwiperCore from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

import {useContext} from 'react';
import { CardForTrack, TracksContainerStyles } from '../..';
import { DataMusicContext } from '../../../context';

type ProprQuery = {
	query: string;
};
export const TracksContainer = ({query}: ProprQuery) => {
	const data = useContext(DataMusicContext);
	const tracks = data?.data?.tracks?.sort((elemA: { reproductions: number; }, elemB: { reproductions: number; }) => elemB.reproductions - elemA.reproductions);

	return (
		<TracksContainerStyles>
		<h2>Most listened songs</h2>
			{tracks && (
				<Swiper navigation pagination slidesPerView={3} spaceBetween={10} className="mySwiper">
					{tracks &&
						tracks
							.filter(({genre}) => {
								if (!query) return true;
								if (query) {
									const nameLowerCase = genre.toLowerCase();
									return nameLowerCase.includes(query.toLowerCase());
								}
							})
							.map(({id, thumbnail, name, genre, artist, url, liked, reproductions}) => (
								<SwiperSlide key={id}>
									<CardForTrack thumbnail={thumbnail} name={name} genre={genre} id={id} artist={artist} url={url} liked={liked} reproductions={reproductions} />
								</SwiperSlide>
							))}
				</Swiper>
			)}
		</TracksContainerStyles>
	);
};
