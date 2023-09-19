import { lazy, Suspense, LazyExoticComponent, ComponentType } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

import styled from "styled-components";

import HomeSkeleton from "../../../assets/skeleton/homeSkeleton";

import { useUserMusicContext } from "../../../context";
import { breakpoints } from "../../../styles/breakpoints";

const LazyCardAlbumHome: LazyExoticComponent<ComponentType<any>> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("../../cards/CardForAlbum"));
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
      <h2 className="albumsTitle">Albums</h2>
      {albums && (
        <Swiper navigation pagination slidesPerView={3} spaceBetween={10} className="mySwiper">
          {albums &&
            albums
              .filter(({ albumName }) => {
                if (!query) return true;
                if (query) {
                  const nameLowerCase = albumName.toLowerCase();
                  return nameLowerCase.includes(query.toLowerCase());
                }
              })
              .map(({ id, albumName, albumImage, trackId }) => (
                <SwiperSlide key={id}>
                  <Suspense key={id} fallback={<HomeSkeleton />}>
                    <LazyCardAlbumHome id={id} albumImage={albumImage} albumName={albumName} trackId={trackId} />
                  </Suspense>
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

  .albumsTitle {
    font-size: 35px;
    color: white;
    align-items: flex-start;
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin-left: 1.5rem;
    opacity: 0.9;
  }
  .mySwiper {
    height: 80%;
    width: 100%;
    .swiper-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 10px;
      padding: 1.5rem;
      .swiper-slide {
        margin: 0;
        padding: 0;
        margin-top: 0 !important;
        margin-right: 0 !important;
      }
    }
    .swiper-pagination-bullet {
      width: 20px;
      height: 10px;
      border-radius: 10px;
      transition: all 0.3s;
      background-color: #ffffff;
      left: 0;
      top: 200px;
    }
    .swiper-pagination-bullet-active {
      background: #f8f7f9;
      width: 30px;
      height: 10px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 30px;
      height: 10px;
    }
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      color: #9d0b28;
    }
    .swiper-pagination {
      bottom: 0px;
    }
  }

@media (${breakpoints.min}px <= width <= ${breakpoints.mobileMax}px) {
  .swiper-pagination {
    display: none;
  }
}
		
@media (${breakpoints.mobileMax}px < width <= ${breakpoints.tabletMax}px) {
  .swiper-pagination {
    display: none;
  }
}

@media (${breakpoints.tabletMax}px < width <= ${breakpoints.laptopsMax}px) {
  .playlistTitle {
    font-size: 25px;
  }
}

@media (${breakpoints.laptopsMax}px < width <= ${breakpoints.desktopMax}px) {
  .playlistTitle {
    font-size: 25px;
  }
}

@media (width > ${breakpoints.desktopMax}px) {
  .albumsTitle {
    font-size: 25px;
  }
}
`;
