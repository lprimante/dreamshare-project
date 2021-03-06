import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: var(--color-white);
  }

  ul, li {
    list-style: none;
  }

  button {
    font-size: var(--font-size-S);
    background: none;
    border: 0;
  }

  :root {
    --font-size-XS: 14px;
    --font-size-S: 16px;
    --font-size-M: 18px;
    --font-size-L: 22px;
    --font-size-XL: 32px;
    --font-weight-normal: 400;
    --font-weight-bold: 700;
    --color-sun-yellow: #F9D423;
    --color-yellowish-orange: #FFA710;
    --color-light-red: #FF4E50;
    --color-cornflower: #667DF3;
    --color-aqua: #19D4CA;
    --color-black: #000000;
    --color-greyish: #444444;
    --color-brownish-grey: #666666;
    --color-brown-grey: #999999;
    --color-grey-light-three: #CCCCCC;
    --color-grey-light-two: #D8D8D8;
    --color-grey-light-four: #E3E3E3;
    --color-grey-light-one: #F7F3F2;
    --color-white: #FFFFFF;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
`

export default globalStyles
