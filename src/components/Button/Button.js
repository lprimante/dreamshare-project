import React from 'react'

import * as S from './Button.styles'

const Button = ({ primary, secundary, tertiary, onClick, children }) => {
  return (
    <S.Button onClick={onClick} primary={primary} secundary={secundary} tertiary={tertiary}>
      {children}
    </S.Button>
  )
}

export default Button
