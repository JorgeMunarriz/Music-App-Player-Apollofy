import {useContext, lazy, Suspense, LazyExoticComponent, ComponentType } from 'react';
import {DataMusicContext} from '../../../context';

import SwiperCore from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {CardForPlaylistPlayerHome} from '../../cardForPlaylistHome/CardForPlaylistPlayerHome';
import { PlaylistContainerStyles } from './PlaylistContainer.Styles';
import HomeSkeleton from '../../../assets/skeleton/homeSkeleton';
import PlaylistLoader from '../../../assets/skeleton/skeleton';

SwiperCore.use([Navigation, Pagination]);

const LazyCarPlaylistHome: LazyExoticComponent<ComponentType<any>> = lazy(() => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		return resolve(import("../../cardForPlaylistHome/CardForPlaylistPlayerHome"));
	  }, 2000);
	});
  });

export const PlaylistContainerHome = () => {
	const data = useContext(DataMusicContext);
	const playlists = data?.data?.playlists;

	return (
		<PlaylistContainerStyles>
			{playlists && (
				<Swiper navigation pagination slidesPerView={2} spaceBetween={5} modules={[Pagination]} className="mySwiper">
					{playlists.map(({id, thumbnail, name, description}) => (
						<SwiperSlide >
							<Suspense key={id} fallback={<HomeSkeleton/>}><LazyCarPlaylistHome thumbnail={thumbnail} name={name} id={id} description={description} /></Suspense>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</PlaylistContainerStyles>
	);
};
