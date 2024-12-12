// 프로젝트 상세 페이지 - 프로젝트 스크린샷 슬라이더
// src/components/element/ProjectScreenshotSlider.tsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type ImageSliderProps = {
  images: string[]; // Array of image paths
};

export default function ProjectScreenshotSlider({ images }: ImageSliderProps) {
  return (
    <Swiper
      className='swiper'
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false, }}
      loop={true}
      pagination={{ clickable: true }}
      speed={1000}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', borderRadius: '8px' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
