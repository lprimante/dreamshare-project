import React from 'react'

import * as S from './Button.styles'

const Button = ({ primary, secundary, tertiary, children }) => {
  return (
    <S.Button primary={primary} secundary={secundary} tertiary={tertiary}>
      {children}
    </S.Button>
  )
}

export default Button
