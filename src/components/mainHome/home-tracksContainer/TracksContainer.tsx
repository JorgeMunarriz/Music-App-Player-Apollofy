import {useContext, lazy, Suspense, LazyExoticComponent, ComponentType} from 'react';
import SwiperCore from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

import {  TracksContainerStyles } from '../..';
import { DataMusicContext } from '../../../context';
import HomeSkeleton from '../../../assets/skeleton/homeSkeleton';

const LazyCarPTrackHome: LazyExoticComponent<ComponentType<any>> = lazy(() => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		return resolve(import("../../cardForTrack/CardForTrack"));
	  }, 2000);
	});
  });


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
								<SwiperSlide>

									<Suspense  key={id} fallback={<HomeSkeleton />}><LazyCarPTrackHome thumbnail={thumbnail} name={name} genre={genre} id={id} artist={artist} url={url} liked={liked} reproductions={reproductions} /></Suspense>
								</SwiperSlide>
							))}
				</Swiper>
			)}
		</TracksContainerStyles>
	);
};
