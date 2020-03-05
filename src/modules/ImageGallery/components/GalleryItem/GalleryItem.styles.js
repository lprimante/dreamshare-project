import styled from 'styled-components'

export const WrapperImage = styled.div`
  width: 120vw;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  @media (min-width: 600px) {
    width: 700px;
    height: 600px;

    img {
      margin: -10px 0 0 -120px;
    }
  }
`

export const WrapperText = styled.div`
  position: absolute;
  top: 60px;
  max-width: 300px;
  padding: 0 20px;
  color: var(--color-white);

  button {
    min-width: 80px;
    margin: 0;
  }

  h3 {
    margin: 10px 0;
  }

  @media (min-width: 600px) {
    top: 140px;
    max-width: 220px;
  }

  @media (min-width: 1024px) {
    top: 225px;
    max-width: 300px;
  }
`
