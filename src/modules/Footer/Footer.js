import React from 'react'

import Image from '../../components/Image'

import * as S from './Footer.styles'

const Footer = () =>
  <S.Footer>
    <hr />
    <S.WrapperFooter>
      <S.Logo>DREAMSHARE</S.Logo>
      <S.WrapperLinkList>
        <p>Company</p>
        <ul>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>
          <li><a href='/'>Press</a></li>
          <li><a href='/'>Blog</a></li>
          <li><a href='/'>Terms & Privacy</a></li>
          <li><a href='/'>Help</a></li>
        </ul>
      </S.WrapperLinkList>
      <S.WrapperDesignedBy>
        <p>DESIGNED BY</p>
        <Image imgName='logo.png' />
      </S.WrapperDesignedBy>
    </S.WrapperFooter>
  </S.Footer>

export default Footer
