import React from 'react'
import Image from '../../../../components/Image'

import * as S from './Partner.styles'

const Partner = ({ name, photo, Icon, description, color }) =>
  <S.Partner>
    <S.Wrapper>
      <S.WrapperImg>
        <Image imgName={photo} />
      </S.WrapperImg>
      <S.WrapperIcon color={color}>
        <Icon />
      </S.WrapperIcon>
    </S.Wrapper>
    <h4>{name}</h4>
    <p>{description}</p>
  </S.Partner>

export default Partner
