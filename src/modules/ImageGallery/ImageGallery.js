import React from 'react'
import { Slider } from 'pure-react-carousel'

import GalleryItem from './components/GalleryItem'
import { galleryItens } from './ImageGallery.constants'

import 'pure-react-carousel/dist/react-carousel.es.css'
import * as S from './ImageGallery.styles'

const ImageGallery = () => (
  <S.Carousel
    naturalSlideWidth={100}
    naturalSlideHeight={70}
    totalSlides={3}
  >
    <Slider>
      {galleryItens.map((item, index) => {
        return (
          <GalleryItem
            key={index}
            index={item.index}
            imgName={item.imgName}
            buttonContent={item.buttonContent}
            title={item.title}
            subtitle={item.subtitle}
          />
        )
      })}
    </Slider>
    <S.DotGroup />
  </S.Carousel>
)

export default ImageGallery
