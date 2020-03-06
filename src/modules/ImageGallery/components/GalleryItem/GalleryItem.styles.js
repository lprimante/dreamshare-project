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

export const OverlayImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.2;
  position: absolute;
  top: 0;
`

export const WrapperText = styled.div`
  position: absolute;
  top: 60px;
  max-width: 300px;
  padding: 0 20px;
  color: var(--color-white);
  font-size: var(--font-size-XS);

  button {
    min-width: 80px;
    margin: 0;
    height: 32px;
    padding: 5px 10px;
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
