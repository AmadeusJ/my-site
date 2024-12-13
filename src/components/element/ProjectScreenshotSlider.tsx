// 프로젝트 상세 페이지 - 프로젝트 스크린샷 슬라이더
// src/components/element/ProjectScreenshotSlider.tsx

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Modal from 'react-modal';
import styles from './ProjectScreenshotSlider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type ImageSliderProps = {
  images: string[]; // Array of image paths
};

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '90%', // 화면 너비 기준 최대 크기
    maxHeight: '90%', // 화면 높이 기준 최대 크기
  },
  overlay: {
    zIndex: 8888,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

export default function ProjectScreenshotSlider({ images }: ImageSliderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3800, disableOnInteraction: false, }}
        loop={true}
        pagination={{ clickable: true }}
        speed={1000}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
              src={image.path}
              alt={`Slide ${index + 1}`}
              style={{ width: image.width, height: image.height, borderRadius: '8px' }}
              onClick={() => openModal(image.path)} // Open modal on image click
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Modal for zoomed-in image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Zoomed Image"
        ariaHideApp={false}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Zoomed"
            style={{
              maxWidth: '90vw', // 화면 너비의 90%를 넘지 않도록
              maxHeight: '90vh', // 화면 높이의 90%를 넘지 않도록
              borderRadius: '8px',
              objectFit: 'contain', // 비율 유지하며 컨테이너 안에 맞춤
            }}
          />
        )}
      </Modal>
    </>
  );
};
