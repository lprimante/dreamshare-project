import styled from 'styled-components'

export const About = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 30px 0;
  }

  @media (min-width: 600px) {
    max-height: 500px;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`
