import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 50px 0;

  hr {
    border: 1px solid var(--color-light-red);
    margin: 50px 0;
  }
`

export const WrapperFooter = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 50px;
  }
`

export const Logo = styled.p`
  color: var(--color-light-red);
  text-align: center;

  @media (min-width: 600px) {
    font-size: var(--font-size-XL);
  }
`

export const WrapperLinkList = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 90%;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    display: inline;
    margin-left: 10px;
  }

  a,
  a:visited {
    color: var(--color-brownish-grey);
  }

  @media (min-width: 600px) {
    margin: 0;
    align-items: flex-start;

    p {
      margin-bottom: 20px;
    }

    ul {
      width: 100%;
      max-height: 77px;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0;
    }

    li {
      margin: 5px 100px 0 0;
    }
  }
`

export const WrapperDesignedBy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .gatsby-image-wrapper {
    margin-left: 60px;
  }

  @media (min-width: 600px) {
    width: 25%;
  }
`
