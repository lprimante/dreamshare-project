import styled from 'styled-components'

export const Nav = styled.nav`
  width: 80%;
  height: 30vh;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 20px 20px 0;

  .gatsby-image-wrapper {
    min-width: 300px;
    margin-left: 20px;
  }

  @media (min-width: 600px) {
    height: 10vh;
    flex-direction: row;

    .gatsby-image-wrapper {
      margin-left: -30px;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
`
