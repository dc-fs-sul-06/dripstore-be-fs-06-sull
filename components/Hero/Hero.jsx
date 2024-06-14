import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { HeroSlide } from '../HeroSlide/HeroSlide';

export const Hero = ({ heroSlides }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <HeroSlide
            eyebrown={slide.eyebrow}
            titulo={slide.title}
            descricao={slide.subtitle}
            ctaText={slide.ctaText}
            ctaLink={slide.ctaUrl}
            imagem={slide.imageUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

