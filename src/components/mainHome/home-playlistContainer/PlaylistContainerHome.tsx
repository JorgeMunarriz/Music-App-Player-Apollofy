import {useContext} from 'react';
import {DataMusicContext} from '../../../context';

import SwiperCore from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {CardForPlaylistPlayerHome} from '../../cardForPlaylistHome/CardForPlaylistPlayerHome';
import { PlaylistContainerStyles } from './PlaylistContainer.Styles';

SwiperCore.use([Navigation, Pagination]);

import { useMemo } from "react";

export const PlaylistContainerHome = () => {
  const data = useContext(DataMusicContext);
  const playlists = data?.data?.playlists;

  console.log('renderiza el padre')

		const playlistCards = useMemo(() => {
			if (playlists) {
			return playlists.map(({ id, thumbnail, name, description }) => (
				<SwiperSlide key={id}>
				<CardForPlaylistPlayerHome thumbnail={thumbnail} name={name} id={id} description={description} />
				</SwiperSlide>
			));
			}
			return null;
		}, [playlists]);

  return (
    <PlaylistContainerStyles>
      {playlists && (
        <Swiper navigation pagination slidesPerView={2} spaceBetween={5} modules={[Pagination]} className="mySwiper">
          {playlistCards}
        </Swiper>
      )}
    </PlaylistContainerStyles>
  );
};
