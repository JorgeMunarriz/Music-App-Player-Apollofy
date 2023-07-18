import { useContext } from "react";
import { DataMusicContext } from "../../../context";
import { CardForPlaylistPlayer, PlaylistContainerStyles } from "../..";
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


SwiperCore.use([Navigation, Pagination]);

export const PlaylistContainerHome = () => {
  const data = useContext(DataMusicContext);
  const playlists = data?.data?.playlists;

  return (
    <PlaylistContainerStyles>
      {playlists &&
      <Swiper
      navigation
      pagination
      slidesPerView={2}
      spaceBetween={10}
    >
        {playlists.map(({ id, thumbnail, name}) => (
          <SwiperSlide key={id}>
          <CardForPlaylistPlayer
            thumbnail={thumbnail}
            name={name}
            id={id}
            // artist={artist}
            />
        </SwiperSlide>
        ))}
        </Swiper>
}
          {/* <CardForX  thumbnail={thumbnail} name={name} key={id} description={description} id={id} isFollowed={false} publicAccessible={true} primaryColor={""} />
        ))} */}
    </PlaylistContainerStyles>
  );
};
