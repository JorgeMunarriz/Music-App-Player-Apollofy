import { useContext } from "react";
import { DataMusicContext } from "../../../context";
import {  PlaylistContainerStyles } from "../..";
import SwiperCore from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CardForPlaylistPlayerHome } from "../../cardForPlaylistHome/CardForPlaylistPlayerHome";


SwiperCore.use([Navigation, Pagination, Grid]);

export const PlaylistContainerHome = () => {
  const data = useContext(DataMusicContext);
  const playlists = data?.data?.playlists;

  return (
    <PlaylistContainerStyles>
      {playlists && (
        <Swiper
          navigation
          pagination
          slidesPerView={2}
          grid={{
            rows: 1,
          }}
          spaceBetween={5}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {playlists.map(({ id, thumbnail, name, description }) => (
            <SwiperSlide key={id}>
              <CardForPlaylistPlayerHome
                thumbnail={thumbnail}
                name={name}
                id={id}
                description={description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </PlaylistContainerStyles>
  );
};