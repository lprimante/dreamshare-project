import React from 'react'
import PropTypes from 'prop-types'

import * as S from './Headline.styles'

const Headline = ({ children }) => <S.Headline>{children}</S.Headline>

Headline.propTypes = {
  children: PropTypes.string.isRequired
}

export default Headline
