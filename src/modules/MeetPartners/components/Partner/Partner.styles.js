import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 55%;
  position: relative;
`

export const Partner = styled.div`
  min-width: 300px;
  max-width: 25%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 10px 0;
  }

  p {
    text-align: center;
    color: var(--color-greyish);
  }
`

export const WrapperImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 180px;
  overflow: hidden;

  .gatsby-image-wrapper {
    width: 150px;
    height: 150px;
  }
`

export const WrapperIcon = styled.div`
  width: 40px;
  height: 40px;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${props => `var(${props.color})`};
  border: 3px solid white;
  border-radius: 25px;

  & > svg {
    fill: white;
  }
`
