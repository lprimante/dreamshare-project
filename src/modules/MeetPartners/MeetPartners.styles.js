import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 30px 0;
    text-align: center;
  }

  button {
    margin: 20px 0;
  }

  @media (min-width: 1024px) {
    width: 80%;
    padding: 45px;
  }
`
export const WrapperPartners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`
