import React from 'react'

import Nav from '../Nav'
import Button from '../../components/Button'

import * as S from './Header.styles'

const Header = () => (
  <S.Header>
    <Nav />
    <S.WrapperCallToAction>
      <h1>SHARE YOUR HOLIDAY DREAM</h1>
      <p>And find the perfect partner to fullfill it</p>
      <Button primary>Find your holiday partner</Button>
    </S.WrapperCallToAction>
  </S.Header>
)

export default Header
