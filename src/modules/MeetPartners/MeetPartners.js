import React from 'react'

import Headline from '../../components/Headline'
import Partner from './components/Partner'
import Button from '../../components/Button'

import { partners } from './MeetPartners.contants'

import * as S from './MeetPartners.styles'

const MeetPartners = () => {
  return (
    <S.Wrapper>
      <Headline>Meet a partner for your best holiday</Headline>
      <S.WrapperPartners>
        {partners.map((item, index) => {
          return (
            <Partner
              key={index}
              name={item.name}
              photo={item.photo}
              Icon={item.Icon}
              color={item.color}
              description={item.description}
            />
          )
        })}
      </S.WrapperPartners>
      <Button tertiary>See other partners</Button>
    </S.Wrapper>
  )
}

export default MeetPartners
