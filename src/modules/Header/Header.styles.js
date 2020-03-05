import styled from 'styled-components'
import background from '../../images/friends2.jpg'

export const Header = styled.header`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: overlay;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    min-height: 530px;
  }
`

export const WrapperCallToAction = styled.div`
  height: 28vh;
  min-height: 245px;
  width: 70%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: var(--color-white);

  h1 {
    text-align: center;
  }

  @media (min-width: 600px) {
    margin-top: 100px;

    h1 {
      font-size: 58px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 150px;
    max-width: 50%;

    h1 {
      font-size: 56px;
    }

    p {
      font-size: 30px;
    }
  }
`
