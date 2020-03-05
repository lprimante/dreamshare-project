import styled, { css } from 'styled-components'

export const Button = styled.button`
  color: var(--color-grey-light-one);
  font-weight: var(--font-weight-bold);
  height: 48px;
  border-radius: 30px;
  margin-left: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    color: var(--color-light-red);
  }

  ${props =>
    props.secundary &&
    css`
      border: solid 1px var(--color-grey-light-one);

      &:hover {
        color: var(--color-light-red);
        border-color: var(--color-light-red);
      }
    `}

  ${props =>
    props.primary &&
    css`
      min-width: 300px;
      background-color: var(--color-light-red);

      &:hover {
        background-color: var(--color-white);
        color: var(--color-light-red);
      }
    `}

  ${props =>
    props.tertiary &&
    css`
      min-width: 300px;
      background-color: var(--color-white);
      color: var(--color-light-red);
      border: solid 1px var(--color-light-red);

      &:hover {
        background-color: var(--color-light-red);
        color: var(--color-white);
      }
  `}
`
