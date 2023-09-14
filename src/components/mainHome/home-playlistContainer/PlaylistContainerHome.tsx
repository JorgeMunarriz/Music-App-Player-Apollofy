/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { lazy, Suspense, LazyExoticComponent, ComponentType } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PlaylistContainerStyles } from './PlaylistContainer.Styles';
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
	// const { tracks } = useTrack();
	// const { allTrack } = tracks;

	return (
		<PlaylistContainerStyles>
			<h2>Playlists</h2>

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
