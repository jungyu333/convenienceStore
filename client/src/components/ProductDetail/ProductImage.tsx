import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { IProductImageProps } from '../../@types/productDetail';

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  & .swiper-button-prev {
    color: ${({ theme }) => theme.colors.darkOrange};
    height: 20px;
    width: 20px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 40%;
    min-width: 400px;
    min-height: 500px;
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  @media ${({ theme }) => theme.device.laptop} {
    width: 40%;
    min-width: 300px;
    min-height: 500px;
  }
`;

const CustomArrow = styled.div`
  width: 25px;
  min-width: 25px;
  min-height: 25px;
  height: 25px;
  cursor: pointer;
  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.lightgray};
    &:hover {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;

function ProductImage({ images }: IProductImageProps) {
  SwiperCore.use([Navigation, Pagination]);
  const swiperRef = useRef<SwiperCore>();
  return (
    <Wrapper>
      {images?.length > 1 && (
        <CustomArrow onClick={() => swiperRef.current?.slidePrev()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </CustomArrow>
      )}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {images?.map(image => (
          <CustomSwiperSlide key={image.id}>
            <Image src={`${process.env.REACT_APP_SERVER_URL}/${image.src}`} />
          </CustomSwiperSlide>
        ))}
      </Swiper>

      {images?.length > 1 && (
        <CustomArrow onClick={() => swiperRef.current?.slideNext()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </CustomArrow>
      )}
    </Wrapper>
  );
}

export default ProductImage;
