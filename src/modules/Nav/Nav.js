import React from 'react'

import Image from '../../components/Image'
import Button from '../../components/Button'

import * as S from './Nav.styles'

const Nav = () => (
  <S.Nav>
    <a href='/'>
      <Image imgName='dreamshare_logo.png' />
    </a>
    <S.Menu>
      <li>
        <Button>Log In</Button>
      </li>
      <li>
        <Button secundary>Sign up</Button>
      </li>
    </S.Menu>
  </S.Nav>
)

export default Nav
