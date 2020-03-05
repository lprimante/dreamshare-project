import styled from 'styled-components'
import { DotGroup as Dots, CarouselProvider } from 'pure-react-carousel'

export const Carousel = styled(CarouselProvider)`
  width: 100%;

  @media (min-width: 600px) {
    .horizontalSlider___281Ls {
      height: 100vh;
    }

    .carousel__slider-tray {
      width: 100% !important;
      display: flex;
      justify-content: center;
    }

    li {
      width: 30% !important;
      overflow: hidden;
      height: 100vh;
      margin-right: 10px;
    }
  }
`

export const DotGroup = styled(Dots)`
  margin-top: 5px;
  text-align: center;

  button {
    width: 15px;
    height: 15px;
    margin: 5px;
    border-radius: 10px;
    background-color: var(--color-light-red);
    opacity: 0.5;
  }

  & .carousel__dot--selected {
    opacity: 1;
  }

  @media (min-width: 600px) {
    display: none;
  }
`
