import React from 'react'
import { Slide } from 'pure-react-carousel'

import Image from '../../../../components/Image'
import Button from '../../../../components/Button'

import * as S from './GalleryItem.styles'

const GalleryItem = ({ index, imgName, buttonContent, title, subtitle }) =>
  <Slide index={index}>
    <S.WrapperImage>
      <Image imgName={imgName} />
      <S.OverlayImage />
      <S.WrapperText>
        <Button primary>{buttonContent}</Button>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </S.WrapperText>
    </S.WrapperImage>
  </Slide>

export default GalleryItem
