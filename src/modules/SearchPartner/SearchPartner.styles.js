import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 30px 0;
    text-align: center;
  }

  input {
    height: 48px;
    width: 100%;
    max-width: 350px;
    margin: 20px;
    padding: 4px 11px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
  }

  input:focus,
  input:hover {
    outline: none;
    border-color: var(--color-light-red);
  }

  button {
    max-width: 200px;
    border-radius: 25px;
  }

  button:hover {
    border: solid 1px var(--color-light-red);
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`

export const WrapperSearch = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
