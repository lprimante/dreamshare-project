import React, { useState } from 'react'

import Headline from '../../components/Headline'
import Button from '../../components/Button'

import * as S from './SearchPartner.styles'

const SearchPartner = () => {
  const [interests, setInterests] = useState('')

  const handleChange = e =>
    setInterests(e.target.value)

  const onClick = e => (
    console.log(`I am interest in ${interests} in my holiday!`) ||
    e.preventDefault()
  )

  return (
    <S.Wrapper>
      <Headline>Create your holiday</Headline>
      <p>Hi! What are your holiday interests?</p>
      <S.WrapperSearch>
        <input
          type='search'
          name='interests'
          value={interests}
          onChange={handleChange}
          placeholder='Enter your interests'
        />
        <Button primary onClick={onClick}>Search Partners</Button>
      </S.WrapperSearch>
    </S.Wrapper>
  )
}

export default SearchPartner
